import { FilterItem } from '@shared/api/types/Filter'
import { create } from 'zustand'

// type ModalProps = Record<string, unknown>
// type ModalType = 'confirm' | 'filters' | null

type ModalState =
	| {
			type: null
			props: Record<string, never>
	  }
	| { type: 'filters'; props: { list: FilterItem[] } }
	| {
			type: 'confirm'
			props: { message: string; onConfirm: () => void }
	  }

// interface ModalPropsMap {
// 	filters: {
// 		list: FilterItem[]
// 	}
// 	confirm: {}
// }
interface ModalStore {
	modal: ModalState
	open: (state: Exclude<ModalState, { type: null }>) => void
	close: () => void
}
// interface ModalState {
// 	type: ModalType
// open: (type: ModalType, props: Record<string, unknown>) => void
// close: () => void
// 	props: ModalPropsMap[ModalType] | {}
// }

export const useModalStore = create<ModalStore>(set => ({
	modal: { type: null, props: {} as Record<string, never> },
	// props: {},
	open: state => set({ modal: state }),
	close: () =>
		set({ modal: { type: null, props: {} as Record<string, never> } })
}))
