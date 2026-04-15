// import Button from '../button/Button'

type ModalProps = {
	modal: boolean
	setModal: (value: boolean) => void
	children: React.ReactNode
}

const Modal = ({ modal, setModal, children }: ModalProps) => {
	if (!modal) {
		return null
	}

	// console.log(children)

	const handleBackdropClick = () => {
		setModal(false)
	}

	const handleContentClick = (e: React.MouseEvent) => {
		e.stopPropagation()
	}
	return (
		<div
			className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
			onClick={handleBackdropClick}
		>
			<div
				className="bg-white rounded-xl shadow-xl w-[600px] max-h-[80vh] overflow-y-auto p-6 relative"
				onClick={handleContentClick}
			>
				{/* content */}
				{children}

				{/* close button */}
				<button
					className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl cursor-pointer"
					onClick={() => setModal(false)}
				>
					{'x'}
				</button>
			</div>
		</div>
	)
}

export default Modal
