import { FilterItem } from '@/shared/api/types/Filter'

import OptionsList from '../options/optionsList'

const FilterSection = (filter: FilterItem) => {
	const { name, description, options } = filter
	console.log('options', filter)
	return (
		<section className="border-b border-gray-200 py-4">
			<h2 className="text-lg font-semibold text-gray-800 mb-1">{name}</h2>
			<p className="text-sm text-gray-500 mb-3">{description}</p>
			<OptionsList options={options} />
		</section>
	)
}

export default FilterSection
