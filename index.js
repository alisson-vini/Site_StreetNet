let passou_titulo = 0;

function mudar_cor_header(){

    let header = document.getElementById("container_header");

    if (window.scrollY >= 195){

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

function trocar_tipo_menu() {
    let largura = window.innerWidth;
    let menu = document.getElementById("lista_links");
    let botao = document.getElementById("icone_menu_hamburger");
    let botao_assinar = document.getElementById("link_assinar");

    if (largura <= 1440){
        botao.style.display = "block";
        menu.classList.remove("menu_link");
        menu.classList.add("menu_link_hamburguer");

        botao_assinar.classList.add("link_assinar_hamburguer");
        botao_assinar.classList.remove("link_assinar");
    }
    else{
        menu.classList.add("menu_link");
        menu.classList.remove("menu_link_hamburguer");
        botao.style.display = "none";

        botao_assinar.classList.remove("link_assinar_hamburguer");
        botao_assinar.classList.add("link_assinar");
    }
}

function abrir_fechar_menu_hamburger(){
    let menu_normal = document.getElementById("lista_links");
    let icon_menu_hamburguer = document.getElementById("icone_menu_hamburger_simbolo");
    menu_normal.classList.toggle("aparecer_menu");

    if (menu_normal.classList.contains("aparecer_menu")){
        icon_menu_hamburguer.innerText = "close"
    }
    else{
        icon_menu_hamburguer.innerText = "menu"
    }

};

window.addEventListener("resize", trocar_tipo_menu);
window.addEventListener("load", trocar_tipo_menu);
window.addEventListener("scroll", mudar_cor_header);