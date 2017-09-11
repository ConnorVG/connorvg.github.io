<template>
    <div>
        <u-header></u-header>
        <u-main></u-main>
        <u-footer></u-footer>
    </div>
</template>

<script>
    import Header from './Header.vue';
    import Main from './Main.vue';
    import Footer from './Footer.vue';

    export default {
        components: {
            'u-header': Header,
            'u-main': Main,
            'u-footer': Footer,
        },
    };
</script>
