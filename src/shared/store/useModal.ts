import { create } from 'zustand'

type ModalProps = Record<string, unknown>
type ModalType = 'confirm' | 'filters' | null

interface ModalState {
	type: ModalType
	open: (type: ModalType, props: Record<string, unknown>) => void
	close: () => void
	props: ModalProps
}

export const useModalStore = create<ModalState>(set => ({
	type: null,
	props: {},
	open: (type, props = {}) => set({ type, props }),
	close: () => set({ type: null, props: {} })
}))
