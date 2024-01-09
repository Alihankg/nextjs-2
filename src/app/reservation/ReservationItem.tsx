import type { Reservation, Teacher } from '@prisma/client'

type ReservationItemProps = {
	reservation: Reservation
	teacher: Teacher
}

export default function ReservationItem({
	reservation,
	teacher,
}: ReservationItemProps) {
	const startDate = new Date(reservation.start)
	const endDate = new Date(reservation.end)
	const timeF = new Intl.DateTimeFormat('tr-TR', {
		hour: 'numeric',
		minute: 'numeric',
	})
	const dateF = new Intl.DateTimeFormat('tr-TR', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})
	return (
		<tr
			key={reservation.id}
			className="p-2 my-2 hover:bg-base-300 group relative">
			<td>{reservation.studentName}</td>
			<td>{teacher.name}</td>
			<td>{`${timeF.format(startDate)} - ${timeF.format(endDate)}`}</td>
			<td>{dateF.format(startDate)}</td>
		</tr>
	)
}
