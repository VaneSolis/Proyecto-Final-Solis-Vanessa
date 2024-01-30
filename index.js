// Función para calcular cuotas
const calcularCuotas = (opcion) => {
    const opciones = [
        { monto: 3000, cuotas: 6 },
        { monto: 3000, cuotas: 12 },
        { monto: 4000, cuotas: 6 },
        { monto: 4000, cuotas: 12 }
    ];

    const seleccion = opciones[opcion - 1];
    const cuotaMensual = seleccion.monto / seleccion.cuotas;
    return cuotaMensual.toFixed(2);
};

// Función para manejar el evento de simulación
const simularCuotas = () => {
    const opcionInput = document.getElementById("opcionInput");
    const resultadoCuotas = document.getElementById("resultadoCuotas");

    const opcionSeleccionada = parseInt(opcionInput.value);

    if (opcionSeleccionada >= 1 && opcionSeleccionada <= 4) {
        const cuotaMensual = calcularCuotas(opcionSeleccionada);
        resultadoCuotas.textContent = `Pagarás ${cuotaMensual} mensuales`;
    } else {
        resultadoCuotas.textContent = "Opción incorrecta";
    }
};

// Asignar evento al botón de simulación
const botonSimular = document.getElementById("botonSimular");
botonSimular.addEventListener("click", simularCuotas);
