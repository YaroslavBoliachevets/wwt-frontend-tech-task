import { useTranslation } from 'react-i18next'

import { useModalStore } from '@shared/store/useModal'

import Button from '@components/button/Button'

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
		<div
			className=" h-[296px]
            w-[1280px]
            p-[32px]
			flex
			flex-col gap-6
            text-center"
		>
			<h3 className="text-[48px] font-semibold mb-auto">{message}</h3>

			<div className="flex gap-12 justify-center">
				<Button
					variant="secondary"
					className="w-[280px]"
					onClick={() => {
						close()
					}}
				>
					{t('cancell_btn')}
				</Button>
				<Button
					className="w-[280px] "
					onClick={() => {
						onConfirm()
						close()
					}}
				>
					{t('apply_btn')}
				</Button>
			</div>
		</div>
	)
}

export default ConfirmScreen
