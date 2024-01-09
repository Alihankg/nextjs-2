import Table from '@/components/Table'
import type { Reservation, Teacher } from 'prisma/prisma-client'
import ReservationItem from './ReservationItem'

type ReservationItemProps = {
	reservations: Reservation[]
	teachers: Teacher[]
}

export default function ReservationTable({
	reservations,
	teachers,
}: ReservationItemProps) {
	return (
		<Table head={['Öğrenci', 'Öğretmen', 'Saat', 'Tarih', 'Seçenekler']}>
			{reservations.map((reservation) => (
				<ReservationItem
					key={reservation.id}
					reservation={reservation}
					teacher={
						teachers.find(
							(teacher) => teacher.id === reservation.teacherId
						) as Teacher
					}
				/>
			))}
		</Table>
	)
}
