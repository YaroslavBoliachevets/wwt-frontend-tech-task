// import { useState } from 'react'
import { useTranslation } from 'react-i18next'

// import FilterList from '@components/filter/filterList'
// // import Modal from '@components/modal/Modal'
// import Modal from '@components/modal/ModalManager'
import ModalRoot from '@shared/store/ModalRoot'
import { useModalStore } from '@shared/store/useModal'
import { useQuery } from '@tanstack/react-query'

import Button from '@components/button/Button'

export const App = () => {
	const { t } = useTranslation()
	// const [modal, setModal] = useState(false)

	const open = useModalStore(state => state.open)

	const { data } = useQuery({
		queryKey: ['filters'],
		queryFn: () => fetch('/filterData.json').then(res => res.json())
	})

	return (
		<section className="w-full h-dvh flex flex-col items-center justify-center">
			{/* eslint-disable-next-line i18next/no-literal-string */}
			<h1 className="text-6xl text-gray-600 mb-12">
				WinWinTravel frontend test task
			</h1>
			<Button
				onClick={() =>
					open({ type: 'filters', props: { list: data?.filterItems } })
				}
			>
				{t('open_modal')}
			</Button>
			<ModalRoot />
		</section>
	)
}
