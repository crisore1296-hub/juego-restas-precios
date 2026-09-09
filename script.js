// Variables del juego
let preguntaActual = 0;
let puntosActuales = 0;
let respuestaSeleccionada = null;
let sintetizador = null;

// Base de datos de problemas de restas con precios
const problemas = [
    {
        precio1: 50,
        precio2: 15,
        resultado: 35,
        contexto: "Tengo $50 en mi monedero. Gasto $15 en un juguete. ¿Cuánto dinero me queda?"
    },
    {
        precio1: 80,
        precio2: 30,
        resultado: 50,
        contexto: "Un cuaderno cuesta $80 pero me hacen un descuento de $30. ¿Cuál es el nuevo precio?"
    },
    {
        precio1: 60,
        precio2: 20,
        resultado: 40,
        contexto: "Tengo $60 pesos. Compro un lápiz que cuesta $20. ¿Cuánto me sobra?"
    },
    {
        precio1: 90,
        precio2: 25,
        resultado: 65,
        contexto: "Una mochila cuesta $90 pero está en oferta y cuesta $25 menos. ¿Cuál es el precio final?"
    },
    {
        precio1: 75,
        precio2: 35,
        resultado: 40,
        contexto: "Tengo $75 en mi alcancía. Me gasto $35 en chocolates. ¿Cuánto dinero me queda en la alcancía?"
    },
    {
        precio1: 100,
        precio2: 45,
        resultado: 55,
        contexto: "Un videojuego cuesta $100 pero hay una rebaja de $45. ¿Cuánto tengo que pagar ahora?"
    },
    {
        precio1: 70,
        precio2: 18,
        resultado: 52,
        contexto: "Mi papá me da $70 pesos. Me gasto $18 en caramelos. ¿Cuánto dinero me queda?"
    },
    {
        precio1: 85,
        precio2: 22,
        resultado: 63,
        contexto: "Un libro cuesta $85 pesos pero me descuentan $22 por ser buen estudiante. ¿Cuánto debo pagar?"
    },
    {
        precio1: 95,
        precio2: 40,
        resultado: 55,
        contexto: "Tengo $95 pesos ahorrados. Compro una pelota que cuesta $40. ¿Cuánto dinero me quedará?"
    },
    {
        precio1: 110,
        precio2: 50,
        resultado: 60,
        contexto: "Una bicicleta cuesta $110 pesos. Me hacen un descuento de $50. ¿Cuál será el precio final?"
    }
];

// Inicializar síntesis de voz
function inicializarSintesis() {
    sintetizador = window.speechSynthesis;
}

// Función para reproducir texto
function reproducirTexto(texto) {
    if (!sintetizador) inicializarSintesis();
    
    // Cancelar cualquier audio anterior
    sintetizador.cancel();
    
    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'es-ES';
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;
    
    sintetizador.speak(utterance);
}

// Función para reproducir el problema actual
function reproducirProblema() {
    const problema = problemas[preguntaActual];
    reproducirTexto(problema.contexto);
}

// Iniciar el juego
function iniciarJuego() {
    preguntaActual = 0;
    puntosActuales = 0;
    respuestaSeleccionada = null;
    
    mostrarPantalla('pantalla-juego');
    cargarProblema();
}

// Cargar un nuevo problema
function cargarProblema() {
    if (preguntaActual >= problemas.length) {
        finalizarJuego();
        return;
    }
    
    const problema = problemas[preguntaActual];
    
    // Actualizar números de pregunta y puntos
    document.getElementById('pregunta-num').textContent = (preguntaActual + 1) + '/10';
    document.getElementById('puntos').textContent = puntosActuales;
    
    // Mostrar precios
    document.getElementById('precio-original').textContent = '$' + problema.precio1;
    document.getElementById('precio-descuento').textContent = '$' + problema.precio2;
    
    // Mostrar el texto del problema
    document.getElementById('problema-texto').textContent = problema.contexto;
    
    // Generar opciones de respuesta
    generarOpciones(problema.resultado);
    
    // Limpiar entrada manual
    document.getElementById('respuesta-manual').value = '';
    respuestaSeleccionada = null;
    
    // Reproducir el problema automáticamente
    setTimeout(() => {
        reproducirProblema();
    }, 500);
}

// Generar opciones de respuesta
function generarOpciones(respuestaCorrecta) {
    const opciones = new Set();
    opciones.add(respuestaCorrecta);
    
    // Generar respuestas incorrectas cercanas
    const variaciones = [
        respuestaCorrecta + 5,
        respuestaCorrecta - 5,
        respuestaCorrecta + 10,
        respuestaCorrecta - 10
    ];
    
    variaciones.forEach(v => {
        if (v > 0 && v !== respuestaCorrecta) {
            opciones.add(v);
        }
    });
    
    // Convertir a array y mezclar
    const opcionesArray = Array.from(opciones).sort(() => Math.random() - 0.5);
    
    // Mostrar opciones
    const contenedor = document.getElementById('opciones-respuestas');
    contenedor.innerHTML = '';
    
    opcionesArray.forEach(opcion => {
        const boton = document.createElement('button');
        boton.className = 'opcion';
        boton.textContent = '$' + opcion;
        boton.onclick = () => seleccionarOpcion(boton, opcion);
        contenedor.appendChild(boton);
    });
}

// Seleccionar una opción
function seleccionarOpcion(elemento, valor) {
    // Remover selección anterior
    document.querySelectorAll('.opcion').forEach(op => {
        op.classList.remove('seleccionado');
    });
    
    // Marcar la nueva selección
    elemento.classList.add('seleccionado');
    respuestaSeleccionada = valor;
    document.getElementById('respuesta-manual').value = '';
}

// Verificar la respuesta
function verificarRespuesta() {
    // Obtener respuesta del usuario (manual o seleccionada)
    let respuestaUsuario = respuestaSeleccionada;
    
    if (!respuestaUsuario) {
        const inputManual = document.getElementById('respuesta-manual').value;
        if (inputManual) {
            respuestaUsuario = parseInt(inputManual);
        }
    }
    
    if (respuestaUsuario === null || respuestaUsuario === undefined || respuestaUsuario === '') {
        reproducirTexto('Por favor selecciona una respuesta o escribe un número');
        return;
    }
    
    const problema = problemas[preguntaActual];
    const esCorrecta = respuestaUsuario === problema.resultado;
    
    if (esCorrecta) {
        puntosActuales += 10;
        reproducirTexto('¡Muy bien! ¡Respuesta correcta!');
        
        // Animar la respuesta correcta
        if (respuestaSeleccionada !== null) {
            document.querySelectorAll('.opcion').forEach(op => {
                if (op.textContent === '$' + respuestaUsuario) {
                    op.classList.add('correcto');
                }
            });
        }
    } else {
        reproducirTexto('Ups, esa no es la respuesta correcta. La respuesta es ' + problema.resultado);
        
        // Animar la respuesta incorrecta
        if (respuestaSeleccionada !== null) {
            document.querySelectorAll('.opcion').forEach(op => {
                if (op.textContent === '$' + respuestaUsuario) {
                    op.classList.add('incorrecto');
                }
            });
        }
    }
    
    // Pasar a la siguiente pregunta después de un delay
    setTimeout(() => {
        preguntaActual++;
        cargarProblema();
    }, 3000);
}

// Finalizar el juego
function finalizarJuego() {
    mostrarPantalla('pantalla-fin');
    
    document.getElementById('puntos-finales').textContent = puntosActuales;
    
    // Mensaje personalizado según puntuación
    let mensaje = '';
    let retroalimentacion = '';
    
    if (puntosActuales === 100) {
        mensaje = '🏆 ¡CAMPEÓN! ¡PERFECTO!';
        retroalimentacion = '¡Increíble! Respondiste todas las preguntas correctamente. ¡Eres un experto en restas!';
    } else if (puntosActuales >= 80) {
        mensaje = '🌟 ¡EXCELENTE!';
        retroalimentacion = '¡Muy bien hecho! Casi todo perfecto. Sigue practicando y serás un experto.';
    } else if (puntosActuales >= 60) {
        mensaje = '😊 ¡BIEN HECHO!';
        retroalimentacion = '¡Lo hiciste bien! Practica un poco más y mejorarás tu puntuación.';
    } else if (puntosActuales >= 40) {
        mensaje = '💪 ¡SIGUE INTENTANDO!';
        retroalimentacion = 'No te desanimes. Practica más y verás que cada vez lo harás mejor.';
    } else {
        mensaje = '🎓 ¡A PRACTICAR!';
        retroalimentacion = 'Necesitas practicar más. No te preocupes, con la práctica mejorarás mucho.';
    }
    
    document.getElementById('mensaje-final').textContent = mensaje;
    document.getElementById('retroalimentacion').innerHTML = `<p>${retroalimentacion}</p>`;
    
    // Reproducir mensaje final
    reproducirTexto(mensaje + ' Obtuviste ' + puntosActuales + ' puntos.');
}

// Reiniciar el juego
function reiniciarJuego() {
    mostrarPantalla('pantalla-inicio');
    iniciarJuego();
}

// Mostrar una pantalla específica
function mostrarPantalla(nombrePantalla) {
    // Ocultar todas las pantallas
    document.querySelectorAll('.pantalla').forEach(pantalla => {
        pantalla.classList.remove('activa');
    });
    
    // Mostrar la pantalla seleccionada
    document.getElementById(nombrePantalla).classList.add('activa');
}

// Inicializar cuando carga la página
window.addEventListener('load', () => {
    inicializarSintesis();
});
