import { useState, useEffect } from 'react'
import { PageHead } from '../../components/PageHead'
import { CategoryMenu } from './CategoryMenu'
import { ImageRenderer } from './ImageRenderer'
import { Nav } from './Nav'

type Props = {
  children?: React.ReactNode
}

export const DailyMemes = (props: Props) => {
  const [height, setHeight] = useState('calc(100vh - 90px)')

  useEffect(() => {
    window.addEventListener('resize', calculatePageHeight)
    return () => window.removeEventListener('resize', calculatePageHeight)

    function calculatePageHeight() {
      const viewHeight = window.innerHeight
      setHeight(`${viewHeight}`)
    }
  }, [])

  return (
    <>
      <PageHead
        title="Daily Memes | MG Sandbox"
        description="Michael Gee's sandbox project where I learn and build new things with various web technologies."
        type="article"
        url="https://mg-sandbox.com/dailymemes"
      />

      <main style={{ width: '100%', height }}>{props.children}</main>
    </>
  )
}

DailyMemes.CategoryMenu = CategoryMenu
DailyMemes.ImageRenderer = ImageRenderer
DailyMemes.Nav = Nav
