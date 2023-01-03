import HelloProps from './HelloProps.jsx'

const A = (props) => {
	return (
		<>
			<h1>Name: {props.name}</h1>
		</>
		)
}

export const HelloWorld = ( props ) => {
	console.log(props)
	return (
		<>
			{/*<code>{ JSON.stringify( newMessage ) }</code>*/}
			<h1>a</h1>
			<HelloProps github="/shhiru" juego="Minecraft"/>
			<p>Soy un subtitulo</p>
		</>
		)
}