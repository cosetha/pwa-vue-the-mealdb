import { shallowMount } from '@vue/test-utils';
import Hello from '../../src/components/Hello.vue';

describe('Hello.vue', () => {
  it('renders props.msg ketika dilempar', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Hello, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
