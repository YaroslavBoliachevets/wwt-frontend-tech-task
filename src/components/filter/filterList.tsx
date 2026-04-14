import { FilterItem } from '@/shared/api/types/Filter'

import FilterSection from './filterSection'

const FilterList = ({ list }: { list: FilterItem[] }) => {
	console.log('list', list)
	return (
		<>
			{list.map(filter => {
				return (
					<FilterSection
						key={filter.id}
						{...filter}
					/>
				)
			})}
		</>
	)
}

export default FilterList
