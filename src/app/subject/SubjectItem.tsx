'use client'
import {
	TrashIcon,
	PencilSquareIcon,
	CheckIcon,
	XMarkIcon,
} from '@heroicons/react/16/solid'
import { use, useState } from 'react'

type SubjectProps = any

export default function SubjectItem({
	id,
	title,
	deleteSubject,
	updateSubject,
}: SubjectProps) {
	const [isEdit, setIsEdit] = useState(false)
	const [newTitle, setNewTitle] = useState(title)

	const handleUpdate = async (data: FormData) => {
		const newTitle = data.get('title')
		await updateSubject(id, newTitle)
		setIsEdit(false)
	}
	return (
		<tr key={id} className="p-2 my-2 hover:bg-base-300 group relative">
			<td className="w-1/3">
				{isEdit ? (
					<form action={handleUpdate} className="flex gap-2 items-center">
						<input
							type="text"
							name="title"
							defaultValue={title}
							onChange={(e) => setNewTitle(e.target.value)}
							className="input input-sm"
						/>
						<div className="tooltip flex items-center" data-tip="Onayla">
							<button
								type="submit"
								className={`text-green-500 ${
									newTitle === title ? 'hidden' : ''
								}`}>
								<CheckIcon className="h-5" />
							</button>
						</div>
						<div className="tooltip flex items-center" data-tip="İptal">
							<button
								onClick={() => setIsEdit(!isEdit)}
								type="submit"
								className="text-red-500">
								<XMarkIcon className="h-5" />
							</button>
						</div>
					</form>
				) : (
					<span>{title}</span>
				)}
			</td>
			<td className="flex gap-2">
				<div className="tooltip" data-tip="Güncelle">
					<button
						className="md:scale-0 group-hover:scale-100 text-blue-500"
						onClick={() => setIsEdit(!isEdit)}>
						<PencilSquareIcon className="h-5" />
					</button>
				</div>
				<div className="tooltip" data-tip="Sil">
					<button
						className="md:scale-0 group-hover:scale-100 text-red-500"
						onClick={() => deleteSubject(id)}>
						<TrashIcon className="h-5" />
					</button>
				</div>
			</td>
		</tr>
	)
}
