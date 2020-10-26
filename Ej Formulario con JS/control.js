document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('usuario').value;
    if(usuario.length == 0) {
      alert('Campo de usuario esta vacio');
      return;
    }else if(usuario.length == 'usuario'){
        alert('Falta el arroba en el usuario');

    }

    var clave = document.getElementById('clave').value;
    if (clave.length == 0) {
      alert('El campo de clave esta vacio');
      return;
    }
    this.submit();
  }