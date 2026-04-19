import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useFilterStore } from '@shared/store/useFilterStore'
import { useModalStore } from '@shared/store/useModal'

import { FilterItem } from '@/shared/api/types/Filter'
import Button from '@components/button/Button'

import FilterSection from './filterSection'

const FilterList = ({ list }: { list: FilterItem[] }) => {
	const { open, close } = useModalStore()
	// console.log('list', list)
	const { t } = useTranslation()
	// const [modal, setModal] = useState(false)

	const globalFilters = useFilterStore(state => state.filters)
	const setFilters = useFilterStore(state => state.setFilters)
	const resetFilters = useFilterStore(state => state.resetFilters)
	const [localFilters, setLocalFilters] = useState<Record<string, string[]>>({})

	useEffect(() => {
		setLocalFilters(globalFilters)
	}, [])

	const handleGlobalFiltersConfirm = () => {
		setFilters(localFilters)
		close()
		// setModal(false)
	}

	const handleResetFilters = () => {
		resetFilters()
		close()
	}
	return (
		<div className="h-fullpy-10 px-8 ">
			<h3 className="flex justify-center text-5xl content-center border-b-2 border-gray-200 pb-6 mb-6 mt-7">
				{t('filter')}
			</h3>
			<div className="flex-1 overflow-y-auto">
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
			</div>

			{/* <Button onClick={() => setModal(true)}>{t('apply_btn')}</Button> */}
			<div
				className="grid 
				grid-cols-3
				items-center
				gap-4
				w-full my-10"
			>
				<div></div>
				<Button
					className=" w-[184px] m-auto"
					onClick={() =>
						open({
							type: 'confirm',
							props: {
								message: t('ask_confirm'),
								onConfirm: handleGlobalFiltersConfirm
							}
						})
					}
				>
					{t('apply')}
				</Button>
				<button
					className=" cursor-pointer underline text-teal-600 font-medium justify-self-end hover:text-teal-700"
					onClick={() =>
						open({
							type: 'confirm',
							props: {
								message: t('ask_confirm_clear_all'),
								onConfirm: handleResetFilters
							}
						})
					}
				>
					{t('clear_all')}
				</button>
			</div>
		</div>
	)
}

export default FilterList
