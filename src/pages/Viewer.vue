<template>
    <div class="viewer">
        <div class="pages">
            <div v-for="_ in pages" ref="pageViewer" class="pages__page">
            </div>
        </div>
        <div ref="wrapper" class="wrapper" @click="toggleWrapper">
            <div class="wrapper__logo-box">
                <img @click="toMain" class="wrapper__img" src="../../public/logo.png" alt="logo">
                <!-- <div class="wrapper_container">
                <h3 v-if="chapter" class="wrapper__title">
                    {{ chapter.title }}
                </h3> -->
                <!-- </div> -->
            </div>

            <div class="wrapper__menu" @click="toggleMenu">
                <MenuDotsIcon />
                <div v-if="isMenuActive" class="wrapper__container" ref="menuContainer">
                    <h3 class="wrapper__container-title">Dirección De Lectura</h3>
                    <div class="wrapper__input-group">
                        <label class="wrapper__label">
                            <input class="wrapper__input" type="radio" name="orientation" checked>
                            Vertical
                            <span class="wrapper__radio-button"></span>
                        </label>
                        <label class="wrapper__label">
                            <input class="wrapper__input" type="radio" name="orientation">
                            Horizontal
                            <span class="wrapper__radio-button"></span>
                        </label>
                    </div>
                    <h3 class="wrapper__container-title">Resolución De pagína</h3>
                    <div class="wrapper__input-group">
                        <label class="wrapper__label" v-for="(option, i) in qualityOptions" :key="i">
                            <input @click="changeQuality(option.value)" class="wrapper__input" :value="option.value"
                                type="radio" name="quality" v-model="selectedQuality">
                            {{ option.label }}
                            <span class="wrapper__radio-button"></span>
                        </label>
                    </div>
                </div>
            </div>

            <!-- <div class="wrapper__comments">
                <CommentsIcon />
            </div> -->
        </div>
    </div>
</template>

<script lang="ts">
import { useRoute } from 'vue-router'
import { axios } from '../config'
import { defineComponent, onMounted, ref } from 'vue'
import { useTo } from '../hooks'
import { useRouter, Router } from 'vue-router'
import { ChapterI } from '../interfaces'
import CommentsIcon from '../components/CommentsIcon.vue'
import MenuDotsIcon from '../components/MenuDotsIcon.vue'

export default defineComponent({
    name: 'viewer',
    components: {
        CommentsIcon, MenuDotsIcon
    },
    setup() {
        const route = useRoute()
        const pages = ref([])
        const pageViewer = ref()
        const wrapper = ref<HTMLDivElement>()
        const router: Router = useRouter()
        const isWrapperActive = ref<boolean>(false)
        const chapter = ref<ChapterI>()
        const isMenuActive = ref<boolean>(false)
        const menuContainer = ref()
        const selectedQuality = ref('medium')
        const { toMain } = useTo(router)
        const qualityOptions = [
            { label: 'Bajo', value: 'low' },
            { label: 'Medio', value: 'medium' },
            { label: 'Alto', value: 'high' }
        ]

        const getPagesByChapter = async () => {
            const { data } = await axios.get(`/pages/chapter/${route.params.chapterId}`)
            pages.value = data.data.pages
            chapter.value = data.data.chapter
            renderPages(selectedQuality.value)
        }

        const changeQuality = (quality) => {
            selectedQuality.value = quality
            renderPages(quality)
        }

        const renderPages = (quality) => {
            setTimeout(() => {
                pageViewer.value.forEach((e, i) => {
                    const url = pages.value[i].image
                    if (quality === 'high') {
                        const qualityUrl = url.replace('upload', 'upload/q_90')
                        e.style.backgroundImage = `url(${qualityUrl})`
                    }
                    if (quality === 'medium') {
                        const qualityUrl = url.replace('upload', 'upload/q_50')
                        e.style.backgroundImage = `url(${qualityUrl})`
                    }
                    if (quality === 'low') {
                        const qualityUrl = url.replace('upload', 'upload/q_30')
                        e.style.backgroundImage = `url(${qualityUrl})`
                    }
                })
            }, 300)
        }

        const toggleWrapper = () => {
            if (isWrapperActive.value === false) {
                // wrapper.value.style.display = 'block'
                isWrapperActive.value = true
            } else {
                // wrapper.value.style.display = 'none'
                isWrapperActive.value = false
            }
        }

        const toggleMenu = () => {
            if (!isMenuActive.value) {
                isMenuActive.value = true
            } else {
                isMenuActive.value = false
            }
        }

        onMounted(async () => {
            getPagesByChapter()
        })

        return {
            pages,
            pageViewer,
            wrapper,
            toMain,
            isWrapperActive,
            chapter,
            renderPages,
            changeQuality,
            toggleMenu,
            qualityOptions,
            menuContainer,
            selectedQuality,
            toggleWrapper,
            isMenuActive
        }
    }
})
</script>
