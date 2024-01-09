import { InputHTMLAttributes } from 'react'

export function InlineEditFormInput({
	name,
	...props
}: InputHTMLAttributes<HTMLInputElement> & { name: string }) {
	return <input type="text" name={name} className="input input-sm" {...props} />
}

export function InlineEditFormSelect({
	name,
	children,
	...props
}: InputHTMLAttributes<HTMLSelectElement> & {
	name: string
	children: React.ReactNode
}) {
	return (
		<select name={name} className="select select-sm select-bordered" {...props}>
			{children}
		</select>
	)
}
