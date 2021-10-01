import { shallowMount } from '@vue/test-utils';
import AppHeader from '@/components/common/AppHeader';

describe('AppHeader', () => {
    test('is a Vue instance', () => {
        const wrapper = shallowMount(AppHeader);
        expect(wrapper.vm).toBeTruthy();
    });

    test('is rendered correctly with default props', () => {
        const wrapper = shallowMount(AppHeader);
        expect(wrapper.element).toMatchSnapshot();
    });

    test('title to be displayed', () => {
        const wrapper = shallowMount(AppHeader, {
            propsData: {
                title: 'Test title',
            },
        });

        const titleElement = wrapper.find('.header-title');

        expect(titleElement.text()).toBe('Test title');
        expect(wrapper.element).toMatchSnapshot();
    });

    test('search is performed', () => {
        const pushStub = jest.fn();
        const wrapper = shallowMount(AppHeader, {
            mocks: {
                $router: {
                    push: pushStub,
                },
            },
        });

        wrapper.vm.searchQuery = 'Test search';

        const searchForm = wrapper.find('.search-form');

        searchForm.trigger('submit');

        expect(pushStub).toHaveBeenCalledTimes(1);
        expect(pushStub).toHaveBeenCalledWith('/?searchQuery=Test search');
    });
});
