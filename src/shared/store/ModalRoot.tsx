/* eslint-disable react/prop-types */
import Modal from '@components/modal/ModalManager'
import FilterScreen from '@components/modal/screens/FilterScreen'

import { useModalStore } from './useModal'

const ModalRoot = () => {
	const { modal } = useModalStore()
	const { type, props } = modal

	if (!type) {
		return null
	}

	return (
		<Modal>{type === 'filters' && <FilterScreen list={props.list} />}</Modal>
	)
}

export default ModalRoot
