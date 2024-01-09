import {
	addTeacher,
	getTeachers,
	deleteTeacher,
	updateTeacher,
} from './TeacherActions'
import TeacherItem from './TeacherItem'
import { getSubjects, getSubjectNameById } from '../subject/SubjectActions'
import CardForm from '@/components/cardForm/CardForm'
import CardFormInput from '@/components/cardForm/CardFormInput'
import CardFormSelect from '@/components/cardForm/CardFormSelect'
import dynamic from 'next/dynamic'

const Table = dynamic(() => import('@/components/Table'), {
	ssr: false,
})

export default async function Teachers() {
	const teachers = await getTeachers()
	const subjects = await getSubjects()
	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-2xl">Öğretmenler</h1>
			<CardForm title="Öğretmen Ekle" action={addTeacher} submitText="Ekle">
				<CardFormInput label="Öğretmenin Adı ve Soyadı:" name="name" required />
				<CardFormSelect label="Öğretmenin Branşı:" name="subjectId">
					{subjects.map((subject) => (
						<option key={subject.id} value={subject.id}>
							{subject.title}
						</option>
					))}
				</CardFormSelect>
			</CardForm>
			<Table head={['Öğretmen Adı', 'Branş', 'Seçenekler']}>
				{
					teachers.map(async (teacher) => {
						const subjectName = await getSubjectNameById(teacher.subjectId)
						return (
							<TeacherItem
								key={teacher.id}
								id={teacher.id}
								availableSubjects={subjects}
								subjectName={subjectName}
								name={teacher.name}
								updateTeacher={updateTeacher}
								deleteTeacher={deleteTeacher}
							/>
						)
					}) as Awaited<Promise<any>>
				}
			</Table>
		</div>
	)
}
