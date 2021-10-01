import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import { config } from '@vue/test-utils';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

config.stubs['nuxt-link'] = { template: '<a><slot /></a>' };
