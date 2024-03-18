import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Calculator from '../components/Calculator.vue';

describe('Calculator operations', () => {
    // Test for addition
    it('calculates sum correctly', async () => {
        const wrapper = mount(Calculator);
        await wrapper.find('[data-test="number-1"]').trigger('click');
        await wrapper.find('[data-test="operationAdd"]').trigger('click');
        await wrapper.find('[data-test="number-2"]').trigger('click');
        await wrapper.find('[data-test="operationEqual"]').trigger('click');
        expect(wrapper.vm.currentInput).toBe('3');
    });

    // Test for subtraction
    it('calculates difference correctly', async () => {
        const wrapper = mount(Calculator);
        await wrapper.find('[data-test="number-5"]').trigger('click')
        await wrapper.find('[data-test="operationSubtract"]').trigger('click')
        await wrapper.find('[data-test="number-3"]').trigger('click')
        await wrapper.find('[data-test="operationEqual"]').trigger('click')
        expect(wrapper.vm.currentInput).toBe('2');

    });

    // Test for multiplication
    it('calculates product correctly', async () => {
        const wrapper = mount(Calculator);
        await wrapper.find('[data-test="number-2"]').trigger('click')
        await wrapper.find('[data-test="operationMultiply"]').trigger('click')
        await wrapper.find('[data-test="number-2"]').trigger('click')
        await wrapper.find('[data-test="operationEqual"]').trigger('click')
        expect(wrapper.vm.currentInput).toBe('4');

    });

    // Test for division
    it('calculates quotient correctly', async () => {
        const wrapper = mount(Calculator);
        await wrapper.find('[data-test="number-8"]').trigger('click')
        await wrapper.find('[data-test="operationDivide"]').trigger('click')
        await wrapper.find('[data-test="number-2"]').trigger('click')
        await wrapper.find('[data-test="operationEqual"]').trigger('click')
        expect(wrapper.vm.currentInput).toBe('4');

    });

    // Test for division by zero
    it('handles division by zero correctly', async () => {
        const wrapper = mount(Calculator);
        await wrapper.find('[data-test="number-5"]').trigger('click');
        await wrapper.find('[data-test="operationDivide"]').trigger('click');
        await wrapper.find('[data-test="number-0"]').trigger('click');
        await wrapper.find('[data-test="operationEqual"]').trigger('click');
        expect(wrapper.vm.currentInput).toBe('Can not divide by zero:(');
    });
});
