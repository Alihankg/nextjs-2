'use client'
import Table from '@/components/Table'
import { useState } from 'react'
import SubjectItem from './SubjectItem'
import type { Subject } from 'prisma/prisma-client'
type SubjectTableProps = {
	deleteSubject: Function
	updateSubject: Function
	subjects: Subject[]
}
export default function SubjectTable({
	deleteSubject,
	updateSubject,
	subjects,
}: SubjectTableProps) {
	const [isEdit, setIsEdit] = useState<number | null>(null)
	return (
		<Table head={['Ders', 'Seçenekler']}>
			{subjects.map((subject) => (
				<SubjectItem
					key={subject.id}
					subject={subject}
					isEdit={isEdit === subject.id}
					setIsEdit={setIsEdit}
					onDelete={() => deleteSubject(subject.id)}
					onUpdate={() => updateSubject(subject.id)}
				/>
			))}
		</Table>
	)
}
