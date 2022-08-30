	
	var lista = []; //Lista donde se va a ingresar con la funcion deslistar y enlistar caracteres

	var entrada = document.querySelector(".input-texto"); //Toma entrada de input

	var encript = document.querySelector("#encript"); //Boton encriptador
	encript.onclick = enlistar;

	var descript = document.querySelector("#descript"); //Boton desencriptador
	descript.onclick = deslistar;

	var btnCopy = document.querySelector(".copiar")
    btnCopy.onclick = copiar;

    const mensaje = document.querySelector(".mensaje");

	btnCopy.style.display = "none"

	//Enlistar  y encriptar
	function enlistar(){

		var contador = entrada.value.length; //Cuenta la cantidad de caracteres
		
			for (var i = 0; i <= contador; i++){ //Ingresa caracteres a lista con bucle

				lista.push(entrada.value[i])
			}

		for (var i = 0; i <= contador; i++){ //Compara cada letra de la lista y si coincide la remplaza por el nuevo valor asignado

			if(lista[i] == "a"){

				lista[i] = "ai"

			}

			if(lista[i] == "e"){

				lista[i] = "enter"

			}

			if(lista[i] == "i"){

				lista[i] = "imes"

			}

			if(lista[i] == "o"){

				lista[i] = "ober"

			}
			if(lista[i] == "u"){

				lista[i] = "ufat"

			}
		}
		mensaje.value = lista.join(""); //Pasa a string y muestra alerta
		lista = []; //Vacia la lista
		entrada.value = ""; //Reestablece a vacio el valor del input
        btnCopy.style.display = "block"
		entrada.focus(); //Se selecciona autamaticamente el input
	}

	//Descriptar y pasar a string
	function deslistar(){
		var palabra = entrada.value;
		var contador = palabra.length + 1;

		for(var i = 0; i <= contador; i++){ //Bucle donde buscara las vocales 

				if (palabra[i] == "a"){

					lista.push("a")
					i = i + 2; //Su valor aumenta en 2 porque la cadena de encriptacion para la vocal tiene 2 espacios de caracteres

						if (palabra[i] == "a"){
									lista.push("a")
									i = i + 2;
						}
						if (palabra[i] == "e"){
									lista.push("e")
									i = i + 5;
						}
						if (palabra[i] == "i"){
									lista.push("i")
									i = i + 4;
						}
						if (palabra[i] == "o"){
									lista.push("o")
									i = i + 4;
						}
						if (palabra[i] == "u"){
									lista.push("u")
									i = i + 4;
						}
				}

				if (palabra[i] == "e"){

					lista.push("e")
					i = i + 5;
						if (palabra[i] == "a"){
									lista.push("a")
									i = i + 2;
						}
						if (palabra[i] == "e"){
									lista.push("e")
									i = i + 5;
						}
						if (palabra[i] == "i"){
									lista.push("i")
									i = i + 4;
						}
						if (palabra[i] == "o"){
									lista.push("o")
									i = i + 4;
						}
						if (palabra[i] == "u"){
									lista.push("u")
									i = i + 4;
						}
				}

				if (palabra[i] == "i"){

					lista.push("i")
					i = i + 4;
						if (palabra[i] == "a"){
									lista.push("a")
									i = i + 2;
						}
						if (palabra[i] == "e"){
									lista.push("e")
									i = i + 5;
						}
						if (palabra[i] == "i"){
									lista.push("i")
									i = i + 4;
						}
						if (palabra[i] == "o"){
									lista.push("o")
									i = i + 4;
						}
						if (palabra[i] == "u"){
									lista.push("u")
									i = i + 4;
						}
					
				}

				if (palabra[i] == "o"){

					lista.push("o")
					i = i + 4;
						if (palabra[i] == "a"){
									lista.push("a")
									i = i + 2;
						}
						if (palabra[i] == "e"){
									lista.push("e")
									i = i + 5;
						}
						if (palabra[i] == "i"){
									lista.push("i")
									i = i + 4;
						}
						if (palabra[i] == "o"){
									lista.push("o")
									i = i + 4;
						}
						if (palabra[i] == "u"){
									lista.push("u")
									i = i + 4;
						}
				}

				if (true){ //Necesito que esta condicion siempre se cumpla porque por alguna razon en la palabra "qufatenter" al ser descriptado lo hacia con error. 
					if (palabra[i] == "u"){
						lista.push("u")
						i = i + 4;
							if (palabra[i] == "a"){
										lista.push("a")
										i = i + 2;
							}
							if (palabra[i] == "e"){
										lista.push("e")
										i = i + 5;
							}
							if (palabra[i] == "i"){
										lista.push("i")
										i = i + 4;
							}
							if (palabra[i] == "o"){
										lista.push("o")
										i = i + 4;
							}
							if (palabra[i] == "u"){
										lista.push("u")
										i = i + 4;
							}
					
					}
				}

				if (palabra[i] == undefined){
					break;
				}
				lista.push(palabra[i]);

				
		}
		mensaje.value = lista.join(""); //Pasa a string y muestra resultado en el otro input
		lista = []; //Vacia la lista
		entrada.value = ""; //Reestablece a vacio el valor del input
        btnCopy.style.display = "block"
		entrada.focus(); //Se selecciona autamaticamente el input


	}

	function copiar() {
        
        mensaje.select();
        navigator.clipboard.writeText(mensaje.value)
        mensaje.value = "";
        alert("Texto Copiado");

	}
