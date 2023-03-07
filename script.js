let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
        document.getElementById("nav").style.display = "none";

    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
        document.getElementById("nav").style.display = "block";

    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    if(document.getElementById("nav").classList.contains("responsive")){
        document.getElementById("nav").style.display = "none";
        menuVisible = false;
    }else{
        document.getElementById("nav").style.display = "block";
        menuVisible = true;
    }

    // mostrarOcultarMenu();
}





