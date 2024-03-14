export interface ChapterI {
    _id: string
    number: string
    manga: string
    author: string
    title: string
    premiere: Date
    available: boolean
    pageImage?: string
}