import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'

type ItemOptionsProps = {
	onUpdate?: () => void
	onDelete?: () => void
}

export default function ItemOptions({ onUpdate, onDelete }: ItemOptionsProps) {
	return (
		<td className="flex gap-2 w-full">
			<div className="tooltip" data-tip="Güncelle">
				<button
					className="md:scale-0 group-hover:scale-100 text-blue-500 align-middle"
					onClick={onUpdate}>
					<PencilSquareIcon className="h-5" />
				</button>
			</div>
			<div className="tooltip" data-tip="Sil">
				<button
					className="md:scale-0 group-hover:scale-100 text-red-500 align-middle"
					onClick={onDelete}>
					<TrashIcon className="h-5" />
				</button>
			</div>
		</td>
	)
}
