import { useState, useEffect } from 'react'
import { LoadStates } from '@/constants/async'
import { Meme } from '@/containers/DailyMemes/Meme'

export enum NavTypes {
	NEXT = 'next',
	PREV = 'prev'
}

export function useMemes() {
	const [status, setStatus] = useState<LoadStates>(LoadStates.IDLE)
	const [list, setList] = useState<Meme[]>([])
	const [current, setCurrent] = useState<Meme | null>(null)

	useEffect(() => {
		setStatus(LoadStates.LOADING)

		_fetchMemes()

		async function _fetchMemes() {
			const res = await fetch(`https://www.reddit.com/r/ProgrammerHumor/.json?&limit=100`)
			const { data } = await res.json()
			let memes: Meme[] = []

			if (data.children) {
				memes = data.children
					.filter((item: any) => {
						if (item.data && item.data.url) {
							const imageType = item.data.url.slice(-3)
							if (imageType === 'jpg' || imageType === 'png') {
								return true
							}
						}

						return false
					})
					.map((item: any, index: number) => {
						return { src: item.data.url, title: item.data.title, index }
					})
			}

			if (memes.length > 0) {
				setList(memes)
				setStatus(LoadStates.SUCCESS)
			} else {
				setStatus(LoadStates.ERROR)
			}
		}
	}, [])

	useEffect(() => {
		if (!list || (list && list.length === 0)) setCurrent(null)
		else if (list && list.length > 0) setCurrent(list[0])
	}, [list])

	function _onUpdateMeme(navigate: NavTypes) {
		if (current) {
			let currentIndex = current.index

			if (navigate === NavTypes.NEXT) {
				currentIndex += 1
			}

			if (navigate === NavTypes.PREV) {
				currentIndex -= 1
			}

			setCurrent(list[currentIndex])
		}
	}

	return {
		status,
		current,
		total: list.length,
		onUpdateMeme: _onUpdateMeme
	}
}
