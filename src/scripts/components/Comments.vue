<template>
    <div class="comments">
        <div class="comments__disqus" id="disqus_thread"></div>
    </div>
</template>

<script>
    export default {
        mounted() {
            const $vm = this;

            DISQUS.reset({
                reload: true,
                config() {
                    this.page.url = $vm.url;
                    this.page.title = $vm.title;
                },
            });
        },

        computed: {
            url() {
                return window.location.origin + window.location.pathname;
            },
        },
    };
</script>
