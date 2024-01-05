import CardForm from '@/components/cardForm/CardForm'
import CardFormInput from '@/components/cardForm/CardFormInput'

export async function serverFunction(data: FormData) {
	'use server'
	console.log(data.get('date'))
}

export default function Reservation() {
	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-2xl">Rezervasyonlar</h1>
			<CardForm
				title="Yeni Rezervasyon"
				submitText="Rezervasyon Yap"
				action={serverFunction}>
				<CardFormInput
					label="Rezervasyon Tarihi:"
					name="date"
					type="datetime-local"
					required
				/>
			</CardForm>
		</div>
	)
}
