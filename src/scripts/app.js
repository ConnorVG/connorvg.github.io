
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from 'vue';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('u-app', require('./components/App.vue'));
Vue.component('u-main', require('./components/Main.vue'));

Vue.component('u-share', require('./components/Share.vue'));

Vue.component('u-code', require('./components/Code.vue'));
Vue.component('u-article', require('./components/Article.vue'));

Vue.component('u-laravel-acl', require('./components/fun/LaravelAcl.vue'));

const app = new Vue({
    el: '#app',
});
