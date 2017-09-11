<template>
    <main class="main">
        <div class="main__content">
            <h1 class="main__title" v-text="title"></h1>
            <span class="main__tagline" :class="{ 'main__tagline--changed': changed }" v-html="tagline"></span>
        </div>
    </main>
</template>

<script>
    const CHANGE_DELAY = 50;
    const TICK_DELAY = 3000;
    const TAGLINES = [
        'an <q cite="https://en.oxforddictionaries.com/definition/epic">epic</q> web developer',
        'huge <q cite="https://laravel.com">Laravel</q> enthusiast',
        'attempted <q cite="https://vuejs.com">VueJS</q> fiddler',
        '<q cite="https://php.net">PHP</q> wizard',
    ];

    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

    const next = (count, avoid) => {
        let number = random(0, count - 1);
        if (number === avoid) {
            number++;
        }

        return number;
    };

    export default {
        data() {
            return {
                title: 'Connor S. Parks',
                index: 0,
                changed: false,
                interval: null,
            };
        },

        mounted() {
            this.interval = setInterval(this.tick.bind(this), TICK_DELAY);
        },

        beforeDestroy() {
            clearInterval(this.interval);

            this.interval = null;
        },

        methods: {
            tick() {
                this.index = next(TAGLINES.length, this.index);
                this.changed = true;

                setTimeout(() => {
                    this.changed = false;
                }, CHANGE_DELAY);
            },
        },

        computed: {
            tagline() {
                return TAGLINES[this.index];
            },
        }
    };
</script>
