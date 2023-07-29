const getData = () => {
	return fetch("https://kartax-api-py.vercel.app/negocio/", {cache:'no-store'})
		.then(res => res.json())
		.then(data => data)
}

const getData2 = async () => {
	const res = await fetch("https://kartax-api-py.vercel.app/negocio/", {cache:'no-store'})
	return await res.json()
}

export default async function Clients() {
	const datos = await getData()

	console.log(datos)

	return (
		<section>
			{/* {datos.map((e) =>
				<div>
					<p>{e.nombre}</p>
				</div>
			)} */}
		</section>
	)
}
