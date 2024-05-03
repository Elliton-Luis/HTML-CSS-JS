function controle(){
        var  btn = document.getElementById ("btn")
        var b1 = document.getElementById("bola-01");
        var b2 = document.getElementById("bola-02");
        var b3 = document.getElementById("bola-03");
        var b4 = document.getElementById("bola-04");
    
        if(btn.innerText == "Pausar");
            btn.innerText = "Play";
            container.style.backgroundColor = "#000";
            container.style.backgroundColor = "#000";
            b1.style.backgroundColor = "#734";
            b2.style.backgroundColor = "#987";
            b3.style.backgroundColor = "#587";
            b4.style.backgroundColor = "#678";
            b1.style.animationPlayState = "paused";
            b2.style.animationPlayState = "paused";
            b3.style.animationPlayState = "paused";
            b4.style.animationPlayState = "paused";
        }
        else
            btn.innerHTML = "Pausar";
            container.style.backgroundColor = "#FFF";
            b1.style.backgroundColor = "#bd4f4f";
            b2.style.backgroundColor = "#dfdf3b";
            b3.style.backgroundColor = "#2f8a2f";
            b4.style.backgroundColor = "#3b3be6";
            b1.style.animationPlayState = "running";
            b2.style.animationPlayState = "running";
            b3.style.animationPlayState = "running";
            b4.style.animationPlayState = "running";
        
    