import { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'

import { useModalStore } from '@shared/store/useModal'

interface ModalProps {
	children: ReactNode
	key: number
	zIndex: number
}

const Modal = ({ children }: ModalProps) => {
	const { stack, close } = useModalStore()
	// const { type } = modal
	const top = stack[stack.length - 1]
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

	if (!top) {
		return null
	}

	return createPortal(
		<div
			className="fixed inset-0 bg-black/40 overflow-y-auto z-50"
			onClick={close} // клик по фону
		>
			<div
				className="bg-white w-7xl   h-max flex flex-col relative rounded-2xl shadow-xl overflow-hidden m-auto mt-20 mb-20"
				onClick={e => e.stopPropagation()}
			>
				<button
					className="px-4 py-2 rounded cursor-pointer absolute left-310"
					onClick={close}
				>
					{t('x')}
				</button>

				{children}
			</div>
		</div>,
		document.body
	)
}

export default Modal
