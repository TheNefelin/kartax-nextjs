import Image from "next/image"
//css
import styles from "@/css/CardList.module.css"
//img
import img from "@/img/imgApp/dev01.png"

const lista = (myLista) => {
	return (
		myLista.map((e, index) => (
			<li key={index}>&#10003; {e}</li>
		))
	)
}

export default function CardList() {
	return (
		<ul className={styles.ul}>
			<li>&#10003; Administrar 1 Negocio</li>
			<li>&#10003; Configuración Dashboard para Admin</li>
			<li>&#10003; Configuración Dashboard para Usuario</li>
			<li>&#10003; Mapeo de distribución de las mesas desde el Dashboard</li>
			<li>&#10003; QR por mesa para realizar pedidos</li>
			<li>&#10003; Otros...</li>
		</ul>
	)
}

export function CardListLeft(props) {
	return (
		<section className={styles.card_left}>
			<Image
				src={img}
				alt='assets'
				height={200}
				width={200}
			/>
			<ul>
				{lista(props.lista)}
			</ul>
		</section>
	)
}

export function CardListRight(props) {
	return (
		<section className={styles.card_right}>
			<ul>
				{lista(props.lista)}
			</ul>
			<Image
				src={img}
				alt='assets'
				height={200}
				width={200}
			/>
		</section>
	)
}