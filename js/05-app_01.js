titulo.innerHTML=' 05 - resize window'
let leccionT='';
// 



window.addEventListener('resize',()=>{
    console.log('estas cambiando tamaño');
    console.log('----  screen ---------');
    console.log(`innerHeigth : ${innerHeight}`);
    document.getElementById('leccion').innerHTML  = `<p>innerHeigth : ${innerHeight} </p><p>innerWidth : ${innerWidth} </p>`
    if (innerWidth <= '500' ) { document.getElementById('leccion').style.backgroundColor='yellow';} else {
        document.getElementById('leccion').style.backgroundColor='white';
    }

})


// cambiar el background de la la capa leccion cuando se alcancen los 500Px de anchura.


                   

