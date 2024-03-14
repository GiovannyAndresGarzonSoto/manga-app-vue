import { Router } from "vue-router"

export const useTo = (router: Router) => {
    const toTopRanking = () => {
        router.push({ name: 'ranking' })
    }

    const toTitle = (id: string) => {
        router.push({ name: 'manga-title', params: { id } })
    }

    const toMangaList = (searchInput?: string) => {
        router.push({ name: 'manga-list', query: { search: searchInput }}) 
    }

    const toMain = () => {
        router.push({ name: 'home' })
    }

    const toViewer = (chapterId: string) => {
        router.push({name: 'viewer', params: { chapterId }})
    }

    const toFavorites = () => {
        router.push({ name: 'favorites' })
    }

    return {
        toTopRanking,
        toTitle,
        toMangaList,
        toFavorites,
        toMain,
        toViewer,
    }
}