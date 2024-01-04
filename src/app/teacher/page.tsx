import { addTeacher, getTeachers, deleteTeacher } from './actions'
import TeacherItem from './TeacherItem'
import { getSubjects, getSubjectNameById } from '../subject/actions'

export default async function Teachers() {
	const teachers = await getTeachers()
	const subjects = await getSubjects()
	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-2xl">Öğretmenler</h1>
			<form
				action={addTeacher}
				className="card bg-base-200 p-4 flex flex-col gap-4 items-start">
				<h2 className="card-title">Yeni Öğretmen</h2>
				<label htmlFor="title">
					Öğretmenin Adı ve Soyadı:{' '}
					<input
						type="text"
						name="name"
						className="input input-bordered"
						placeholder="Yasin Çalışkan"
						required
					/>
				</label>
				<label htmlFor="subjectId">
					Öğretmenin Branşı:{' '}
					<select
						name="subjectId"
						id="subjectId"
						className="select select-bordered">
						{subjects.map((subject) => (
							<option key={subject.id} value={subject.id}>
								{subject.title}
							</option>
						))}
					</select>
				</label>

				<button type="submit" className="btn bg-base-300">
					Ekle
				</button>
			</form>
			<div className="overflow-x-auto">
				<table className="table bg-base-200">
					<thead>
						<tr>
							<th>Öğretmen Adı</th>
							<th>Branş</th>
							<th>Seçenekler</th>
						</tr>
					</thead>
					<tbody>
						{teachers.map(async (teacher) => {
							const subjectName = await getSubjectNameById(teacher.subjectId)
							return (
								<TeacherItem
									key={teacher.id}
									id={teacher.id}
									subjectName={subjectName}
									name={teacher.name}
									deleteTeacher={deleteTeacher}
								/>
							)
						})}
					</tbody>
				</table>
			</div>
		</div>
	)
}
