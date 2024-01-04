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

export default async function Subject() {
	const subjects = await getSubjects()
	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-2xl">Dersler</h1>
			<CardForm title="Ders Ekle" submitText="Ekle" action={addSubject}>
				<CardFormInput label="Ders Adı:" name="title" required />
			</CardForm>
			<Table
				head={['Ders', 'Seçenekler']}
				body={subjects.map((subject) => (
					<SubjectItem
						key={subject.id}
						id={subject.id}
						title={subject.title}
						deleteSubject={deleteSubject}
						updateSubject={updateSubject}
					/>
				))}
			/>
		</div>
	)
}
