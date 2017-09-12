<template>
    <ul class="share">
        <li class="share__item share--twitter">
            <a class="share__link" :href="share('twitter')" rel="noopener noreferrer">Tweet</a>
        </li>
    </ul>
</template>

<script>
    const getSocialUrl = social => {
        switch (social) {
            case 'twitter':
                return 'https://twitter.com/intent/tweet?text={text}&url={url}';
        }
    };

    export default {
        props: {
            uMessage: {
                type: String,
                required: true,
            },
        },

        computed: {
            url() {
                return window.location.origin + window.location.pathname;
            },
        },

        methods: {
            share(social) {
                return getSocialUrl(social)
                    .replace('{text}', encodeURIComponent(this.uMessage))
                    .replace('{url}', encodeURIComponent(this.url));
            },
        },
    };
</script>
