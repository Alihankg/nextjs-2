type TableProps = {
	head: string[]
	children: React.ReactNode
}

export default function Table({ head, children }: TableProps) {
	return (
		<div className="overflow-x-auto">
			<table className="table bg-base-200 flex">
				<thead>
					<tr>
						{head.map((title) => (
							<th key={title}>{title}</th>
						))}
					</tr>
				</thead>
				<tbody>{children}</tbody>
			</table>
		</div>
	)
}
