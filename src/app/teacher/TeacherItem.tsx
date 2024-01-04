'use client'
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/16/solid'

type TeacherProps = {
	id: number
	name: string
	subjectName?: string
	updateTeacher: Function
	deleteTeacher: Function
}

export default function TeacherItem({
	id,
	name,
	subjectName,
	updateTeacher,
	deleteTeacher,
}: TeacherProps) {
	const handleDelete = () => {
		deleteTeacher(id)
	}
	return (
		<tr key={id} className="p-2 my-2 hover:bg-base-300 group relative">
			<td className="w-1/3">{name}</td>
			<td className="">{subjectName}</td>
			<td className="flex gap-2">
				<div className="tooltip" data-tip="Güncelle">
					<button className="md:scale-0 group-hover:scale-100 text-blue-500">
						<PencilSquareIcon className="h-5" />
					</button>
				</div>
				<div className="tooltip" data-tip="Sil">
					<button className="md:scale-0 group-hover:scale-100 text-red-500">
						<TrashIcon className="h-5" />
					</button>
				</div>
			</td>
		</tr>
	)
}
