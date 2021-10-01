<template>
    <footer class="app-footer container d-flex align-items-center justify-content-center">
        <b-icon-bookmarks-fill class="mr-2" />
        <p class="footer-title mb-0">{{ title }}</p>
    </footer>
</template>

<script>
    import { BIconBookmarksFill } from 'bootstrap-vue';

    export default {
        name: 'app-footer',

        components: {
            BIconBookmarksFill,
        },

        props: {
            title: {
                type: String,
                default: '',
            },
        },
    };
</script>

<style lang="scss" scoped>
    .app-footer {
        min-height: 70px;
    }
</style>
