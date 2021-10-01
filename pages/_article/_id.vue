<template>
    <b-container class="article-page">
        <article-details :article="article" />
    </b-container>
</template>

<script>
    import ArticleDetails from '~/components/article/ArticleDetails';
    export default {
        name: '_id',

        components: { ArticleDetails },

        async asyncData({ params, $axios }) {
            const { data: article } = await $axios.get(`https://6141b2f5357db50017b3dc1a.mockapi.io/api/v1/Articles/${ params.id }`);

            return {
                article,
            };
        },
    };
</script>
