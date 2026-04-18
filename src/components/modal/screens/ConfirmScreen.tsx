import { useTranslation } from 'react-i18next'

import { useModalStore } from '@shared/store/useModal'

const ConfirmScreen = ({
	message,
	onConfirm
}: {
	message: string
	onConfirm: () => void
}) => {
	const { close } = useModalStore()
	const { t } = useTranslation()

	return (
		<div>
			<p>{message}</p>

			<button
				onClick={() => {
					close()
				}}
			>
				{t('cancell_btn')}
			</button>
			<button
				onClick={() => {
					onConfirm()
					close()
				}}
			>
				{t('apply_btn')}
			</button>
		</div>
	)
}

export default ConfirmScreen
