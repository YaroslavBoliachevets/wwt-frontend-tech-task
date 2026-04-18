import Modal from '@components/modal/ModalManager'
import FilterScreen from '@components/modal/screens/FilterScreen'

import { useModalStore } from './useModal'

const ModalRoot = () => {
	const { type, close } = useModalStore()

	if (!type) {
		return null
	}

	return <Modal>{type === 'filters' && <FilterScreen onClose={close} />}</Modal>
}

export default ModalRoot
