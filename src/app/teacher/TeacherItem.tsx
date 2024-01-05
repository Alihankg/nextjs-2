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
	return (
		<tr key={id} className="p-2 my-2 hover:bg-base-300 group relative">
			{isEdit ? (
				<InlineEditForm
					action={updateTeacher}
					isSubmitable={newName !== name}
					onCancel={() => setIsEdit(!isEdit)}>
					<td>
						<InlineEditFormInput
							name="title"
							defaultValue={name}
							onChange={(e: any) => setNewName(e.target.value)}
						/>
					</td>
					<td>
						<InlineEditFormSelect name="subjectId" defaultValue={subjectName}>
							{availableSubjects.map((subject) => (
								<option key={subject.id} value={subject.id}>
									{subject.title}
								</option>
							))}
						</InlineEditFormSelect>
					</td>
				</InlineEditForm>
			) : (
				<>
					<td className="w-1/3">{name}</td>
					<td className="">{subjectName}</td>
				</>
			)}
			<ItemOptions
				onUpdate={() => setIsEdit(!isEdit)}
				onDelete={() => deleteTeacher(id)}
			/>
		</tr>
	)
}
