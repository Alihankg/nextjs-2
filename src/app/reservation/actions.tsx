import prisma from '../db'
export const addReservation = async (data: any) => {
	'use server'
	return await prisma.reservation.create({
		data: {
			...data,
		},
	})
}

export const getReservations = async () => {
	return await prisma.reservation.findMany()
}

export const deleteReservation = async (id: number) => {
	return await prisma.reservation.delete({
		where: {
			id,
		},
	})
}

export const updateReservation = async (id: number, data: any) => {
	return await prisma.reservation.update({
		where: {
			id,
		},
		data: {
			...data,
		},
	})
}
