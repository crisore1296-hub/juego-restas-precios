# 🎮 Juego de Restas con Precios

Un juego educativo interactivo diseñado para que los niños de **segundo de primaria** aprendan restas de forma divertida usando contextos de compras y precios. ¡Con audio incluido!

## 🎯 Características

✨ **Audio interactivo**: El juego lee en voz alta cada problema usando síntesis de voz  
🛒 **Contexto realista**: Las restas se plantean como situaciones de compra cotidiana  
📊 **Sistema de puntuación**: Los niños ganan puntos por cada respuesta correcta  
🎨 **Interfaz colorida y amigable**: Diseño atractivo para niños  
📱 **Totalmente responsivo**: Funciona en computadoras, tablets y teléfonos  
🔊 **Botón de repetición**: Los niños pueden escuchar el problema de nuevo cuantas veces quieran  

## 🚀 Cómo usar

1. **Abre el juego**: Accede a `index.html` en tu navegador
2. **Haz clic en "Comenzar Juego"**: Para empezar a jugar
3. **Escucha el problema**: El juego te leerá el problema en voz alta
4. **Selecciona tu respuesta**: 
   - Haz clic en uno de los botones de respuesta, O
   - Escribe tu respuesta en el campo de entrada
5. **Verifica tu respuesta**: Haz clic en el botón "✓ Verificar"
6. **Continúa**: El juego te llevará al siguiente problema automáticamente

## 📚 Problemas incluidos

El juego incluye **10 problemas diferentes** sobre:
- Dinero que te queda después de una compra
- Precios con descuentos
- Cambio en compras
- Restas básicas de 2 dígitos

Ejemplos:
- "Tengo $50 en mi monedero. Gasto $15 en un juguete. ¿Cuánto dinero me queda?"
- "Una mochila cuesta $90 pero está en oferta y cuesta $25 menos. ¿Cuál es el precio final?"

## 🎓 Objetivos educativos

Este juego ayuda a los niños a:
- ✅ Practicar restas con números de 2 dígitos
- ✅ Aplicar las matemáticas en situaciones reales
- ✅ Desarrollar habilidades de pensamiento numérico
- ✅ Mejorar la concentración y atención
- ✅ Ganar confianza en matemáticas

## 🎯 Sistema de puntuación

- **10 puntos** por cada respuesta correcta
- **Máximo: 100 puntos** (todas las preguntas correctas)
- Retroalimentación personalizada según el resultado final:
  - 100 pts: 🏆 ¡Campeón!
  - 80-90 pts: 🌟 ¡Excelente!
  - 60-70 pts: 😊 ¡Bien hecho!
  - 40-50 pts: 💪 ¡Sigue intentando!
  - Menos de 40 pts: 🎓 ¡A practicar!

## 🛠️ Requisitos técnicos

- Un navegador moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet (para la síntesis de voz)
- Altavoces o auriculares

## 📁 Estructura de archivos

```
juego-restas-precios/
├── index.html      # Página principal del juego
├── styles.css      # Estilos y diseño
├── script.js       # Lógica del juego y audio
└── README.md       # Este archivo
```

## 🎨 Cómo personalizar

### Agregar más problemas

Edita el array `problemas` en `script.js`:

```javascript
const problemas = [
    {
        precio1: 50,
        precio2: 15,
        resultado: 35,
        contexto: "Tu problema aquí"
    },
    // Más problemas...
];
```

### Cambiar colores

Edita las variables de color en `styles.css`:
- `#667eea` - Color azul/púrpura principal
- `#764ba2` - Color púrpura secundario
- `#ff9f43` - Color naranja (botones de audio)

### Cambiar velocidad del audio

En `script.js`, línea donde dice `utterance.rate = 0.9`:
- `0.5` - Muy lento
- `0.9` - Normal (recomendado)
- `1.5` - Rápido

## 🌐 Cómo compartir

1. Ve a tu repositorio en GitHub
2. Habilita "GitHub Pages" en Configuración
3. Selecciona la rama `main` y la carpeta raíz
4. ¡Listo! El juego estará disponible en `https://usuario.github.io/juego-restas-precios`

## 💡 Tips para maestros

- Usa este juego como actividad complementaria en clase
- Anima a los niños a intentar obtener 100 puntos
- Puedes modificar los precios para trabajar diferentes rangos de números
- El audio ayuda a los niños con diferentes estilos de aprendizaje

## 🐛 Solución de problemas

### El audio no funciona
- Verifica que tu navegador permita audio
- Prueba con otro navegador
- Asegúrate de que tu dispositivo tenga volumen

### Los números no se escuchan bien
- Cambia la velocidad del audio en `script.js`
- Ajusta el volume en tu dispositivo

### Las opciones no se ven bien en móvil
- Actualiza la página
- Verifica que tu dispositivo esté en modo vertical (portrait)

## 📝 Notas

- El juego usa **Web Speech API** para la síntesis de voz en español
- Todos los datos se guardan localmente en el navegador
- No se requiere registro o login
- Es totalmente gratuito y de código abierto

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso educativo.

## 👨‍💻 Desarrollado por

Creado con ❤️ para estudiantes de segundo de primaria

---

**¿Preguntas o sugerencias?** Abre un issue o crea un pull request en GitHub.

¡Que disfrutes aprendiendo matemáticas! 🎉
