import { shallowMount } from '@vue/test-utils';
import ArticleAuthorElement from '@/components/article/ArticleAuthorElement';


describe('ArticleAuthorElement', () => {
    test('is a Vue instance', () => {
        const wrapper = shallowMount(ArticleAuthorElement);
        expect(wrapper.vm).toBeTruthy();
    });

    test('is rendered correctly with default props', () => {
        const wrapper = shallowMount(ArticleAuthorElement);
        expect(wrapper.element).toMatchSnapshot();
    });

    test('author name to be displayed', () => {
        const wrapper = shallowMount(ArticleAuthorElement, {
            propsData: {
                authorName: 'Test',
            },
        });

        const nameElement = wrapper.find('.article-author-element__name');

        expect(nameElement.text()).toBe('Test');
        expect(wrapper.element).toMatchSnapshot();
    });
});
