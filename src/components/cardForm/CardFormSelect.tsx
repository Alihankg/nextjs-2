type CardFormSelectProps = {
	name: string
	label?: string
	children: React.ReactNode
}

export default function CardFormSelect({
	name,
	label = 'Form Girişi',
	children,
}: CardFormSelectProps) {
	return (
		<label htmlFor={name}>
			{label}{' '}
			<select name={name} className="select select-bordered ml-4">
				{children}
			</select>
		</label>
	)
}
