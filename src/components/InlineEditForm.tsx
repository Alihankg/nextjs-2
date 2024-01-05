import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid'

type SubmitButtonsProps = {
	isSubmitable: boolean
	onCancel: () => void
}

type InlineEditFormProps = SubmitButtonsProps & {
	action: any
	children: React.ReactNode
}

function SubmitButtons({ isSubmitable = true, onCancel }: SubmitButtonsProps) {
	return (
		<>
			<div className="tooltip flex items-center" data-tip="Onayla">
				<button
					type="submit"
					className={`text-green-500 ${isSubmitable ? '' : 'hidden'}`}>
					<CheckIcon className="h-5" />
				</button>
			</div>
			<div className="tooltip flex items-center" data-tip="İptal">
				<button onClick={onCancel} className="text-red-500">
					<XMarkIcon className="h-5" />
				</button>
			</div>
		</>
	)
}

export default function InlineEditForm({
	action,
	onCancel,
	children,
	isSubmitable,
}: InlineEditFormProps) {
	return (
		<form action={action} className="flex gap-2 items-center">
			{children}
			<SubmitButtons isSubmitable={isSubmitable} onCancel={onCancel} />
		</form>
	)
}
