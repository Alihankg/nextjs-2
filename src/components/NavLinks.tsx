'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const defaultSiteRoutes = [
	{
		href: '/',
		label: 'Home',
	},
]

const sessionRoutes = [
	{
		label: 'Öğretmenler',
		href: '/teacher',
	},
	{
		label: 'Dersler',
		href: '/subject',
	},
	{
		label: 'Rezervasyon',
		href: '/reservation',
	},
	{
		label: 'Çıkış Yap',
		href: '/api/auth/signout',
	},
]

const noSessionRoutes = [
	{
		href: '/reservation/new',
		label: 'Yeni Rezervasyon',
	},
	{
		label: 'Giriş Yap',
		href: '/api/auth/signin',
	},
]

export default function NavLinks({ session, ...props }: any) {
	const pathname = usePathname()
	const siteRoutes = defaultSiteRoutes.concat(
		session ? sessionRoutes : noSessionRoutes
	)
	return (
		<ul {...props}>
			{siteRoutes.map((siteRoute) => (
				<li key={siteRoute.href}>
					<Link
						href={siteRoute.href}
						className={`transition ${siteRoute.href === pathname ? '' : ''}`}>
						{siteRoute.label}
					</Link>
				</li>
			))}
		</ul>
	)
}
