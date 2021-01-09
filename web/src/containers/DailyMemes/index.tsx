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
        title="Daily Dev Memes"
        description="Top daily software development memes fetched from Reddit."
        url="https://michaelgee.dev/dailymemes"
      />

      {props.children}
    </>
  )
}

DailyMemes.CategoryMenu = CategoryMenu
DailyMemes.ImageRenderer = ImageRenderer
DailyMemes.Nav = Nav
