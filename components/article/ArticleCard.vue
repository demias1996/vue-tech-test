<template>
    <b-card
        :title="article.title"
        :sub-title="article.author"
        :img-src="article.image"
        :img-alt="articleImageDescription"
        img-top
        tag="article"
        class="mb-4"
        body-class="d-flex flex-column"
    >
        <b-card-text>
            {{ article.intro }}
        </b-card-text>

        <nuxt-link class="article-link mt-auto" :to="articleRoute">
            <b-button class="w-100" variant="primary">
                Open article
            </b-button>
        </nuxt-link>
    </b-card>
</template>

<script>
    export default {
        name: 'article-card',

        props: {
            article: {
                type: Object,
                required: true,
            },
        },

        computed: {
            /**
             * Returns description with some details about article for image.
             *
             * @returns {string}
             */
            articleImageDescription() {
                const { author, title } = this.article;

                return `Article from ${ author } with title ${ title }`;
            },

            /**
             * Returns _article route with appropriate id.
             *
             * @returns {string}
             */
            articleRoute() {
                return `/article/${ this.article.id }`;
            },
        },
    };
</script>
