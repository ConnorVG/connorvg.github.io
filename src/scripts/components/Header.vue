<template>
    <header class="header">
        <ul class="header__items">
            <li v-for="item in items" class="header__item">
                <a :href="item.href" :target="item.target" rel="noopener noreferrer" class="header__link">
                    <span :class="`icon icon--${item.icon}`"></span>

                    <div v-if="item.bauble" class="bauble">
                        <span class="icon icon--arrow-up"></span>
                        <p v-text="item.bauble"></p>
                    </div>
                </a>
            </li>
        </ul>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                items: [{
                    href: 'https://twitter.com/ConnorVG',
                    target: '_blank',
                    icon: 'twitter',
                }, {
                    href: 'https://github.com/ConnorVG',
                    target: '_blank',
                    icon: 'github',
                }, {
                    href: 'mailto:contact@connor-parks.email?subject=Hey&body=I am looking for a freelance web developer to...',
                    icon: 'email',
                    bauble: 'Contact me!',
                }],
            };
        },
    };
</script>
