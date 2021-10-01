<template>
    <div class="blog-page-content">
        <h1 class="blog-page-content__title text-center">Recent Articles</h1>
        <b-container class="blog-page-content__articles articles-container">
            <b-row>
                <b-col
                    v-for="article in articles"
                    :key="article.id"
                    class="d-flex align-items-stretch"
                    cols="12"
                    sm="6"
                    lg="4"
                >
                    <article-card :article="article" />
                </b-col>
            </b-row>
        </b-container>
        <b-pagination
            :value="$route.query.page || 1"
            align="center"
            :total-rows="articlesCount"
            :per-page="12"
            @input="changePage"
        />
    </div>
</template>

<script>
    import ArticleCard from '~/components/article/ArticleCard';

    export default {
        components: {
            ArticleCard,
        },

        watchQuery: ['searchQuery', 'page'],

        async asyncData({ query, $axios }) {
            const articles = await $axios.$get(`https://6141b2f5357db50017b3dc1a.mockapi.io/api/v1/Articles?search=${ query.searchQuery || '' }&page=${ query.page || 1 }&limit=12`);
            /* All articles are loaded to only get count for pagination
            as I haven't found option in API to get count for articles separately
            or as part of request.
            I know that getting all items is not a good approach,
            but that's only option I've found to make pagination dynamic.
             */
            const allArticles = await $axios.$get(`https://6141b2f5357db50017b3dc1a.mockapi.io/api/v1/Articles?search=${ query.searchQuery || '' }`);

            return {
                articles,
                articlesCount: allArticles.length,
            };
        },

        methods: {
            /**
             * Redirects to the base page with appropriate query params.
             *
             * @param {number} page
             */
            changePage(page) {
                const { searchQuery } = this.$route.query;
                const searchQueryPart = searchQuery ? `searchQuery=${ searchQuery }&` : '';

                this.$router.push(`/?${ searchQueryPart }page=${ page }`);
            },
        },
    };
</script>

<style lang="scss" scoped>
    .blog-page-content {
        padding-top: 3%;

        &__title {
            margin-bottom: 5%;
        }
    }
</style>
