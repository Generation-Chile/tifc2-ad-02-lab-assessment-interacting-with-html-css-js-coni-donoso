document.getElementById('titulo1').innerHTML = 'Adiós';

document.getElementById('rojo').style.color = 'orange';

const headerClickable = document.createElement('h1');
headerClickable.textContent = 'Haz clic para cambiar el color a marrón';
headerClickable.id = 'titulo7'; 
headerClickable.addEventListener('click', function() {
    this.style.color = 'brown';
});
document.body.appendChild(headerClickable);