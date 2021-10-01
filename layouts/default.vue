<template>
    <div class="blog-main-page">
        <app-header title="My Awesome Blog" />
        <main class="blog-main-page__content">
            <nuxt />
        </main>
        <app-footer title="© 2021 My Awesome Blog" />
    </div>
</template>

<script>
    import AppFooter from '~/components/common/AppFooter';
    import AppHeader from '~/components/common/AppHeader';

    export default {
        name: 'default.vue',

        components: { AppHeader, AppFooter },
    };
</script>

<style lang="scss" scoped>
    .blog-main-page {
        display: flex;
        flex-direction: column;
        min-height: 100vh;

        &__content {
            flex-grow: 1;
        }
    }
</style>

