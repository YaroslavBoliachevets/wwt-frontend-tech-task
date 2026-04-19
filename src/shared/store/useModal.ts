import { FilterItem } from '@shared/api/types/Filter'
import { create } from 'zustand'

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

interface ModalStore {
	stack: ModalState[]
	open: (state: Exclude<ModalState, { type: null }>) => void
	close: () => void
}

export const useModalStore = create<ModalStore>(set => ({
	stack: [],
	open: modal => set(state => ({ stack: [...state.stack, modal] })),
	close: () => set(state => ({ stack: state.stack.slice(0, -1) }))
}))
