'use client'
import { TrashIcon } from '@heroicons/react/16/solid'

type SubjectProps = any

export default function SubjectItem({
	id,
	title,
	deleteSubject,
}: SubjectProps) {
	return (
		<tr key={id} className="p-2 my-2 hover:bg-base-200 group relative">
			<td>{title}</td>
			<td>
				<button className="scale-0 group-hover:scale-100 text-red-500">
					<TrashIcon
						data-tooltip-target={`tooltip-delete-${id}`}
						onClick={() => deleteSubject(id)}
						className="w-4 h-4"
					/>
					<div
						id={`tooltip-delete-${id}`}
						role="tooltip"
						className="bg-stone-300 text-stone-700 rounded-sm px-2 absolute invisible opacity-0 tooltip">
						<p>Sil</p>
					</div>
				</button>
			</td>
		</tr>
	)
}
