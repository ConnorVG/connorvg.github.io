<template>
    <footer class="footer">
        <div class="footer__content">
            <p class="footer__info" v-html="info"></p>
            <p class="footer__tease" v-html="tease"></p>
        </div>
    </footer>
</template>

<script>
    export default {
        data() {
            return {
                info: 'I develop awesome stuff&hellip;',
                tease: '&hellip;if you want to talk, let me know',
            };
        },
    };
</script>
