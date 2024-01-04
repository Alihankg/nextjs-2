import { getSession } from '@/app/api/auth/[...nextauth]/options'
import dynamic from 'next/dynamic'
const Navbar = dynamic(() => import('./Navbar'), {
	ssr: false,
	loading: () => <p>Loading...</p>,
})

export default async function Header({ ...props }) {
	const session = await getSession()
	return (
		<header {...props}>
			<Navbar session={session} />
		</header>
	)
}
