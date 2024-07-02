<template>
  <div class="hero">
    <div v-show="isPostersReady" ref="banner" class="hero__item">
      <img class="hero__poster" ref="image1" />
      <img class="hero__poster" ref="image2" />
      <img class="hero__poster" ref="image3" />
    </div>
    <div class="toggle">
      <span class="toggle__first toggle__active"></span>
      <span class="toggle__second"></span>
    </div>
  </div>
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
    const image1 = ref<HTMLImageElement>()
    const image2 = ref<HTMLImageElement>()
    const image3 = ref<HTMLImageElement>()
    const banner = ref<HTMLDivElement>()

    const getAndSetPosters = async () => {
      const { data } = await axios.get('/poster')
      posters.value = data.data
      image1.value.src = posters.value[2].image
      image2.value.src = posters.value[1].image
      image3.value.src = posters.value[0].image
    }

    onMounted(async () => {
      await getAndSetPosters()
      isPostersReady.value = true
    })

    return {
      posters,
      isPostersReady,
      banner,
      image1, image2, image3
    }
  }
})
</script>

<style lang="scss">
.hero {
  width: 100%;
  height: 30rem;
  overflow: hidden;
  display: flex;
  background: linear-gradient(to top, #0D0D0D 10%, #010101 100%);
  display: flex;
  flex-wrap: no-wrap;
  padding: 1.6rem;
  justify-content: space-between;
  align-items: end;
  gap: 1.6rem;
  position: relative;
  overflow: hidden;

  &__item {
    height: 100%;
    width: calc(100% - 3.2rem);
    display: flex;
    gap: 1.6rem;
    justify-content: space-between;
    background-size: contain;
    background-repeat: no-repeat;
    transition: transform .2s linear;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    z-index: 1;
    align-items: center;
    position: absolute;
    transition: left .2s linear;
    // left: calc(-50% - -4.8rem);
  }

  &__poster {
    min-width: calc(50% - 1.6rem);
    height: 24rem;
    transform-origin: top;
    border-radius: 6px 6px 6px 6px;
    transition: transform .2s ease;

    &:hover {
      transform: scale(1.025);
      transition: transform .2s ease;

      @media (width <=1300px) {
        transform: scale(1.02);
      }
    }
  }
}

.toggle {
  width: 8rem;
  height: 2.4rem;
  position: absolute;
  bottom: -1.2rem;
  right: .8rem;
  display: flex;
  background-color: black;
  border-radius: 4px;
  margin: 2.4rem;
  justify-content: space-around;
  align-items: center;

  &>* {
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 8px;
    background-color: rgb(159, 159, 148);
  }

  &__active {
    width: 3.2rem;
    height: 1.4rem;
    border-radius: 8px;
    background-color: yellow;
  }
}
</style>