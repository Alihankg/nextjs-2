import Link from 'next/link'

export default function Home() {
	return (
		<div className="card bg-base-200">
			<div className="card-body gap-4">
				<h2 className="card-title">Rezervasyon Programına Hoş Geldiniz!</h2>
				<p>
					Bu programda istediğiniz öğretmen ile belirli bir zamanda rezervasyon
					yapabilirsiniz.
				</p>
				<div className="card-actions">
					<Link href={'/reservation/new'} className="btn btn-outline">
						Rezervasyon Yap
					</Link>
				</div>
			</div>
		</div>
	)
}
