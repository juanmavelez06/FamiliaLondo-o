import { useState } from "react";
import "./index.css";
import Swal from "sweetalert2";

const Contact = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensajeError, setMensajeError] = useState("");



  return (
    <section id="Contacto">
      <div className="container_contact">
        <form
          className="box_contact"
          action="https://formsubmit.co/7a1f9b7694291e13974d03eac1b33253"
          method="POST"
        >
            <h1>Contacto</h1>
          <label> Nombre </label>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="Nombre"
          ></input>

          <label> Email </label>
          <input
            type="email"
            placeholder="Ingresa tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="Correo_Electronico"
          ></input>

          <label> Asunto </label>
          <input
            type="text"
            placeholder="Ingresa el asunto de tu mensaje"
            value={asunto}
            onChange={(e) => setAsunto(e.target.value)}
            name="Asunto"
          ></input>

          <textarea 
          className="Mensaje"
            type="text"
            placeholder="Escribe tu mensaje aqui..."
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            name="Mensaje"
            cols={108}
            rows={7}
          ></textarea>
          <input
            type="hidden"
            name="_next"
            value={"http://localhost:5173/#Contacto"}
          />
          
          <input type="hidden" name="_captcha" value={false} />
          <input type="hidden" name="_next" value={"http://localhost:5173/#Contacto"} />

          <button type="submit" className="submit">
            Enviar mensaje
          </button>
          
        </form>
      </div>
    </section>
  );
};

export default Contact;
