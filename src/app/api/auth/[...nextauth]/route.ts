import NextAuth, { getServerSession } from 'next-auth'
import Google from 'next-auth/providers/Google'

export const authOptions = {
	providers: [
		Google({
			clientId: process.env.GOOGLE_ID as string,
			clientSecret: process.env.GOOGLE_SECRET as string,
		}),
	],
}

export const getSession = async () => {
	return await getServerSession(authOptions)
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
