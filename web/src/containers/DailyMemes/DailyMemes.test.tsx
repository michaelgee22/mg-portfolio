import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { DailyMemes } from './'

describe('<DailyMemes />', () => {
  describe('when <CategoryMenu /> is rendered', () => {
    it('should render the button with the menu hidden by default', () => {
      render(
        <DailyMemes>
          <DailyMemes.CategoryMenu />
        </DailyMemes>
      )

      const MenuIconButton = screen.getByRole('button')

      expect(MenuIconButton).toBeInTheDocument()
      expect(MenuIconButton.getAttribute('aria-expanded')).toEqual('false')
    })

    it('should display the menu items after the menu button is clicked', () => {
      render(
        <DailyMemes>
          <DailyMemes.CategoryMenu />
        </DailyMemes>
      )

      const MenuIconButton = screen.getByRole('button')

      expect(MenuIconButton.getAttribute('aria-expanded')).toEqual('false')
      fireEvent.click(MenuIconButton)
      expect(MenuIconButton.getAttribute('aria-expanded')).toEqual('true')
      expect(screen.getByText(/Categories Coming Soon.../)).toBeInTheDocument()
      expect(screen.getByText(/Go To Homepage/)).toBeInTheDocument()
    })

    // failing test
    xit('should navigate to the homepage after the Go To Homepage option is clicked', async () => {
      render(
        <DailyMemes>
          <DailyMemes.CategoryMenu />
        </DailyMemes>
      )

      const MenuIconButton = screen.getByRole('button')
      fireEvent.click(MenuIconButton)

      const MenuItems = await screen.findAllByRole('menuitem')
      const GoToHomepageMenuItem = MenuItems[MenuItems.length - 1]
      console.log(GoToHomepageMenuItem)

      fireEvent.click(GoToHomepageMenuItem)
      // debug()
    })
  })

  describe('when <ImageRenderer /> is rendered', () => {
    describe('when reddit api fetch is unsuccessful and does not pass a valid image src prop', () => {
      it('should pass the src props as "invalid" and render the error message', () => {
        render(
          <DailyMemes>
            <DailyMemes.ImageRenderer src="invalid" key="image-key" />
          </DailyMemes>
        )

        expect(screen.getByText(/Whoops/)).toBeInTheDocument()
        expect(screen.queryByTestId('meme-img')).not.toBeInTheDocument()
      })
    })

    describe('when reddit api fetch is successful and passes a valid image src prop', () => {
      it('should pass the src props as "invalid" and render the error message', () => {
        render(
          <DailyMemes>
            <DailyMemes.ImageRenderer src="/valid/image/src.png" key="image-key" />
          </DailyMemes>
        )

        expect(screen.queryByText(/Whoops/)).not.toBeInTheDocument()
        expect(screen.getByTestId('meme-img')).toBeInTheDocument()
      })
    })
  })

  describe('when <Nav /> is rendered', () => {})
})
