'use client'
import NavLinks from './NavLinks'
import {
	Bars3Icon,
	XMarkIcon,
	SunIcon,
	MoonIcon,
} from '@heroicons/react/16/solid'
import { useEffect, useState } from 'react'

export default function Navbar({ session }: any) {
	const [isOpen, setIsOpen] = useState(false)

	const [isDark, setIsDark] = useState(
		JSON.parse(localStorage.getItem('isDark') || 'false')
	)
	useEffect(() => {
		localStorage.setItem('isDark', JSON.stringify(isDark))
	}, [isDark])
	return (
		<div className="container mx-auto">
			<nav className="navbar h-auto px-4">
				<h1 className="text-2xl navbar-start">Alihan</h1>
				<div className="navbar-end">
					<label className="swap swap-rotate mx-4">
						<input
							type="checkbox"
							className="theme-controller"
							value="business"
							checked={isDark}
							onChange={() => setIsDark(!isDark)}
						/>
						<SunIcon className="w-10 swap-off" />
						<MoonIcon className="h-10 swap-on" />
					</label>
					<label className="swap swap-rotate md:hidden">
						<input
							type="checkbox"
							checked={isOpen}
							onChange={() => setIsOpen(!isOpen)}
						/>
						<Bars3Icon className="w-10 swap-off" />
						<XMarkIcon className="h-10 swap-on" />
					</label>
					<NavLinks session={session} className="hidden md:flex md:gap-4" />
				</div>
			</nav>
			<NavLinks
				session={session}
				className={`p-4 flex flex-col gap-4 h-auto md:hidden ${
					!isOpen && 'hidden'
				}`}
			/>
		</div>
	)
}
