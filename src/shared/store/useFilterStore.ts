import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface FilterState {
	filters: Record<string, string[]>
	setFilters: (newFilters: Record<string, string[]>) => void
	resetFilters: () => void
}
export const useFilterStore = create<FilterState>()(
	persist(
		set => ({
			filters: {},
			setFilters: newFilters => set({ filters: newFilters }),
			resetFilters: () => set({ filters: {} })
		}),
		{
			name: 'filters-storage'
		}
	)
)
