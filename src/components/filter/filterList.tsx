import { useState } from 'react'

import { FilterItem } from '@/shared/api/types/Filter'

import FilterSection from './filterSection'

const FilterList = ({ list }: { list: FilterItem[] }) => {
	console.log('list', list)
	const [localFilters, setLocalFilters] = useState<Record<string, string[]>>({})
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
		</>
	)
}

export default FilterList
