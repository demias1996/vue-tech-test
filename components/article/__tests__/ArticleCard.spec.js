import { shallowMount } from '@vue/test-utils';
import ArticleCard from '@/components/article/ArticleCard';
import { ArticleFixture } from '@/fixtures/ArticleFixture';
import { BCard, BCardText } from 'bootstrap-vue'

/**
 * Returns wrapper for component shallowly mounted with required props.
 *
 * @param {object} propsData
 * @returns {Wrapper<Vue>}
 */
const shallowMountArticleCard = (propsData = {}) =>
    shallowMount(ArticleCard, { propsData: {
        article: { ...ArticleFixture },
        ...propsData,
    } });

describe('ArticleCard', () => {
    test('is a Vue instance', () => {
        const wrapper = shallowMountArticleCard();
        expect(wrapper.vm).toBeTruthy();
    });

    test('is rendered correctly with required prop', () => {
        const wrapper = shallowMountArticleCard();
        expect(wrapper.element).toMatchSnapshot();
    });

    test('is article title filled in card', () => {
        const wrapper = shallowMountArticleCard();
        const cardElement = wrapper.findComponent(BCard);

        expect(cardElement.attributes().title).toBe(ArticleFixture.title);
    });

    test('is article author name filled in card', () => {
        const wrapper = shallowMountArticleCard();
        const cardElement = wrapper.findComponent(BCard);

        expect(cardElement.attributes().subtitle).toBe(ArticleFixture.author);
    });

    test('is article image source filled in card', () => {
        const wrapper = shallowMountArticleCard();
        const cardElement = wrapper.findComponent(BCard);

        expect(cardElement.attributes().imgsrc).toBe(ArticleFixture.image);
    });

    test('is article image description filled in card', () => {
        const wrapper = shallowMountArticleCard();
        const cardElement = wrapper.findComponent(BCard);
        const { author, title } = ArticleFixture;

        expect(cardElement.attributes().imgalt).toBe(`Article from ${ author } with title ${ title }`);
    });

    test('is article intro filled', () => {
        const wrapper = shallowMountArticleCard();
        const cardTextElement = wrapper.findComponent(BCardText);

        expect(cardTextElement.text()).toBe(ArticleFixture.intro);
    });

    test('is article route set', () => {
        const wrapper = shallowMountArticleCard();
        const linkElement = wrapper.find('.article-link');

        expect(linkElement.attributes().to).toBe(`/article/${ ArticleFixture.id }`);
    });
});
