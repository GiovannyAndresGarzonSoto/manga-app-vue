<template>
  <!-- <nav class="nav" ref="banner" :class="{ 'animated-banner': showBanner }"> -->
  <nav ref="nav" class="nav animated-banner">
    <MenuIcon @click="toggleMenu(!isMenuActive)" />
    <a @click="toMain" class="nav__logo"><img src="../../public/logo-full.png" alt="logo"></a>
    <a @click="toMain" class="nav__item">Reciente</a>
    <a @click="toTopRanking" class="nav__item">Destacados</a>
    <a @click="toMangaList()" class="nav__item">Descubre</a>
    <a class="nav__item" href="https://medibang.com/mpc/" target="__blank">Creators</a>
    <a @click="toFavorites" class="nav__item">Favoritos</a>
    <a class="nav__item" href="https://www.shonenjump.com/mangaplus/whatismangaplus/" target="__blank">Sobre</a>
    <form @submit="toMangaList(searchInputText)" ref="searchInput" class="nav__search">
      <input class="nav__search-input input" v-model="searchInputText" maxlength="24" type="text"
        placeholder="Buscar por serie o autor">
    </form>
    <SearchIcon @click="toMangaList()" />
  </nav>
  <Menu v-if="isMenuActive" />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MenuIcon from '../components/MenuIcon.vue'
import SearchIcon from '../components/SearchIcon.vue'
import { useTo } from '../hooks'
import Menu from '../layout/Menu.vue'

export default defineComponent({
  name: 'Nav',
  components: {
    MenuIcon, SearchIcon, Menu
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const nav = ref<HTMLElement>(null)
    const searchInputText = ref<string>('')
    const searchInput = ref<HTMLInputElement>(null)
    const isMenuActive = ref<boolean>(false)

    const { toTopRanking, toFavorites, toMain, toMangaList } = useTo(router)

    const isMain = () => {
      if (route?.path !== '/') {
        nav.value.style.background = "rgba(0, 0, 0, 1)"
        nav.value.style.background = "linear-gradient(to bottom, black 16%, #0D0D0D 100%)";
      }
      if (route?.path === '/manga-list') {
        searchInput.value.style.opacity = "0"
      }
    }

    const toggleMenu = (toogle) => {
      console.log('toggleMenu')
      if (isMenuActive.value === false) {
        isMenuActive.value = toogle
      }
      if(isMenuActive.value === true){
        isMenuActive.value = toogle
      }
    }

    onMounted(() => {
      nav.value.style.setProperty('--before-bg-image', 'url("https://res.cloudinary.com/dlejpqwlh/image/upload/v1696354935/header-banner_lna8uh.png")');
      isMain()
    })

    return {
      nav,
      searchInput,
      toMangaList,
      toMain,
      toFavorites,
      toTopRanking,
      searchInputText,
      toggleMenu,
      isMenuActive
    }
  }
})
</script>