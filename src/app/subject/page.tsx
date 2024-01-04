import SubjectItem from './SubjectItem'
import {
	getSubjects,
	addSubject,
	deleteSubject,
	updateSubject,
} from './actions'

export default async function Subject() {
	const subjects = await getSubjects()
	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-2xl">Dersler</h1>
			<form
				action={addSubject}
				className="card bg-base-200 p-4 flex flex-col gap-4 items-start">
				<h2 className="card-title">Yeni Ders</h2>
				<label htmlFor="title">
					Ders Adı:{' '}
					<input
						type="text"
						name="title"
						className="input input-bordered"
						placeholder="Ders Adı"
						required
					/>
				</label>

				<button type="submit" className="btn bg-base-300">
					Ekle
				</button>
			</form>
			<div className="overflow-x-auto">
				<table className="table bg-base-200">
					<thead>
						<tr>
							<th>Ders</th>
							<th>Seçenekler</th>
						</tr>
					</thead>
					<tbody>
						{subjects.map((subject) => (
							<SubjectItem
								key={subject.id}
								id={subject.id}
								title={subject.title}
								deleteSubject={deleteSubject}
								updateSubject={updateSubject}
							/>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
