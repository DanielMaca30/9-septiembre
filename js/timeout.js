const evaluar =()=>{
    const edad=promt ("cual es tu edad?");
    if (edad>21){
        alert("mayor edad");
    }else{
        alert("menor de edad");
    }
}
setInterval(evaluar,5000)