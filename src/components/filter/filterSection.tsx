import { FilterItem } from '@/shared/api/types/Filter'

import OptionsList from '../options/optionsList'

interface FilterSectionProps extends FilterItem {
	selected: string[]
	onChange: (newSelected: string[]) => void
}

const FilterSection = ({
	name,
	// description,
	options,
	selected,
	onChange
}: FilterSectionProps) => {
	return (
		<section className="border-b border-gray-200 py-8 ">
			<h2 className="text-2xl font-semibold text-gray-800 mb-6">{name}</h2>
			{/* <p className="text-sm text-gray-500 mb-3">{description}</p> */}
			<OptionsList
				options={options ?? []}
				selected={selected}
				onSelect={onChange}
			/>
		</section>
	)
}

export default FilterSection
