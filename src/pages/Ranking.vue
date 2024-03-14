<template>
    <Nav />

    <main class="top-ranking">
        <div @click="toTitle(manga._id)" ref="titles" v-for="manga in mangasByViews" class="top-ranking__item">
            <img class="top-ranking__image gradient-border" :src="`${manga.images.cover}`">
            <div class="top-ranking__info">
            </div>
        </div>
    </main>

    <Footer />
</template>
 
<script lang="ts">
import Nav from '../layout/Nav.vue'
import Footer from '../layout/Footer.vue'
import { axios } from '../config'
import { defineComponent, onMounted, ref } from 'vue'
import { useTo } from '../hooks'
import { useRouter } from 'vue-router'

export default defineComponent({
    name: 'Ranking',
    components: {
        Nav, Footer
    },
    setup() {
        const mangasByViews = ref([])
        const router = useRouter()

        const { toTitle } = useTo(router)

        const getMangasByViews = async () => {
            const { data } = await axios.get('/manga/views')
            mangasByViews.value = data.data
        }

        onMounted(() => {
            getMangasByViews()
        })

        return {
            mangasByViews,
            toTitle
        }
    }
})
</script>