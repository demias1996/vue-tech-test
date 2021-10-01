<template>
    <div class="article-author-element d-flex align-items-center">
        <b-avatar class="mr-3" variant="primary">
            <b-icon-people-fill />
        </b-avatar>
        <span class="article-author-element__name">
            {{ authorName }}
        </span>
    </div>
</template>

<script>
    import { BIconPeopleFill } from 'bootstrap-vue';

    export default {
        name: 'article-author-element',

        components: { BIconPeopleFill },

        props: {
            authorName: {
                type: String,
                default: '',
            },
        },
    };
</script>

<style scoped>
    .article-author-element {
        color: #000000;
    }
</style>
