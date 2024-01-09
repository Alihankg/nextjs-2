import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import './globals.css'
import AuthProvider from './context/AuthProvider'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Document',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="tr">
			<body className={inter.className + ' bg-base-100 h-screen'}>
				<AuthProvider>
					<Toaster position="bottom-left" richColors />
					<Header className="bg-base-200" />
					<main className="flex flex-col px-4 container mx-auto mt-4">
						{children}
					</main>
				</AuthProvider>
			</body>
		</html>
	)
}
