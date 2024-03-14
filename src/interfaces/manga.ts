export interface MangaI {
    _id: string
    title: string
    description: string
    author: {
        name: string
    },
    images: {
        cover: string
        background: string
    }
    available: boolean
    views: number
    state:  string
}