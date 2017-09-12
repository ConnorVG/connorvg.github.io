<template>
    <article class="article">
        <header class="article__header">
            <h1 class="article__title" v-text="title"></h1>
            <p class="article__description" v-text="description"></p>
        </header>

        <template v-for="block in blocks">
            <div v-if="typeof block === 'string'" class="article__content" v-html="block"></div>

            <u-code v-else-if="block.type === 'code'" :u-file="block.file" :u-files="block.files"></u-code>
        </template>

        <u-share :u-message="shareMessage"></u-share>
    </article>
</template>

<script>
    import formatter from 'marked';
    import axios from 'axios';

    const renderer = new formatter.Renderer();

    renderer.link = (href, title, text) => {
        return `<a href="${href}" target="_blank" rel="noopener noreferrer" title="${title ? title : href}">${text}</a>`;
    };

    export default {
        props: {
            uFile: {
                type: String,
                required: true,
            },
        },

        data() {
            return {
                title: 'title.load()',
                description: 'description.load()',
                blocks: [],
            };
        },

        created() {
            axios.get(`/public/static/article/${this.uFile}.json`)
                .then(({ data }) => {
                    this.title = data.title;
                    this.description = data.description;

                    this.blocks = data.blocks.map(block => {
                        if (typeof block !== 'string') {
                            return block;
                        }

                        return formatter(block, {
                            smartypants: true,
                            renderer,
                        });
                    });
                });
        },

        computed: {
            shareMessage() {
                return `Check out ${this.title} by @ConnorVG. "${this.description}"`;
            },
        },
    };
</script>
