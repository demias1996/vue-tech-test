import { shallowMount } from '@vue/test-utils';
import AppFooter from '@/components/common/AppFooter';

describe('AppFooter', () => {
    test('is a Vue instance', () => {
        const wrapper = shallowMount(AppFooter);
        expect(wrapper.vm).toBeTruthy();
    });

    test('is rendered correctly with default props', () => {
        const wrapper = shallowMount(AppFooter);
        expect(wrapper.element).toMatchSnapshot();
    });

    test('title to be displayed', () => {
        const wrapper = shallowMount(AppFooter, {
            propsData: {
                title: 'Test title',
            },
        });

        const footerTitle = wrapper.find('.footer-title');

        expect(footerTitle.text()).toBe('Test title');
        expect(wrapper.element).toMatchSnapshot();
    });
});
