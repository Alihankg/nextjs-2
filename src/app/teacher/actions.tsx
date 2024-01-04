// Can you write the same actions for Teacher
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
