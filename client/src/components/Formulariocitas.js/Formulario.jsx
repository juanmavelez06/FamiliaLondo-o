import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./index.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addUsersRequest, getUsersRequest } from "../../api/api";
import Swal from "sweetalert2";

const FormularioCita = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState(null);
  const [hora, setHora] = useState(null);
  const [mensajeError, setMensajeError] = useState("");
  const localizer = momentLocalizer(moment);
  const [citas, setCitas] = useState([]);

  const CustomAgendaEvent = ({ event, time }) => (
    <div>
      <strong>{event.title}</strong>
    </div>
  );

  const components = {
    agenda: {
      event: CustomAgendaEvent,
    },
  };

  useEffect(() => {
    obtenerCitasReservadas();
  }, []);

  let obtenerCitasReservadas = async () => {
    try {
      let response = await getUsersRequest();
      let citasReservadas = response.data;
      setCitas(citasReservadas);
    } catch (error) {
      console.error("Ocurrio un error al obtener las citas:", error);
    }
  };

  const eventos = citas.map((cita) => ({
    title: `Reservado para las: ${moment(cita.hora, "HH:mm:ss").format(
      "h:mm A"
    )}`,
    start: moment(cita.fecha).toDate(),
    end: moment(cita.fecha).toDate(),
  })); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !surname || !telephone || !fecha || !hora || !email) {
      setMensajeError("Todos los campos son obligatorios");
      return;
    }
  
    const fechaActual = moment();
    const fechaSeleccionada = moment(fecha);
  
    if (fechaSeleccionada.isBefore(fechaActual, "day")) {
      setMensajeError("No se puede hacer una reserva en fechas pasadas");
      return;
    }

    try {
      const nuevaCita = {
        name,
        surname,
        telephone,
        email,
         fecha: fechaSeleccionada.toDate(),
      hora: moment(hora).format("HH:mm:ss"),
      };
      await addUsersRequest(nuevaCita);
      await obtenerCitasReservadas();
      Swal.fire("¡Excelente!","¡Has reservado con exito!", "success")

      setName("");
      setSurname("");
      setTelephone("");
      setEmail("");
      setFecha(null);
      setHora(null);
      setMensajeError("");
    } catch (error) {
      console.error("Ocurrio un error para agendar la cita:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ocurrio un error al intentar reservar!",
      });
    }
  };
  const nombreCompleto =
    name && surname ? `${name} ${surname}` : "Familia Londoño";
  const Telefono = telephone ? telephone : "300 490 ****";
  const Fechacita = fecha ? fecha.toDateString() : "...";
  const Horacita = hora ? hora.toLocaleTimeString() : "...";
  const Email = email ? email : "correo@prueba.com";

  return (
    <main className="container">
      <div className="box_form">
        <nav className="tab">
          Bienvenid@ {nombreCompleto}!<br />
          <br />
          Telefono {Telefono}
          <br />
          <br />
          Email {Email} <br />
          Fecha de la cita <br /> {Fechacita}
          <br />
          <br />
          Hora de la cita <br /> {Horacita}
          <br />
        </nav>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre</label>
            <input
            placeholder="Familia"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Apellido</label>
            <input
            placeholder="Londoño"
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <div>
            <label>Correo electronico</label>
            <input
             placeholder="londoño@email.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Teléfono</label>
            <input
             placeholder="304 490 ****"
              type="tel"
              value={telephone}
              pattern="[0-9]{10}"
              maxLength={10}
              onChange={(e) => setTelephone(e.target.value)}
            />
          </div>
          <div>
            <label>Fecha</label>
            <DatePicker selected={fecha} onChange={(date) => setFecha(date)} />
          </div>
          <div>
            <label>Hora</label>
            <DatePicker
              selected={hora}
              onChange={(time) => setHora(time)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Hora"
              dateFormat="h:mm aa"
            />
          </div>
          {mensajeError && <p>{mensajeError}</p>}
          <button type="submit" className="submit">
            Reservar Cita
          </button>
        </form>
      </div>

      <div className="calendar">
        <Calendar
          localizer={localizer}
          events={eventos}
          startAccessor="start"
          endAccessor="end"
          views={["month", "agenda", "work_week", "day"]}
          components={components}
          defaultView="month"
          popup={false}
          step={60}
          onSelectEvent={(event) => Swal.fire(event.title)}
        />
      </div>
    </main>
  );
};

export default FormularioCita;
