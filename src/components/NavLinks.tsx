'use client'
import Link from 'next/link'
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
	const siteRoutes = defaultSiteRoutes.concat(
		session ? sessionRoutes : noSessionRoutes
	)
	return (
		<ul {...props} className={`${props.className}`}>
			{siteRoutes.map((siteRoute) => (
				<li key={siteRoute.href} className="">
					<Link href={siteRoute.href}>{siteRoute.label}</Link>
				</li>
			))}
		</ul>
	)
}
