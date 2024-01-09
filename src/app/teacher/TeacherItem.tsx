'use client'
import InlineEditForm from '@/components/InlineEditForm'
import {
	InlineEditFormInput,
	InlineEditFormSelect,
} from '@/components/InlineEditFormFields'
import ItemOptions from '@/components/ItemOptions'
import { useState } from 'react'

type TeacherProps = {
	id: number
	name: string
	availableSubjects: { id: number; title: string }[]
	subjectName?: string
	updateTeacher: Function
	deleteTeacher: Function
}

export default function TeacherItem({
	id,
	name,
	availableSubjects,
	subjectName,
	updateTeacher,
	deleteTeacher,
}: TeacherProps) {
	const [isEdit, setIsEdit] = useState(false)
	const [newName, setNewName] = useState(name)
	const [newSubject, setNewSubject] = useState(id)

	async function handleUpdate(data: FormData) {
		setIsEdit(!isEdit)
		const newName = data.get('name')
		const newSubject = parseInt(data.get('subjectId') as string)
		await updateTeacher(id, newName, newSubject)
	}
	return (
		<tr key={id} className="p-2 my-2 hover:bg-base-300 group relative">
			{isEdit ? (
				<td colSpan={2}>
					<InlineEditForm
						action={handleUpdate}
						isSubmitable={newName !== name || newSubject !== id}
						onCancel={() => setIsEdit(!isEdit)}>
						<InlineEditFormInput
							id="name"
							name="name"
							defaultValue={name}
							onChange={(e: any) => setNewName(e.target.value)}
						/>
						<InlineEditFormSelect
							id="subjectId"
							name="subjectId"
							value={newSubject}
							onChange={(e: any) => setNewSubject(e.target.value)}>
							{availableSubjects.map((subject) => (
								<option key={subject.id} value={subject.id}>
									{subject.title}
								</option>
							))}
						</InlineEditFormSelect>
					</InlineEditForm>
				</td>
			) : (
				<>
					<td className="">{name}</td>
					<td className="">{subjectName}</td>
				</>
			)}
			<ItemOptions
				onEdit={() => setIsEdit(!isEdit)}
				onDelete={() => deleteTeacher(id)}
			/>
		</tr>
	)
}
