import Modal from '@components/modal/ModalManager'
import ConfirmScreen from '@components/modal/screens/ConfirmScreen'
import FilterScreen from '@components/modal/screens/FilterScreen'

import { useModalStore } from './useModal'

const ModalRoot = () => {
	const { stack } = useModalStore()

	if (stack.length === 0) {
		return null
	}

	return (
		<>
			{stack.map((modal, index) => (
				<Modal
					key={index}
					zIndex={50 + index}
				>
					{modal.type === 'filters' && <FilterScreen list={modal.props.list} />}
					{modal.type === 'confirm' && (
						<ConfirmScreen
							message={modal.props.message}
							onConfirm={modal.props.onConfirm}
						/>
					)}
				</Modal>
			))}
		</>
	)
}

export default ModalRoot
