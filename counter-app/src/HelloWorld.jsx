export const HelloWorld = ( props ) => {
	console.log(props)

	return (
		<>
			{/*<code>{ JSON.stringify( newMessage ) }</code>*/}
			<h1>{ props.title }</h1>
			<p>Soy un subtitulo</p>
		</>
		)
}