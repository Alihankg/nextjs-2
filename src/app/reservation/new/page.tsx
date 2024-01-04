'use client'
import CardForm from '@/components/cardForm/CardForm'
import CardFormInput from '@/components/cardForm/CardFormInput'

export default function NewReservation() {
	return (
		<>
			<CardForm
				title="Yeni Rezervasyon"
				submitText="Rezervasyon Yap"
				action={(data: FormData) => {
					console.log(data.get('date'))
				}}>
				<CardFormInput
					label="Rezervasyon Tarihi:"
					name="date"
					type="datetime-local"
					required
				/>
			</CardForm>
		</>
	)
}
