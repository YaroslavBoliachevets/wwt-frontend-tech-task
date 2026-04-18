import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'

import i18n from '@shared/i18n/i18n'
import { QueryClientProvider } from '@tanstack/react-query'

import './main.css'
import { App } from './pages/Home'
import { queryClient } from './query'

// import './shared/i18n'
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<I18nextProvider i18n={i18n}>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</I18nextProvider>
	</StrictMode>
)
