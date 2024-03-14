<template>
    <Nav />

    <section class="favorites">
        <h2 class="favorites__header">
            Favoritos
        </h2>

        <main class="favorites__titles">
            <div class="favorites__title-manga" v-for="manga in filteredFavs">
                <img @click="toTitle(manga._id)" :src="`${manga.images.cover}`" class="favorites__image">
                <div @click="removeAction(manga._id)" class="favorites__actions">
                    <span class="favorites__actions--remove">Retirar</span>
                </div>
            </div>
        </main>
    </section>

    <Loader v-if="!isContentLoaded" />

    <Footer />
</template>

<script lang="ts">
import Nav from '../layout/Nav.vue'
import Loader from '../layout/Loader.vue'
import Footer from '../layout/Footer.vue'
import { defineComponent, ref, onMounted } from 'vue'
import { axios } from '../config'
import { useFavs, useTo } from '../hooks'
import { useRouter } from 'vue-router'

export default defineComponent({
    name: 'favorites',
    components: {
        Nav, Footer, Loader
    },
    setup() {
        const router = useRouter()
        const mangas = ref([])
        const filteredFavs = ref([])
        const isContentLoaded = ref<boolean>(false)

        const { toTitle } = useTo(router)
        const { favs, getFavs, removeFav } = useFavs()

        const getMangas = async () => {
            const { data } = await axios.get('/manga')
            mangas.value = data.data
        }

        const filterFavs = () => {
            filteredFavs.value = mangas.value.filter((item) => favs.value.includes(item._id));
        }

        const removeAction = (mangaId: string) => {
            removeFav(mangaId)
            filterFavs()
        }

        onMounted(async () => {
            await getMangas()
            getFavs()
            filterFavs()
            setTimeout(() => {
                isContentLoaded.value = true
            }, 400)
        })

        return {
            mangas,
            getMangas,
            removeFav,
            filteredFavs,
            removeAction,
            toTitle,
            isContentLoaded
        }
    }
})
</script>
