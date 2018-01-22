<template>
    <div :class="{ 'page--article': uContent !== 'main' }">
        <u-header></u-header>

        <template v-if="uContent !== 'main'">
            <slot :name="uContent"></slot>
        </template>

        <u-main v-else></u-main>

        <div class="article-list">
            <ul class="article-list__items">
                <li v-for="article in articles" class="article-list__item">
                    <div class="article-list__content">
                        <a class="article-list__link" :href="article.href" v-text="article.title"></a>
                        <p class="article-list__description" v-text="article.description"></p>
                    </div>
                </li>
            </ul>
        </div>

        <u-footer></u-footer>
    </div>
</template>

<script>
    import Header from './Header.vue';
    import Footer from './Footer.vue';

    export default {
        components: {
            'u-header': Header,
            'u-footer': Footer,
        },

        props: {
            uContent: {
                type: String,
                required: false,
                default: 'main',
            },
        },

        data() {
            return {
                articles: [{
                    title: 'ACL in Laravel',
                    href: '/fun/acl-in-laravel',
                    description: 'a totally unopinionated method of ACL',
                }],
            };
        },
    };
</script>
