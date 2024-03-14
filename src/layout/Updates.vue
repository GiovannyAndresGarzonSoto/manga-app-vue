<template>
  <div class="updates">
    <header class="header" v-show="chapters.length >= 0">
      <h3 class="header__title">Ponte al día</h3>
      <a class="header__tag tag">Todo lo Reciente &#x276D;</a>
    </header>

    <section class="titles" v-if="chapters.length > 0">
      <div @click="toTitle(chapter.manga._id)" @mouseleave="removeMangaMask" @mouseenter="setMangaMask" class="title"
        v-for="(chapter, _) in chapters" :key="chapter.id">
        <div ref="box" class="title__image-box">
          <img class="title__image" :src="`${chapter.manga.images.cover}`" alt="">
          <span class="title__name">{{ chapter.manga.title }}</span>
          <span class="title__author">{{ chapter.author.name }}</span>
        </div>
        <div ref="info" class="title__info">
          <span class="title__number">#{{ chapter.number }}</span>
          <span class="title__premiere">Hoy</span>
          <span class="title__chapter">Capítulo {{ chapter.number }} {{ chapter.title }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { axios } from '../config'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useTo } from '../hooks'

export default {
  name: 'Updates',
  setup() {
    const router = useRouter()
    const chapters = ref([])
    const box = ref(null)
    const info = ref(null)

    const { toTitle } = useTo(router)

    const getChapters = async () => {
      const { data } = await axios.get('/chapter')
      chapters.value = data.data.sort((a, b) => {
        const dateA = new Date(a.premiere).getTime()
        const dateB = new Date(b.premiere).getTime()
        return dateB - dateA
      })
    }

    const setMangaMask = async (e) => {
      e.target.childNodes[1].classList.add('title__info-hover')
    }

    const removeMangaMask = async (e) => {
      e.target.childNodes[1].classList.remove('title__info-hover')
    }

    onMounted(() => {
      getChapters()
    })

    return {
      chapters,
      setMangaMask,
      removeMangaMask,
      toTitle,
      box,
      info,
    }
  }
}
</script>