<template>
    <section class="article-details">
        <p class="article-details__date">{{ articleDate }}</p>
        <h1 class="article-details__title">{{ article.title }}</h1>
        <article-author-element
            class="article-details__author"
            :author-name="article.author"
        />
        <b-img-lazy
            class="article-details__image"
            :src="article.image"
        />
        <p class="article-details__intro">{{ article.intro }}</p>
        <p class="article-details__text">{{ article.text }}</p>
    </section>
</template>

<script>
    import ArticleAuthorElement from '~/components/article/ArticleAuthorElement';

    export default {
        name: 'article-details',

        components: { ArticleAuthorElement },

        props: {
            article: {
                type: Object,
                required: true,
            },
        },

        computed: {
            /**
             * Returns properly formatted date of creation for article.
             *
             * @returns {string}
             */
            articleDate() {
                const date = new Date(this.article.createdAt);
                return date.toLocaleDateString();
            },
        },
    };
</script>

<style lang="scss" scoped>
    @import "~bootstrap/scss/functions";
    @import "~bootstrap/scss/variables";
    @import "~bootstrap/scss/mixins/_breakpoints";

    .article-details {
        padding-top: 15%;

        @include media-breakpoint-up(md) {
            padding: 5% 15%;
        }

        @include media-breakpoint-up(lg) {
            padding: 5% 25%;
        }

        &__date {
            text-align: center;
            color: #a9a9a9;
        }

        &__title,
        &__author,
        &__image {
            margin-bottom: 15px;
        }

        &__image {
            width: 100%;
            border-radius: 5px;
        }
    }
</style>
