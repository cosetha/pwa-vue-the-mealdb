import { mount } from '@vue/test-utils';
import Search from '../../src/components/Search.vue';

describe('Hello.vue', () => {
  it('renders props placeholder dan label ketika dilempar', () => {
    const msgProp = 'sebuah pesan';
    const labelProp = 'ada label';
    const wrapper = mount(Search, {
      propsData: {
        msg: msgProp,
        label: labelProp
      }
    });
    const labelId = wrapper.find('#label');
    expect(labelId.element.id).toBe('label');
  });

  it('Render Button dengan css class btn', () => {
    const msgProp = 'sebuah pesan';
    const labelProp = 'ada label';
    const wrapper = mount(Search, {
      propsData: {
        msg: msgProp,
        label: labelProp
      }
    });
    const button = wrapper.find({ ref: 'searchButton' });
    expect(button.find('.btn').exists()).toBe(true);
  });
});
