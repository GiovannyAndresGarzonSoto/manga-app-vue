<template>
    <picture class="hero">
      <div v-show="isPostersReady" ref="banner" class="hero__item"></div>
    </picture>
</template>

<script lang="ts">
import { axios } from '../config'
import { defineComponent } from 'vue'
import { onMounted, ref } from 'vue'

export default defineComponent({
  name: 'hero',
  setup() {
    const posters = ref([])
    const isPostersReady = ref(false)
    const banner = ref<HTMLDivElement>()

    const getPosters = async() => {
      const {data} = await axios.get('/poster')
      posters.value = data.data
    }

    const generateAnimation = () => {
      const sliderTransition = `
      @keyframes sliderTransition {
        0% {
            background-image: url(${posters.value[0].image});
        }
        33% {
            background-image: url(${posters.value[1].image});
        }
        66% {
            background-image: url(${posters.value[2].image});
        }
        100% {
          background-image: url(${posters.value[0].image});
        }
      }`

      const styleSheet = document.styleSheets[0];
      styleSheet.insertRule(sliderTransition, styleSheet.cssRules.length);

      banner.value.style.animationName = "sliderTransition";
      banner.value.style.animationDuration = "12s";
      banner.value.style.animationIterationCount = "infinite";
    }

    onMounted(async() => {
      await getPosters()
      generateAnimation()
      isPostersReady.value = true      
    })

    return {
      posters,
      isPostersReady,
      banner
    }
  }
})
</script>

<!-- <style src="../scss/layout/_hero.scss"></style> -->