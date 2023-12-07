function Auto(marca,color,modelo,kilometros){
    this.marca= marca;
    this.modelo=modelo;
    this.color=color;
    
} 

const auto1= new Auto ("Camaro","Amarillo","2013")
const auto2= new Auto ("Lamborghini","Amarillo","2023")
const auto3= new Auto ("Ferrari","Rojo","2015")
const auto4= new Auto ("Mustang","Violeta","2020")
const auto5= new Auto ("Mercedes","Gris","2003")


const lista=[auto1,auto2,auto3,auto4,auto5]
localStorage.setItem("vehiculos", JSON.stringify(lista));
let listaAutos = JSON.parse(localStorage.getItem("vehiculos")) || [];





let botoncito= document.getElementById("buscar")
botoncito.addEventListener("click",function filtrar(){
    
    if(localStorage.getItem("vehiculos")){
    listaAutos=JSON.parse(localStorage.getItem("vehiculos"))

    }else{
    lista
    }
    
    const body= document.getElementById("body")
    let input=document.getElementById("buscando").value 
    let palabraClave= input.trim()
    let resultado= listaAutos.filter((x)=>x.marca.toLowerCase().includes(palabraClave))
    if (input=== ""){
        alert("Escribe la marca que deseas buscar")
        
    }else{ 

    if(resultado.length > 0){
        const container= document.createElement("div")
        resultado.forEach((x)=>{
            const card= document.createElement("ul")
        const marca=document.createElement("li")
        marca.textContent="Marca: " +x.marca
        card.appendChild(marca)
        
        const modelo=document.createElement("li")
        modelo.textContent="Modelo: " + x.modelo
        card.appendChild(modelo)
        
        const color=document.createElement("li")
        color.textContent=`Color: ${x.color}`
        card.appendChild(color)

        container.appendChild(card)

    })

    body.appendChild(container)
    }else{
        alert("no hay coincidencias")
    }}
})



let botonagregar= document.getElementById("boton")
botonagregar.addEventListener("click",function agregar(){
    const formulario= document.createElement("form")
    formulario.innerHTML=`
    <label for="marca-input">Ingresá la marca: </label>
    <input id="marca-input" type="text" step="0.01" required><br>
    <label for="modelo-input"> Ingresá el modelo: </label>
    <input id="modelo-input" type="text" step="0.01" required><br>
    <label for="color-input"> Ingresá el color: </label>
    <input id="color-input" type="text" step="0.01" required>
    

    <button type="submit" id="css"> Agregar </button>
    `
    formulario.addEventListener("submit",function(e){
        e.preventDefault();
        const marcainput= document.getElementById("marca-input").value.trim().toLowerCase()
        const modeloinput= parseFloat(document.getElementById("modelo-input").value)
        const colorinput= document.getElementById("color-input").value.trim()
        

        if( marcainput === "" || colorinput ==="" || isNaN(modeloinput)){
            alert("Ingresa datos validos")
            return
        }
        const vehiculo= new Auto(marcainput,modeloinput,colorinput)
        lista.push(vehiculo)
        localStorage.setItem("vehiculos",JSON.stringify(lista))
        const container= document.createElement("div")
        
    

    
    
    })
    const body=document.querySelector("body")
    body.appendChild(formulario)

    
})


let mostrar= document.getElementById("mostrar")

mostrar.addEventListener("click",function(){
    const container= document.createElement("div")
    lista.forEach((x)=>{
        const card= document.createElement("ul")
        const marca=document.createElement("li")
        marca.textContent="Marca: " +x.marca
        card.appendChild(marca)
        
        const modelo=document.createElement("li")
        modelo.textContent="Modelo: " + x.modelo
        card.appendChild(modelo)
        
        const color=document.createElement("li")
        color.textContent=`Color: ${x.color}`
        card.appendChild(color)

        container.appendChild(card)
        
    })
    const body=document.getElementById("body")
    body.appendChild(container)

})