<template>
    <header>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-icon-bookmarks-fill class="mr-2" font-scale="1.75" variant="light" />
            <b-navbar-brand class="header-title" href="#">{{ title }}</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse" />

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/">Home</nuxt-link>
                    </li>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-form class='search-form' @submit.prevent="performSearch">
                        <b-form-input
                            v-model="searchQuery"
                            size="sm"
                            class="mr-sm-2"
                            placeholder="Search"
                        />
                        <b-button
                            size="sm"
                            class="search-button my-2 my-sm-0"
                            type="submit"
                        >
                            Search
                        </b-button>
                    </b-nav-form>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </header>
</template>

<script>
    import { BIconBookmarksFill } from 'bootstrap-vue';

    export default {
        name: 'app-header',

        components: {
            BIconBookmarksFill,
        },

        props: {
            title: {
                type: String,
                default: '',
            },
        },

        data() {
            return {
                searchQuery: '',
            };
        },

        methods: {
            /**
             * Redirects to the main page with search query param.
             */
            performSearch() {
                this.$router.push(`/?searchQuery=${ this.searchQuery }`);
            },
        },
    };
</script>
