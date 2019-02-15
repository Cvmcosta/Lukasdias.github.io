// hello
function iconeMenu(tipo){
    if (tipo == 1){
        _left = "952px";
        _top = "-185px"
        icone = "src/home-icon.png";
    }
    if (tipo == 2){
        _left = "1090px";
        _top = "-185px";
        icone = "src/search-icon.png";
    }
    if (tipo == 3){
        _left = "1257px";
        _top = "-185px";
        icone = "src/project-icon.png";
    }
    document.getElementById("icone-menu").style.top = _top
    document.getElementById("icone-menu").style.left = _left;
    document.getElementById("icone-menu").src = icone;  
}
