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
export const updateSubject = async (id: number, newTitle: string) => {
	'use server'
	await prisma.subject.update({
		where: {
			id,
		},
		data: {
			title: newTitle,
		},
	})
	revalidatePath('/subject')
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

export const getSubjectNameById = async (id: number) => {
	'use server'
	const subject = await prisma.subject.findUnique({
		where: {
			id,
		},
	})
	return subject?.title
}
