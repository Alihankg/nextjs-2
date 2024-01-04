type CardFormInputProps = {
	name: string
	label?: string
	placeholder?: string
	required?: boolean
	type?: string
}
export default function CardFormInput({
	name,
	type = 'text',
	label = 'Form Girişi',
	placeholder,
	required = true,
}: CardFormInputProps) {
	return (
		<label htmlFor={name}>
			{label}
			<input
				type={type}
				name={name}
				className="input input-bordered ml-4"
				placeholder={placeholder && placeholder}
				required={required}
			/>
		</label>
	)
}
