titulo.innerHTML=' 02 - location'
// 

leccion.innerHTML = `<p><strong>location.href : <strong>  ${location.href} </p>`;
leccion.innerHTML += `<p>Como enlace a otra página</p>'
<img src="../assets/img/areaform.png" id="logoarea" width="100%">`
/* leccion.innerHTML += `<p>Como enlace a otra página</p>
<img src="../assets/img/areaform.png" id="logoarea" class="pointer" width="100%">`; */
// definimos la class pointer,para poner un cursos en los elementos HTML  alos que queramos poner un cursos predeterminado.


const logo = document.getElementById('logoarea');

logo.addEventListener('click',()=>{location.href="http://areafor.com";})


                   

