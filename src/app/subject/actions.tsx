import { revalidatePath } from 'next/cache'
import prisma from '../db'

export const addSubject = async (data: FormData) => {
	'use server'
	const title = data.get('title') as string
	await prisma.subject.create({
		data: {
			title,
		},
	})
	revalidatePath('/subject')
}

export const getSubjects = () => {
	return prisma.subject.findMany()
}

export const deleteSubject = async (id: number) => {
	'use server'
	await prisma.subject.delete({
		where: {
			id,
		},
	})
	revalidatePath('/subject')
}
