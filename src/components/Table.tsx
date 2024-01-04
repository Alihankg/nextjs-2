type TableProps = {
	head: string[]
	body: React.JSX.Element[]
}

export default function Table({ head, body }: TableProps) {
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
				<tbody>{body}</tbody>
			</table>
		</div>
	)
}
