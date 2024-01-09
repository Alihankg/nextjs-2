import {
	CheckIcon,
	PencilSquareIcon,
	TrashIcon,
	XMarkIcon,
} from '@heroicons/react/24/solid'

type ItemOptionsProps = {
	isEdit?: boolean
	isSubmittable?: boolean
	onUpdate?: Function
	onCancel?: Function
	onEdit?: Function
	onDelete?: Function
}

export default function ItemOptions({
	isEdit,
	isSubmittable,
	onUpdate,
	onCancel,
	onEdit,
	onDelete,
}: ItemOptionsProps) {
	return (
		<td className="flex gap-2">
			{isEdit ? (
				<>
					{isSubmittable && (
						<IconButton
							onClick={onUpdate}
							tooltip="Onayla"
							showAlways
							Icon={<CheckIcon className="h-5 text-green-500" />}
						/>
					)}

					<IconButton
						onClick={onCancel}
						tooltip="İptal"
						showAlways
						Icon={<XMarkIcon className="h-5 text-red-500" />}
					/>
				</>
			) : (
				<IconButton
					onClick={onEdit}
					tooltip="Düzenle"
					Icon={<PencilSquareIcon className="h-5 text-blue-500" />}
				/>
			)}

			<IconButton
				onClick={onDelete}
				tooltip="Sil"
				Icon={<TrashIcon className="h-5 text-red-500" />}
			/>
		</td>
	)
}
type IconButtonProps = {
	onClick?: Function
	showAlways?: boolean
	tooltip?: string
	Icon: JSX.Element
}
function IconButton({ onClick, tooltip, showAlways, Icon }: IconButtonProps) {
	return (
		<div className="tooltip" data-tip={tooltip}>
			<button
				className={`align-middle ${
					showAlways ? '' : 'md:scale-0 group-hover:scale-100'
				}`}
				onClick={onClick ? () => onClick() : undefined}>
				{Icon}
			</button>
		</div>
	)
}
