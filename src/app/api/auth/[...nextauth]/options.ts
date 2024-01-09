import { getServerSession } from 'next-auth'
import Google from 'next-auth/providers/google'

export const getSession = async () => {
	return await getServerSession(authOptions)
}

export const authOptions = {
	providers: [
		Google({
			clientId: process.env.GOOGLE_ID as string,
			clientSecret: process.env.GOOGLE_SECRET as string,
		}),
	],
}
