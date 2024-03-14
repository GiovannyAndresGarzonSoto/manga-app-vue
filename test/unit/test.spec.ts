import Loader from '../../src/layout/Loader.vue'
import {describe, expect, test, it} from 'vitest'
import { shallowMount } from '@vue/test-utils'

describe('setup test suit example', () => {
   test('should be match with snapshot', () => {
      const wrapper = shallowMount(Loader)
      expect(wrapper.html()).toMatchSnapshot()
   })
})