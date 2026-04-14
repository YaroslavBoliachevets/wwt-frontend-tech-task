import { FilterChooseOption } from '@/shared/api/types/Filter'

const OptionsList = ({ options }: { options: FilterChooseOption[] }) => {
	return (
		<div className="flex flex-col gap-3">
			{options &&
				options.map(option => (
					<label
						key={option.id}
						className="flex items-start gap-3 cursor-pointer group"
					>
						<input
							type="checkbox"
							className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
						/>

						<div className="flex flex-col">
							<span className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition">
								{option.name}
							</span>
							{option.description && (
								<span className="text-xs text-gray-500 leading-snug">
									{option.description}
								</span>
							)}
						</div>
					</label>
				))}
		</div>
	)
}

export default OptionsList
