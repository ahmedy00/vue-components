import { beforeEach, describe, expect, test } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import Loader from '@/components/Loader/Loader.vue'

describe('Loader Component', () => {
  let wrapper: VueWrapper<any>

  beforeEach(() => {
    wrapper = mount(Loader, {
      props: {
        show: true,
        size: 'large',
        text: 'Please Wait',
        theme: 'dark'
      }
    })
  })

  describe('Fundamental Tests', () => {
    test('renders component when `show` prop is true', () => {
      expect(wrapper.find('[data-test="loader"]').exists()).toBe(true)
    })

    test('renders text when text prop is exists', () => {
      expect(wrapper.find('[data-test="loader-text"]').exists()).toBe(true)
    })
  })

  describe('Style Tests', () => {
    test('has `w-16` and `h-16` classes while size is large', () => {
      console.log('--------------------------------classList------------------------', wrapper.find('[data-test="spinner"]').element.classList)
      expect(wrapper.find('[data-test="spinner"]').classes()).toContain('w-16')
      expect(wrapper.find('[data-test="spinner"]').classes()).toContain('h-16')
    })

    test('has `text-white` class while theme is dark', () => {
      expect(wrapper.find('[data-test="loader-text"]').classes()).toContain('text-white')
    })

    test('has correct default styles', () => {
      expect(wrapper.find('[data-test="loader"]').element).toMatchSnapshot()
    })
  })
})