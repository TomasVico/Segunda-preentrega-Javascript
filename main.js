function Auto(marca, color, modelo, kilometros) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
}

let autosIniciales = [
    new Auto("Camaro", "Amarillo", "2013"),
    new Auto("Lamborghini", "Amarillo", "2023"),
    new Auto("Ferrari", "Rojo", "2015"),
    new Auto("Mustang", "Violeta", "2020"),
    new Auto("Mercedes", "Gris", "2003")
];


let listaAutos = obtenerListaAutos();

function obtenerListaAutos() {
    const stockAutos = localStorage.getItem("vehiculos");
    return stockAutos ? JSON.parse(stockAutos) : autosIniciales;
}

let botoncito = document.getElementById("buscar");
botoncito.addEventListener("click", function filtrar() {
    listaAutos = obtenerListaAutos(); 

    const body = document.getElementById("body");
    let input = document.getElementById("buscando").value;
    let palabraClave = input.trim();
    let resultado = listaAutos.filter((x) => x.marca.toLowerCase().includes(palabraClave));
    
    if (input === "") {
        Swal.fire("Escribe algo para buscar");
    } else {
        if (resultado.length > 0) {
            const container = document.createElement("div");
            resultado.forEach((x) => {
                const card = document.createElement("ul");
                const marca = document.createElement("li");
                marca.textContent = "Marca: " + x.marca;
                card.appendChild(marca);

                const modelo = document.createElement("li");
                modelo.textContent = "Modelo: " + x.modelo;
                card.appendChild(modelo);

                const color = document.createElement("li");
                color.textContent = `Color: ${x.color}`;
                card.appendChild(color);

                container.appendChild(card);
            });

            body.appendChild(container);
        } else {
            Swal.fire("No hay coincidencias para tu búsqueda");
        }
    }
});

let botonagregar = document.getElementById("boton");
botonagregar.addEventListener("click", function agregar() {
    const body = document.querySelector("body");
    body.innerHTML = '';
    
    const formulario = document.createElement("form");
    formulario.innerHTML = `
        <label for="marca-input">Ingresá la marca: </label>
        <input id="marca-input" type="text" step="0.01" required><br>
        <label for="modelo-input"> Ingresá el modelo: </label>
        <input id="modelo-input" type="text" step="0.01" required><br>
        <label for="color-input"> Ingresá el color: </label>
        <input id="color-input" type="text" step="0.01" required>

        <button type="submit" id="css"> Agregar </button><br>
        
    `;

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
        const marcainput = document.getElementById("marca-input").value.trim().toLowerCase();
        const modeloinput = parseFloat(document.getElementById("modelo-input").value);
        const colorinput = document.getElementById("color-input").value.trim();

        if (marcainput === "" || colorinput === "" || isNaN(modeloinput)) {
            Swal.fire("Ingresa datos validos");
            return;
        }

        const vehiculo = new Auto(marcainput, modeloinput, colorinput);
        autosIniciales.push(vehiculo);

       
        localStorage.setItem("vehiculos", JSON.stringify(autosIniciales));

        const container = document.createElement("div");
        Swal.fire("Se agrego tu vehículo a la lista");
    });

    body.appendChild(formulario);
    const botonvolver=document.createElement("button")
    botonvolver.innerHTML=`Volver al inicio`
    botonvolver.addEventListener("click",()=>{
        window.location.href = document.referrer
    })
    body.appendChild(botonvolver)
    
});

let mostrar = document.getElementById("mostrar");
mostrar.addEventListener("click", function () {
    
    const container = document.createElement("div");
    autosIniciales.forEach((x) => {
        const card = document.createElement("ul");
        const marca = document.createElement("li");
        marca.textContent = "Marca: " + x.marca;
        card.appendChild(marca);

        const modelo = document.createElement("li");
        modelo.textContent = "Modelo: " + x.modelo;
        card.appendChild(modelo);

        const color = document.createElement("li");
        color.textContent = `Color: ${x.color}`;
        card.appendChild(color);

        container.appendChild(card);
    });

    const body = document.getElementById("body");
    body.appendChild(container);
    const botonvolver=document.createElement("button")
    botonvolver.innerHTML=`Volver al inicio`
    botonvolver.addEventListener("click",()=>{
        window.location.href = document.referrer
    })
    body.appendChild(botonvolver)
    

    
});



