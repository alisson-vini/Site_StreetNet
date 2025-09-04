let passou_titulo = 0

function mudar_cor_header(){

    let header = document.getElementById("container_header");

    if (window.scrollY >= 300){

        // transição de cor do header
        header.style.backgroundColor = "rgba(7, 11, 56, 1)";
        header.style.height = "70px"
        header.style.transition = "background-color 0.35s ease";

        // rodar a página ate o título
        if (!passou_titulo){
            passou_titulo = 1;
            window.scrollTo({
                top:635,
                behavior:"smooth"
            });
        }
        
    }

    else{
        header.style.background = "#070b3800";
        passou_titulo = 0;
    }
}

window.addEventListener("scroll", mudar_cor_header);