import { configure } from '@storybook/vue';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

configure(require.context('../src', true, /\.stories\.js$/), module);
