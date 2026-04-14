import { FilterBase } from '@/shared/api/types/Filter'

import FilterSection from './filterSection'

const FilterList = ({ list }: { list: FilterBase[] }) => {
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
