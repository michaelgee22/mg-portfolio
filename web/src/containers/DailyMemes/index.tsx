import { PageHead } from '../../components/PageHead'
import { CategoryMenu } from './CategoryMenu'
import { ImageRenderer } from './ImageRenderer'
import { BottomNav } from './BottomNav'

type Props = {
  children?: React.ReactNode
}

export const DailyMemes = (props: Props) => {
  return (
    <>
      <PageHead
        title="Daily Memes | MG Sandbox"
        description="Michael Gee's sandbox project where I learn and build new things with various web technologies."
        type="article"
        url="https://mg-sandbox.com/dailymemes"
      />

      <main style={{ width: '100%', height: '100vh', backgroundColor: '#030303' }}>
        {props.children}
      </main>
    </>
  )
}

DailyMemes.CategoryMenu = CategoryMenu
DailyMemes.ImageRenderer = ImageRenderer
DailyMemes.BottomNav = BottomNav
