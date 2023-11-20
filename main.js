


function Auto(marca,color,modelo,kilometros){
    this.marca= marca;
    this.modelo=modelo;
    this.color=color;
    this.kilometros=kilometros;
} 

const auto1= new Auto ("camaro","amarillo","2013",98000)
const auto2= new Auto ("lambo","amarillo","2023",104000)
const auto3= new Auto ("ferrari","rojo","2015",195500)
const auto4= new Auto ("mustang","lila","2020",30000)
const auto5= new Auto ("mercedes","gris","2003",45000)

const listaAutos=[auto1,auto2,auto3,auto4,auto5]



function buscarAuto(){
    let Busqueda= prompt("Ingrese el modelo de auto que desea comprar: ").trim()
    let resultado= listaAutos.filter((x) => x.modelo.includes(Busqueda))
    if(resultado.length>0){
        console.table(resultado)
    }else{
        alert("El auto que buscaste no se encuentra, asi que lo agregaremos")
        Crear()
        
    }
 }

console.table(listaAutos)

function Crear(){
    let nuevoauto= new Auto(prompt("Ingrese marca"),
    prompt("Ingrese color"), 
    prompt("Ingrese modelo"),
    prompt("Ingrese kilometros"), 
    )
    listaAutos.push(nuevoauto)
    console.table(listaAutos)
}

buscarAuto()
