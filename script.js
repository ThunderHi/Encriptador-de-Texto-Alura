const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const muneco = document.querySelector(".img-muneco");
const mensajeInfo = document.querySelector(".mensaje-info");
const mensajeIngreso = document.querySelector(".mensaje-ingreso");
const btnCopiarElem = document.querySelector(".btn-copiar");
const btnLimpiarElem = document.querySelector(".btn-limpiar");

function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

function btnEncriptar() {
    const texto = textArea.value;

    if (!validarTexto(texto)) {
        alert("Solo se permite minúsculas, No acentos ni caracteres especiaes");
        return;
    }

    const textoEncriptado = encriptar(texto);
    mostrarResultado(textoEncriptado);
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const texto = textArea.value;

    if (!validarTexto(texto)) {
        alert("Solo se permite minúsculas y sin acento.");
        return;
    }

    const textoDesencriptado = desencriptar(texto);
    mostrarResultado(textoDesencriptado);
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function mostrarResultado(texto) {
    mensaje.value = texto;
    textArea.value = "";
    mensaje.style.display = "block";
    muneco.style.display = "none";
    mensajeInfo.style.display = "none";
    mensajeIngreso.style.display = "none";
    btnCopiarElem.style.display = "block";
    btnLimpiarElem.style.display = "block";
}

function btnCopiar() {
    mensaje.select();
    mensaje.setSelectionRange(0, 999999);
    document.execCommand("copy");
    alert("Texto copiado");
}

function btnLimpiar() {
    // Restaurar la sección 2 a su estado inicial
    mensaje.value = ""; // Limpia el contenido del mensaje
    mensaje.style.display = "none";
    muneco.style.display = "block";
    mensajeInfo.style.display = "block";
    mensajeIngreso.style.display = "block";
    btnCopiarElem.style.display = "none";
    btnLimpiarElem.style.display = "none";
}
