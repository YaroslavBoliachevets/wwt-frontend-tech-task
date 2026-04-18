/* eslint-disable react/prop-types */
import Modal from '@components/modal/ModalManager'
import ConfirmScreen from '@components/modal/screens/ConfirmScreen'
import FilterScreen from '@components/modal/screens/FilterScreen'

import { useModalStore } from './useModal'

const ModalRoot = () => {
	const { modal } = useModalStore()
	const { type, props } = modal

	if (!type) {
		return null
	}

	return (
		<>
			<Modal>
				{type === 'filters' && <FilterScreen list={props.list} />}
				{type === 'confirm' && (
					<ConfirmScreen
						message={props.message}
						onConfirm={props.onConfirm}
					/>
				)}
			</Modal>
		</>
	)
}

export default ModalRoot
