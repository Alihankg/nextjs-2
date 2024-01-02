import { getSession } from '@/app/api/auth/[...nextauth]/route'
import Navbar from './Navbar'

export default async function Header({ ...props }) {
	const session = await getSession()
	return (
		<header {...props}>
			<Navbar session={session} />
		</header>
	)
}
