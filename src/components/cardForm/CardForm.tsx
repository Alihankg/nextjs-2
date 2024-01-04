type CardFormProps = {
	action: any
	title?: string
	submitText?: string
	children?: React.ReactNode
}

export default function CardForm({
	action,
	title = 'Form',
	submitText = 'Onayla',
	children,
}: CardFormProps) {
	return (
		<form
			action={action}
			className="card bg-base-200 p-4 flex flex-col gap-4 items-start">
			<h2 className="card-title">{title}</h2>
			{children}
			<button type="submit" className="btn btn-outline">
				{submitText}
			</button>
		</form>
	)
}
