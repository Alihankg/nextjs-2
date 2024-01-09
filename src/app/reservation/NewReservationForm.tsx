'use client'
import CardForm from '@/components/cardForm/CardForm'
import CardFormInput from '@/components/cardForm/CardFormInput'
import CardFormSelect from '@/components/cardForm/CardFormSelect'
import { revalidatePath } from 'next/cache'
import { toast } from 'sonner'

type NewReservationFormProps = {
	teachers: Teacher[]
	addReservation: Function
}

type Teacher = {
	id: number
	name: string
}

export default function NewReservationForm({
	addReservation,
	teachers,
}: NewReservationFormProps) {
	function convertDateTimeToMillis(date: string, time: string) {
		return new Date(`${date}T${time}`).getTime()
	}
	async function handleSubmit(data: FormData) {
		const date = data.get('date') as string

		const startTime = convertDateTimeToMillis(
			date,
			data.get('startTime') as string
		)
		const endTime = convertDateTimeToMillis(date, data.get('endTime') as string)
		const duration = endTime - startTime
		const durationEach = parseInt(data.get('reservationTime') as string) * 60000

		if (duration % durationEach !== 0) {
			toast.error('Rezervasyon süresi eşit dağıtılabilmelidir.')
			return
		}

		const reservationQuantity = duration / durationEach
		const teacherId = parseInt(data.get('teacherId') as string)

		for (let i = 0; i < reservationQuantity; i++) {
			const start = new Date(startTime + i * durationEach)
			const end = new Date(startTime + (i + 1) * durationEach)
			const reservation = await addReservation({
				teacherId: teacherId,
				start: start,
				end: end,
			})
		}
		toast.success('Rezervasyon oluşturuldu.')
	}
	return (
		<CardForm
			title="Yeni Rezervasyon"
			submitText="Rezervasyon Oluştur"
			action={handleSubmit}>
			<CardFormInput label="Rezervasyon Tarihi:" name="date" type="date" />
			<CardFormSelect label="Öğretmen:" name="teacherId">
				{teachers.map((teacher) => (
					<option key={teacher.id} value={teacher.id}>
						{teacher.name}
					</option>
				))}
			</CardFormSelect>
			<CardFormInput label="Başlangıç Saati:" name="startTime" type="time" />
			<CardFormInput label="Bitiş Saati:" name="endTime" type="time" />
			<CardFormInput
				label="Görüşme Başına Süre:"
				name="reservationTime"
				type="number"
			/>
		</CardForm>
	)
}
