import { revalidatePath } from 'next/cache'
import prisma from '../db'

export const addTeacher = async (data: FormData) => {
	'use server'
	const name = data.get('name') as string
	const subjectId = JSON.parse(data.get('subjectId') as string)
	await prisma.teacher.create({
		data: {
			name,
			subject: {
				connect: {
					id: subjectId,
				},
			},
		},
	})
	revalidatePath('/teacher')
}

export const getTeachers = () => {
	return prisma.teacher.findMany()
}

export const deleteTeacher = async (id: number) => {
	'use server'
	await prisma.teacher.delete({
		where: {
			id,
		},
	})
	revalidatePath('/teacher')
}

export const updateTeacher = async (
	id: number,
	newName: string,
	subjectId: number
) => {
	'use server'
	await prisma.teacher.update({
		where: {
			id,
		},
		data: {
			name: newName,
			subject: {
				connect: {
					id: subjectId,
				},
			},
		},
	})
	revalidatePath('/teacher')
}
