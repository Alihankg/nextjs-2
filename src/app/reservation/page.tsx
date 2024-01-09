import { getTeachers } from '../teacher/TeacherActions'
import { addReservation, getReservations } from './actions'
import NewReservationForm from './NewReservationForm'
import ReservationTable from './ReservationTable'

export default async function Reservation() {
	const teachers = await getTeachers()
	const reservations = await getReservations()
	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-2xl">Rezervasyonlar</h1>
			<NewReservationForm teachers={teachers} addReservation={addReservation} />
			<ReservationTable reservations={reservations} teachers={teachers} />
		</div>
	)
}
