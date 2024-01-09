import Table from '@/components/Table'
import SubjectItem from './SubjectItem'
import {
	getSubjects,
	addSubject,
	deleteSubject,
	updateSubject,
} from './SubjectActions'
import CardForm from '@/components/cardForm/CardForm'
import CardFormInput from '@/components/cardForm/CardFormInput'
import SubjectTable from './SubjectTable'

export default async function Subject() {
	const subjects = await getSubjects()
	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-2xl">Dersler</h1>
			<CardForm title="Ders Ekle" submitText="Ekle" action={addSubject}>
				<CardFormInput label="Ders Adı:" name="title" required />
			</CardForm>
			<SubjectTable
				deleteSubject={deleteSubject}
				updateSubject={updateSubject}
				subjects={subjects}
			/>
		</div>
	)
}
