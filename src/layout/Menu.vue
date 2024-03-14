<template>
    <div class="menu">
        <a @click="toMain" class="menu__item">Reciente</a>
        <a @click="toTopRanking" class="menu__item">Destacados</a>
        <a @click="toMangaList()" class="menu__item">Descubre</a>
        <a class="menu__item" href="https://medibang.com/mpc/" target="__blank">Creators</a>
        <a @click="toFavorites" class="menu__item">Favoritos</a>
        <a class="menu__item" href="https://www.shonenjump.com/mangaplus/whatismangaplus/" target="__blank">Sobre</a>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useTo } from '../hooks';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'menu',
    setup() {
        const router = useRouter()
        const { toTopRanking, toFavorites, toMain, toMangaList } = useTo(router)

        return {
            toTopRanking, toFavorites, toMain, toMangaList
        }
    }
})
</script>

<style lang="scss">
.menu {
    width: 100%;
    height: 100%;
    position: fixed;
    inset: 0 0 0 0;
    background: linear-gradient(to top right, rgba(255, 255, 255, 0) 0%, rgba(93, 9, 20, 1) 80%);
    z-index: 3;
    display: flex;
    justify-content: flex-start;
    align-items: end;
    gap: 3.2rem;
    padding: 4rem 3.2rem;
    flex-direction: column;

    &__item {
        cursor: pointer;
        color: white;
        text-decoration: none;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-size: 1.8rem;

        &:hover {
            color: var(--color-yellow);
        }
    }
}
</style>
