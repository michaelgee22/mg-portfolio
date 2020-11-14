import { PageHead } from '../../components/PageHead'
import { Header } from './Header'
import { ImageRenderer } from './ImageRenderer'
import { CategoryMenu } from './CategoryMenu'

type Props = {
  children?: React.ReactChild | React.ReactChild[]
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

      <main>{props.children}</main>
    </>
  )
}

DailyMemes.CategoryMenu = CategoryMenu
DailyMemes.Header = Header
DailyMemes.ImageRenderer = ImageRenderer
