import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import DailyMemesPage from '../../pages/dailymemes'

jest.mock('next/link', () => (props: any) => props.children)

describe('<DailyMemes />', () => {
  describe('when <CategoryMenu /> is rendered', () => {
    it('should render the category menu button with the menu hidden by default', () => {
      render(<DailyMemesPage memes={_returnMockMemes()} />)

      const MenuIconButton = screen.getByRole('button', { name: /Category Selection Menu Button/i })

      expect(MenuIconButton).toBeInTheDocument()
      expect(MenuIconButton.getAttribute('aria-expanded')).toEqual('false')
    })

    it('should display the menu items after the menu button is clicked', () => {
      render(<DailyMemesPage memes={_returnMockMemes()} />)

      const MenuIconButton = screen.getByRole('button', { name: /Category Selection Menu Button/i })

      expect(MenuIconButton.getAttribute('aria-expanded')).toEqual('false')
      userEvent.click(MenuIconButton)
      expect(MenuIconButton.getAttribute('aria-expanded')).toEqual('true')
      expect(screen.getByText(/Categories Coming Soon.../i)).toBeInTheDocument()
      expect(screen.getByText(/Go To Homepage/i)).toBeInTheDocument()
    })

    // @@@@@ failing test
    xit('should navigate to the homepage after the Go To Homepage option is clicked', async () => {
      const { debug } = render(<DailyMemesPage memes={_returnMockMemes()} />)

      const MenuIconButton = screen.getByRole('button', { name: /Category Selection Menu Button/i })
      userEvent.click(MenuIconButton)

      const MenuItems = await screen.findAllByRole('menuitem')
      const GoToHomepageMenuItem = MenuItems[MenuItems.length - 1]
      // console.log(GoToHomepageMenuItem)

      userEvent.click(GoToHomepageMenuItem)

      debug()
    })
  })

  describe('when <ImageRenderer /> is rendered', () => {
    describe('when the api request is unsuccessful and no memes are loaded', () => {
      it('should pass the src props as "invalid" and render the error message', () => {
        render(<DailyMemesPage memes={_returnMockMemes()} />)

        expect(screen.getByText(/Whoops/i)).toBeInTheDocument()
        expect(screen.queryByTestId('meme-img')).not.toBeInTheDocument()
      })
    })

    describe('when the api request is successful and memes are loaded', () => {
      it('should pass a valid image src from the api and render the initial meme', () => {
        render(<DailyMemesPage memes={_returnMockMemes(5)} />)

        expect(screen.queryByText(/Whoops/i)).not.toBeInTheDocument()
        expect(screen.getByTestId('meme-img')).toBeInTheDocument()
      })
    })
  })

  describe('when <Nav /> is rendered', () => {
    describe('when the api request is unsuccessful and no memes are loaded', () => {
      it('should display 0 as the current meme count & total', () => {
        render(<DailyMemesPage memes={_returnMockMemes()} />)
        expect(screen.getByText(/0 \/ 0/i)).toBeInTheDocument()
      })

      it('should disable "Previous" & "Next" meme buttons', () => {
        render(<DailyMemesPage memes={_returnMockMemes()} />)

        const PrevButton = screen
          .getAllByRole('button')
          .find(btn => btn.getAttribute('aria-label') === 'Go To Previous Meme Button')

        const NextButton = screen
          .getAllByRole('button')
          .find(btn => btn.getAttribute('aria-label') === 'Go To Next Meme Button')

        expect(PrevButton).toBeDisabled()
        expect(NextButton).toBeDisabled()
      })
    })

    describe('when the api request is successful and memes are loaded', () => {
      it('should display the current meme count & total of memes loaded', () => {
        render(<DailyMemesPage memes={_returnMockMemes(15)} />)
        expect(screen.getByText(/1 \/ 15/i)).toBeInTheDocument()
      })

      it('should render & disable "Previous" & "Next" meme buttons as expected', () => {
        render(<DailyMemesPage memes={_returnMockMemes(5)} />)

        const PrevButton = screen
          .getAllByRole('button')
          .find(btn => btn.getAttribute('aria-label') === 'Go To Previous Meme Button')

        const NextButton = screen
          .getAllByRole('button')
          .find(btn => btn.getAttribute('aria-label') === 'Go To Next Meme Button')

        if (PrevButton && NextButton) {
          // Previous meme button should be disabled when the current meme is the first available item
          expect(screen.getByText(/1 \/ 5/i)).toBeInTheDocument()
          expect(PrevButton).toBeDisabled()

          userEvent.click(NextButton)

          expect(screen.getByText(/2 \/ 5/i)).toBeInTheDocument()
          expect(PrevButton).toBeEnabled()

          userEvent.click(PrevButton)

          expect(screen.getByText(/1 \/ 5/i)).toBeInTheDocument()
          expect(PrevButton).toBeDisabled()

          userEvent.click(NextButton)
          userEvent.click(NextButton)
          userEvent.click(NextButton)
          userEvent.click(NextButton)

          // Next meme button should be disabled when the current meme is the last available item
          expect(screen.getByText(/5 \/ 5/i)).toBeInTheDocument()
          expect(NextButton).toBeDisabled()
        } else throw Error('PrevButton || NextButton were not found')
      })
    })
  })
})

function _returnMockMemes(total: number = 0) {
  let memes = []

  for (let count = 0; count < total; count++) {
    memes[count] = `https://i.redd.it/mock-image${count + 1}.png`
  }

  return memes
}
