import { useState, useEffect } from 'react'

type Meme = {
  src: string
  title: string
}

export function useMemes() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [memes, setMemes] = useState<Meme[]>([])
  const [memeIndex, setMemeIndex] = useState<number>(0)
  const [imageSrc, setImageSrc] = useState<string | null>(null)

  useEffect(() => {
    _fetchMemes()

    async function _fetchMemes() {
      const res = await fetch(`https://www.reddit.com/r/ProgrammerHumor/.json?&limit=100`)
      const { data } = await res.json()
      let memeArr: Meme[] = []

      if (data.children) {
        memeArr = data.children
          .map((item: any) => {
            if (item.data && item.data.url) {
              const imageType = item.data.url.slice(-3)
              if (imageType === 'jpg' || imageType === 'png') {
                return { src: item.data.url, title: item.data.title }
              }
            }

            return undefined
          })
          .filter((meme: Meme) => meme !== undefined)
      }

      setMemes(memeArr)
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!memes || (memes && memes.length === 0)) setImageSrc(null)
    else if (memes && memes.length > 0) setImageSrc(memes[memeIndex].src)
  }, [memes])

  useEffect(() => {
    if (memes && memes.length > 0) setImageSrc(memes[memeIndex].src)
  }, [memeIndex])

  return {
    src: imageSrc,
    index: memeIndex,
    total: memes.length,
    onUpdateMeme: setMemeIndex,
    isLoading
  }
}
