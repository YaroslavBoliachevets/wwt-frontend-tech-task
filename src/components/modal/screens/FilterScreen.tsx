import { FilterItem } from '@shared/api/types/Filter'

import FilterList from '@components/filter/filterList'

interface FilterScreenProps {
	list: FilterItem[]
}

const FilterScreen = ({ list }: FilterScreenProps) => {
	return (
		<div>
			<FilterList list={list} />
		</div>
	)
}

export default FilterScreen
