export const useCompressImg = (url: string, quality: number) => {
    
    const urlCompressed = url?.replace('/upload/', `/upload/q_${quality}/`)

    return {urlCompressed}
}