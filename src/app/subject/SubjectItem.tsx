'use client'
import InlineEditForm from '@/components/InlineEditForm'
import { InlineEditFormInput } from '@/components/InlineEditFormFields'
import ItemOptions from '@/components/ItemOptions'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

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
					<InlineEditForm
						action={handleUpdate}
						isSubmitable={newTitle !== title}
						onCancel={() => setIsEdit(!isEdit)}>
						<InlineEditFormInput
							name="title"
							defaultValue={title}
							onChange={(e) => setNewTitle(e.target.value)}
						/>
					</InlineEditForm>
				) : (
					<span>{title}</span>
				)}
			</td>
			<ItemOptions
				onUpdate={() => setIsEdit(!isEdit)}
				onDelete={() => deleteSubject(id)}
			/>
		</tr>
	)
}
