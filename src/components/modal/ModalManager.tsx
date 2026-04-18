import { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'

import { useModalStore } from '@shared/store/useModal'

interface ModalProps {
	children: ReactNode
}

const Modal = ({ children }: ModalProps) => {
	const { modal, close } = useModalStore()
	const { type } = modal
	const { t } = useTranslation()

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				close()
			}
		}
		window.addEventListener('keydown', handler)
		return () => window.removeEventListener('keydown', handler)
	}, [close])

	if (!type) {
		return null
	}

	return createPortal(
		<div
			className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
			onClick={close} // клик по фону
		>
			<div
				className="bg-white p-6 rounded shadow-xl"
				onClick={e => e.stopPropagation()}
			>
				<h2 className="text-xl font-semibold mb-4">{t('modal_title')}</h2>

				{/* <p className="mb-4">{t('lorem')}</p> */}
				{children}
				{/* <button
					className="px-4 py-2 bg-blue-500 text-white rounded"
					onClick={close}
				>
					{t('close')}
				</button> */}
			</div>
		</div>,
		document.body
	)
}

export default Modal
