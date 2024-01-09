import ItemOptions from '@/components/ItemOptions'
import type { Subject } from 'prisma/prisma-client'
import { useState } from 'react'

type SubjectItemProps = {
	subject: Subject
	isEdit: boolean
	onDelete: Function
	onUpdate: Function
	setIsEdit: Function
}
export default function SubjectItem({
	subject,
	isEdit,
	setIsEdit,
	onDelete,
	onUpdate,
}: SubjectItemProps) {
	const initialFormData = {
		title: subject.title,
	}
	const [formData, setFormData] = useState(initialFormData)
	return (
		<tr key={subject.id} className="p-2 my-2 hover:bg-base-300 group relative">
			<td>
				{isEdit ? (
					<input
						type="text"
						className="input input-sm"
						value={formData.title}
						onChange={(e) => setFormData({ title: e.target.value })}
					/>
				) : (
					subject.title
				)}
			</td>

			<ItemOptions
				onEdit={() => setIsEdit(subject.id)}
				onCancel={() => {
					setIsEdit(null)
					setFormData(initialFormData)
				}}
				isEdit={isEdit}
				isSubmittable={formData.title !== subject.title}
				onUpdate={onUpdate}
				onDelete={onDelete}
			/>
		</tr>
	)
}
