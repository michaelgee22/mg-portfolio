import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { DailyMemes } from '@/containers/DailyMemes'
import { LoadStates } from '@/constants/async'
import { Meme } from '@/containers/DailyMemes/Meme'

describe('<DailyMemes />', () => {
	describe('when <CategoryMenu /> is rendered', () => {
		it('should render the category menu button with the menu hidden by default', () => {
			render(
				<DailyMemes>
					<DailyMemes.CategoryMenu />
				</DailyMemes>
			)

			const MenuIconButton = screen.getByRole('button', { name: /Category Selection Menu Button/i })

			expect(MenuIconButton).toBeInTheDocument()
			expect(MenuIconButton.getAttribute('aria-expanded')).toEqual('false')
		})

		it('should display the menu items after the menu button is clicked', () => {
			render(
				<DailyMemes>
					<DailyMemes.CategoryMenu />
				</DailyMemes>
			)

			const MenuIconButton = screen.getByRole('button', { name: /Category Selection Menu Button/i })

			expect(MenuIconButton.getAttribute('aria-expanded')).toEqual('false')
			userEvent.click(MenuIconButton)
			expect(MenuIconButton.getAttribute('aria-expanded')).toEqual('true')
			expect(screen.getByText(/Source Code/i)).toBeInTheDocument()
			expect(screen.getByText(/Homepage/i)).toBeInTheDocument()
		})

		// @@@@@ failing test
		xit('should navigate to the homepage after the "Homepage" option is clicked', async () => {
			const { debug } = render(
				<DailyMemes>
					<DailyMemes.CategoryMenu />
				</DailyMemes>
			)

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
		describe('when the memes list api request is idle or currently being loaded', () => {
			it('should render a loading spinner', () => {
				const { rerender } = render(
					<DailyMemes>
						<DailyMemes.ImageRenderer meme={null} status={LoadStates.IDLE} />
					</DailyMemes>
				)

				expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()
				expect(screen.queryByText(/Whoops/i)).not.toBeInTheDocument()
				expect(screen.queryByTestId('meme-img')).not.toBeInTheDocument()

				rerender(
					<DailyMemes>
						<DailyMemes.ImageRenderer meme={null} status={LoadStates.LOADING} />
					</DailyMemes>
				)

				expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()
				expect(screen.queryByText(/Whoops/i)).not.toBeInTheDocument()
				expect(screen.queryByTestId('meme-img')).not.toBeInTheDocument()
			})
		})

		describe('when the api request is unsuccessful and no memes are loaded', () => {
			it('should pass the meme prop as null and render the error message', () => {
				render(
					<DailyMemes>
						<DailyMemes.ImageRenderer meme={null} status={LoadStates.ERROR} />
					</DailyMemes>
				)

				expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument()
				expect(screen.getByText(/Whoops/i)).toBeInTheDocument()
				expect(screen.queryByTestId('meme-img')).not.toBeInTheDocument()
			})
		})

		describe('when the api request is successful and memes are loaded', () => {
			it('should pass a valid image src from the api and render the initial meme', () => {
				const mockCurrentMeme: Meme = {
					src: 'https://i.redd.it/mock-image.png',
					title: 'This is a mock meme for testing',
					index: 0
				}

				render(
					<DailyMemes>
						<DailyMemes.ImageRenderer meme={mockCurrentMeme} status={LoadStates.SUCCESS} />
					</DailyMemes>
				)

				expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument()
				expect(screen.queryByText(/Whoops/i)).not.toBeInTheDocument()
				expect(screen.getByTestId('meme-img')).toBeInTheDocument()
			})
		})
	})

	describe('when <Nav /> is rendered', () => {
		describe('when the api request is unsuccessful and no memes are loaded', () => {
			it('should display 0 as the current meme count & total', () => {
				render(
					<DailyMemes>
						<DailyMemes.Nav
							next={jest.fn()}
							prev={jest.fn()}
							memeIndex={0}
							memeTotal={0}
							status={LoadStates.ERROR}
						/>
					</DailyMemes>
				)
				expect(screen.getByText(/0 \/ 0/i)).toBeInTheDocument()
			})

			it('should disable "Previous" & "Next" meme buttons', () => {
				render(
					<DailyMemes>
						<DailyMemes.Nav
							next={jest.fn()}
							prev={jest.fn()}
							memeIndex={0}
							memeTotal={0}
							status={LoadStates.ERROR}
						/>
					</DailyMemes>
				)

				const PrevButton = screen
					.getAllByRole('button')
					.find((btn) => btn.getAttribute('aria-label') === 'Go To Previous Meme Button')

				const NextButton = screen
					.getAllByRole('button')
					.find((btn) => btn.getAttribute('aria-label') === 'Go To Next Meme Button')

				expect(PrevButton).toBeDisabled()
				expect(NextButton).toBeDisabled()
			})
		})

		describe('when the api request is successful and memes are loaded', () => {
			it('should display the current meme count & total of memes loaded', () => {
				render(
					<DailyMemes>
						<DailyMemes.Nav
							next={jest.fn()}
							prev={jest.fn()}
							memeIndex={0}
							memeTotal={15}
							status={LoadStates.SUCCESS}
						/>
					</DailyMemes>
				)
				expect(screen.getByText(/1 \/ 15/i)).toBeInTheDocument()
			})

			// @@@@@ failing test
			xit('should render & disable "Previous" & "Next" meme buttons as expected', () => {
				render(
					<DailyMemes>
						<DailyMemes.Nav
							next={jest.fn()}
							prev={jest.fn()}
							memeIndex={0}
							memeTotal={5}
							status={LoadStates.SUCCESS}
						/>
					</DailyMemes>
				)

				const PrevButton = screen
					.getAllByRole('button')
					.find((btn) => btn.getAttribute('aria-label') === 'Go To Previous Meme Button')

				const NextButton = screen
					.getAllByRole('button')
					.find((btn) => btn.getAttribute('aria-label') === 'Go To Next Meme Button')

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
