titulo.innerHTML=' 03 - navigator'
let leccionT='';
// 
console.log('----  navigator ---------');
console.log(navigator);


for (let clave in navigator){
   leccionT += `<p> ${clave} : ${navigator[clave]} </p>`;

} 
document.getElementById('leccion').innerHTML = leccionT;
// Sitemas operativos 
const sistemas = ['windows','linux','mac','android','iphone'];
const so = navigator.userAgent;
console.log(`💻 userAgent :  ${so}`);


// mostrar una página distinta dependiento del sistema operativo del ordenador




// mostrar una pagina distinta dependiendo del idioma del navegador

const lenguaje = navigator.language ;
console.log(`🌐 navigator.language : ${navigator.language}`);
$saludo = 'Bonjour'; // por defecto
if (lenguaje === 'eu') {
    $saludo = 'Egun on';
}
if (lenguaje === 'pt') {
    $saludo = 'Bom dia';
}
if (lenguaje.includes('es') ) {
    $saludo = 'Buenos dias';
}

const lenguajeBasico= navigator.language.substring(0,2);

switch (lenguajeBasico) {
    case 'eu':
         $saludo = 'Egun on';
         break;
    case 'pt':
         $saludo = 'Bom dia';
    case 'es':
         $saludo = 'Buenos dias';
         break;
    case 'en':
         $saludo = 'Good morning';
         break;
     default:
         $saludo = 'Bonjour';
         break;
}



