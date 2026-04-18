import { useTranslation } from 'react-i18next'

const FilterScreen = ({ onClose }: { onClose: () => void }) => {
	const { t } = useTranslation()
	return (
		<div>
			<button onClick={onClose}>{t('close_modal')}</button>
		</div>
	)
}

export default FilterScreen
