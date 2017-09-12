<template>
    <pre class="code-block" :class="{ 'copied': copied }">
        <ul class="code-block__files">
            <li v-for="item in files" class="code-block__file" :class="{ 'active': active(item) }">
                <a href="#" class="code-block__name" v-text="item.name" @click.prevent="open(item)"></a>
            </li>
        </ul>

        <a class="code-block__copy" href="#" @click.prevent="copy" v-if="copyable">copy</a>
        <span class="code-block__type" v-text="file.type"></span>

        <code :class="{ 'expanded': expanded }" v-html="file.content"></code>
        <a class="code-block__expando" href="#" @click.prevent="toggle" v-text="expanded ? 'Collapse Code' : 'Expand Code'"></a>
    </pre>
</template>

<script>
    import highlighter from 'highlight.js';
    import axios from 'axios';

    const COPY_DELAY = 250;

    export default {
        props: {
            uFiles: {
                type: Array,
                required: false,
                default: []
            },

            uFile: {
                type: String,
                required: false,
            },
        },

        data() {
            return {
                file: {
                    loading: true,
                    name: 'ma-file.js',
                    type: 'jabascoopt',
                    content: 'code.load()',
                    original: 'code.load()',
                },
                files: [],
                copied: false,
                expanded: false,
            };
        },

        created() {
            let files = this.uFiles;
            if (typeof this.uFile === 'string') {
                files = [this.uFile];
            }

            files.forEach(file => {
                axios.get(`/public/static/code/${file}.json`)
                    .then(({ data }) => {
                        this.files.push({
                            id: _.uniq(file),
                            name: data.name,
                            type: data.type,
                            original: data.content,
                            content: highlighter.highlight(data.type.toLowerCase(), data.content).value,
                        });
                    });
            })
        },

        computed: {
            copyable() {
                const actions = ['copy', 'cut'];
                let support = !! document.queryCommandSupported;

                actions.forEach(action => {
                    support = support && !!document.queryCommandSupported(action);
                });

                return support;
            }
        },

        watch: {
            'files': function (files) {
                if (! this.file.loading || files.length === 0) {
                    return;
                }

                this.open(files[0]);
            },
        },

        methods: {
            active(file) {
                return file.id === this.file.id;
            },

            open(file) {
                this.file = file;
            },

            toggle() {
                this.expanded = ! this.expanded;
            },

            copy() {
                const el = document.createElement('textarea');

                el.value = this.file.original;

                document.body.appendChild(el);

                el.select();

                document.execCommand('copy') || document.execCommand('cut');

                el.remove();

                this.copied = true;

                setTimeout(() => this.copied = false, COPY_DELAY);
            },
        },
    };
</script>
