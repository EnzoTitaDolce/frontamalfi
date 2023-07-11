function obtenerFecha() {
    var fechaInput = document.getElementById("fechaInput").value;
    var fechaFormateada = obtenerFechaFormateada(fechaInput);
    console.log("Fecha seleccionada:", fechaFormateada);
  }
  
  function obtenerFechaFormateada(fecha) {
    var date = new Date(fecha);
    var year = date.getFullYear();
    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);
    return year + "-" + month + "-" + day;
  }
  