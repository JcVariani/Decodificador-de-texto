//s "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

const textArea = document.querySelector(".apresentacao__texto");
const mensagem = document.querySelector(".mensagem");

function btnCriptografar() {
	const textoCriptografado = criptografar(textArea.value);
	mensagem.value = textoCriptografado;
	textArea.value = "";
}

function criptografar(mensagemCriptografada) { 

	let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]]
	mensagemCriptografada = mensagemCriptografada.toLowerCase();
	for(let i = 0; i < matrizCodigo.length; i++) {
		if(mensagemCriptografada.includes(matrizCodigo[i][0])) {
			mensagemCriptografada = mensagemCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

		}
	} 

	textArea.classList.remove("com-conteudo"); // Remove a classe "com-conteudo"

	return mensagemCriptografada;
}

function btnDescriptografar() {
	const textoDescriptografado = descriptografar(textArea.value);
	mensagem.value = textoDescriptografado;
	textArea.value = "";
}

function descriptografar(mensagemDescriptografada) { 

	let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]]
	mensagemDescriptografada = mensagemDescriptografada.toLowerCase();
	for(let i = 0; i < matrizCodigo.length; i++) {
		if(mensagemDescriptografada.includes(matrizCodigo[i][1])) {
			mensagemDescriptografada = mensagemDescriptografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);

		}
	} 

	textArea.classList.remove("com-conteudo"); // Remove a classe "com-conteudo"

	return mensagemDescriptografada;
}

function btnCopiar() {
	var copyText = document.querySelector(".mensagem");
	var textToCopy = copyText.value;
  
	navigator.clipboard.writeText(textToCopy);
  } 

var mensagemTextArea = document.querySelector(".mensagem");

function validarInput(input) {
	input.value = input.value.replace(/[A-Za-z0-9]/g, '');
  }
  
  const textoInput = document.querySelector('.apresentacao__texto');

  textoInput.addEventListener('input', function (event) {
	const inputValue = event.target.value;
  
	const normalizedValue = inputValue.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
	
	event.target.value = normalizedValue;
  });