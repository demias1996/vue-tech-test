import { shallowMount } from '@vue/test-utils';
import ArticleDetails from '@/components/article/ArticleDetails';
import { ArticleFixture } from '@/fixtures/ArticleFixture';
import ArticleAuthorElement from '@/components/article/ArticleAuthorElement'
import { BImgLazy } from 'bootstrap-vue'

/**
 * Returns wrapper for component shallowly mounted with required props.
 *
 * @param {object} propsData
 * @returns {Wrapper<Vue>}
 */
const shallowMountArticleDetails = (propsData = {}) =>
    shallowMount(ArticleDetails, { propsData: {
        article: { ...ArticleFixture },
        ...propsData,
    } });

describe('ArticleCard', () => {
    test('is a Vue instance', () => {
        const wrapper = shallowMountArticleDetails();
        expect(wrapper.vm).toBeTruthy();
    });

    test('is rendered correctly with required prop', () => {
        const wrapper = shallowMountArticleDetails();
        expect(wrapper.element).toMatchSnapshot();
    });

    test('is article date filled', () => {
        const wrapper = shallowMountArticleDetails();
        const articleDate = wrapper.find('.article-details__date');

        expect(articleDate.text()).toBe('9/15/2021');
    });

    test('is article title filled', () => {
        const wrapper = shallowMountArticleDetails();
        const titleElement = wrapper.find('.article-details__title');

        expect(titleElement.text()).toBe(ArticleFixture.title);
    });

    test('is article author name set', () => {
        const wrapper = shallowMountArticleDetails();
        const authorElement = wrapper.findComponent(ArticleAuthorElement);

        expect(authorElement.props().authorName).toBe(ArticleFixture.author);
    });

    test('is article image set', () => {
        const wrapper = shallowMountArticleDetails();
        const imageElement = wrapper.findComponent(BImgLazy);

        expect(imageElement.props().src).toBe(ArticleFixture.image);
    });

    test('is article intro filled', () => {
        const wrapper = shallowMountArticleDetails();
        const articleIntro = wrapper.find('.article-details__intro');

        expect(articleIntro.text()).toBe(ArticleFixture.intro);
    });

    test('is article text filled', () => {
        const wrapper = shallowMountArticleDetails();
        const articleText = wrapper.find('.article-details__text');

        expect(articleText.text()).toBe(ArticleFixture.text);
    });
});
