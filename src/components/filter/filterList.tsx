import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useFilterStore } from '@shared/store/useFilterStore'
import { useModalStore } from '@shared/store/useModal'

import { FilterItem } from '@/shared/api/types/Filter'

// import Button from '@components/button/Button'
// import Modal from '@components/modal/Modal'
import FilterSection from './filterSection'

const FilterList = ({ list }: { list: FilterItem[] }) => {
	const { open, close } = useModalStore()
	// console.log('list', list)
	const { t } = useTranslation()
	// const [modal, setModal] = useState(false)

	const globalFilters = useFilterStore(state => state.filters)
	const setFilters = useFilterStore(state => state.setFilters)
	const [localFilters, setLocalFilters] = useState<Record<string, string[]>>({})

	useEffect(() => {
		setLocalFilters(globalFilters)
	}, [])

	const handleGlobalFiltersConfirm = () => {
		setFilters(localFilters)
		close()
		// setModal(false)
	}
	return (
		<>
			{list.map(filter => {
				return (
					<FilterSection
						key={filter.id}
						{...filter}
						selected={localFilters[filter.id] ?? []}
						onChange={newSelected =>
							setLocalFilters(prev => ({ ...prev, [filter.id]: newSelected }))
						}
					/>
				)
			})}

			{/* <Button onClick={() => setModal(true)}>{t('apply_btn')}</Button> */}
			{/* <Modal
				modal={modal}
				setModal={setModal}
			>
				<span>{t('ask_confirm')}</span>
				<Button onClick={() => setModal(false)}>{t('cancell_btn')}</Button>
				<Button onClick={handleGlobalFiltersConfirm}>{t('apply_btn')}</Button>
			</Modal> */}

			<button
				onClick={() =>
					open({
						type: 'confirm',
						props: {
							message: 'Apply new filters?',
							onConfirm: handleGlobalFiltersConfirm
						}
					})
				}
			>
				{t('open_modal')}
			</button>
		</>
	)
}

export default FilterList
