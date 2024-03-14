import { assert, describe, expect, test } from 'vitest'
import { shallowMount, mount } from '@vue/test-utils'
import MangaTitle from '../../../src/pages/MangaTitle.vue'

describe('<MangaTitle> unit tests', () => {
    test('should be match snapshot', () => {
        const wrapper = shallowMount(MangaTitle)
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('should be have a div.content', async () => {
        const wrapper = shallowMount(MangaTitle)
        const div = wrapper.find('div.content')
        assert.ok(div.exists())
    })

    
})