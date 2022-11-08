
const miboton = document.getElementById("mybtn");
const borrar = document.getElementById("borrar");

borrar.onclick = borrado;
miboton.onclick = apretarBoton;


function apretarBoton()
{
    //let res= (cant*200);
    const presultado = document.getElementById("ptotal");
    let cant = document.getElementById("cantidad").value;
    const categoria = document.getElementById("sel1").value;
    const nom = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    console.log(cant);
    console.log(nom);
    console.log(categoria);
    console.log(descuento(categoria));
    presultado.innerHTML= "Total a pagar por "+nom+" " + apellido+", $" + resultado(cant,descuento(categoria));
    
}

function borrado()
{
    document.getElementById('myform').reset();
    
}

function descuento(categoria)
{
    if (categoria=="Estudiante")
    {
        return(0.8);

    }else if (categoria=="Trainee")
    {
        return(0.5);
    }else{
        return(0.15);
    }
}

function resultado(cant,desc)
{
return ((cant*200)-(cant*200*desc));
}