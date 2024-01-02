import SubjectItem from './SubjectItem'
import { getSubjects, addSubject, deleteSubject } from './actions'

export default async function Subject() {
	const subjects = await getSubjects()
	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-2xl">Dersler</h1>
			<form action={addSubject} className="flex gap-4 items-center">
				<label htmlFor="title">Ders Adı:</label>
				<input
					type="text"
					name="title"
					className="input input-bordered w-full max-w-xs"
					required
				/>
				<button type="submit" className="btn btn-neutral">
					Ekle
				</button>
			</form>
			<div className="overflow-x-auto">
				<table className="table bg-base-100">
					<thead>
						<tr>
							<th>Title</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{subjects.map((subject) => (
							<SubjectItem
								key={subject.id}
								id={subject.id}
								title={subject.title}
								deleteSubject={deleteSubject}
							/>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
