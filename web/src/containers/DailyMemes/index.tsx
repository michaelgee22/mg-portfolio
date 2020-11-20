import { PageHead } from '../../components/PageHead'
import { CategoryMenu } from './CategoryMenu'
import { ImageRenderer } from './ImageRenderer'
import { Nav } from './Nav'

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
      >
        <meta httpEquiv="ScreenOrientation" content="autoRotate:disabled" />
      </PageHead>

      <main>{props.children}</main>
    </>
  )
}

DailyMemes.CategoryMenu = CategoryMenu
DailyMemes.ImageRenderer = ImageRenderer
DailyMemes.Nav = Nav
