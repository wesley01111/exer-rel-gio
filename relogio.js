function carregar(){



    var horas = document.getElementById('horario');
    
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    
    


    
    horas.innerHTML = `Agora são ${hora}:${minuto}`;
    
    var img = document.getElementById("foto");

    if (hora >= 0 && hora <12){
        img.setAttribute('src', 'assent/manha1.png')
        document.body.style.background  = "#5c696f"
    } 

     else if( hora >=12 && hora < 18) {
        img.setAttribute('src', 'assent/tarde1.png')  
        document.body.style.background = "#8195b2"
    }

    else {
        img.setAttribute('src', 'assent/noite1.png')
        document.body.style.background = "#0a1c2a"
    }
}

