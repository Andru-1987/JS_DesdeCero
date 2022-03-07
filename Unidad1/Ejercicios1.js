

function Mostrar(){
	let ask=prompt('Ingresar tu fecha de cumpleaños con el siguiente formato:DD-MM-YYYY')|| NaN;

	let regex=/^(0?[1-9]|[12][0-9]|3[01])\-(0[1-9]|1[012])-\d{4}$/;



	if(regex.test(ask)!=true){
		console.log('La fecha ingresada no es válida por regex');

	
	} else {

		let [date,month,year]=ask.split('-').map(e=>parseInt(e));

			console.log(`Día de cumpleaños: ${date}`);
			console.log(`Mes de cumpleaños: ${month}`);
			console.log(`Año de cumpleaños: ${year}`);

			let favNumber=parseInt(prompt('Tu num favorito es: ')) || 'No ingresó número';
			console.log(`Tu número favorito es: ${favNumber}`);

	}
}


Mostrar();
