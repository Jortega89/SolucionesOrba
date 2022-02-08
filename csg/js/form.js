document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefonos = "";

  let de = document.querySelector("#de").value;
  let para = document.querySelector("#para").value;
  let selectcred = document.querySelector("#selectcred").value;
  let cliente = document.querySelector("#cedula").value;
  let cedula = document.querySelector("#cliente").value;
  let correo = document.querySelector("#correo").value;
  let telefono = document.querySelector("#telefono").value;
  let provincia = document.querySelector("#provincia").value;
  let canton = document.querySelector("#canton").value;
  let distrito = document.querySelector("#distrito").value;
  let direccion = document.querySelector("#direccion").value;
  let institucion = document.querySelector("#institucion").value;
  let producto = document.querySelector("#producto").value;
  let monto = document.querySelector("#monto").value;
  let resp = document.querySelector("#respuesta");

  /*resp.classList.remove("fail");
  resp.classList.remove("send");*/


  let url = `https://api.whatsapp.com/send?phone=${telefonos}&text=
    *_Copesangabriel_*%0A
    *Solicitud de credito:*%0A
    *De:* 
    ${de}%0A
    *Para:*%0A
    ${para}%0A
    *Producto solicitado:*%0A
    ${selectcred}%0A
    *Nombre completo:*%0A
    ${cliente}%0A
    *Nº Cédula:*%0A
    ${cedula}%0A
    *Correo electrónico*%0A
    ${correo}%0A
    *Teléfono:*%0A
    ${telefono}%0A
    *Provicia:*%0A
    ${provincia}%0A
    *Cantón:*%0A
    ${canton}%0A
    *Distrito:*%0A
    ${distrito}%0A
    *Dirección:*%0A
    ${direccion}%0A
    *Institución:*%0A
    ${institucion}%0A
    *Producto:*%0A
    ${producto}%0A
    *Monto:*%0A
    ${monto}%0A`;
  console.log(url)

  if (cliente === "" || cedula === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;

  window.open(url);
});
