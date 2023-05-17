import UsersModel from "../models/UsersModel.js";

//Mostrar todos los registros
export const getAllUsers = async (req, res) => {
  try {
    const user = await UsersModel.findAll(); //findAll me trae todo
    res.json(user); //Respuesta en Json y como devolucion recibiremos los datos
  } catch (error) {
    console.error("Error al obtener los registros:", error);
    res.status(500).json({ error: "Error al obtener las reservas" });
  }
};

//Crear un Registro
export const createUsers = async (req, res) => {
  try {
    await UsersModel.create(req.body); //Capturamos todo el cuerpo de datos.
    res.json({
      message: "¡Registro creado correctamente!", //Formato clave - valor
    });
  } catch (error) {
    console.log("No se logro crear el registro", error);
    res.status(500).json({ error: "Error al crear el regsitro" });
  }
};

//Actualizar un registro
export const updateUsers = async (req, res) => {
  try {
    await UsersModel.update(req.body, {
      where: { id: req.params.id },
      //Al actualizar debemos especificar que rehistro actualizar por lo que usamos la clausula where
    });
    res.json({
      message: "¡Registro actualizado correctamente!",
    });
  } catch (error) {
    console.log("No se logro actualizar el registro", error);
    res.status(500).json({ error: "Error al actualizar el registro" });
  }
};

//Eliminar un registro
export const deleteUsers = async (req, res) => {
  try {
    await UsersModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: "¡Registro eliminado con exito!",
    });
  } catch (error) {
    console.log("No se logro eliminar el registro");
    res.status(500).json({ error: "Error al eliminar el registro" });
  }
};

// export const obtenerCitasPorFecha = async (req, res) => {
//   try {
//     const {fecha} = req.params;
//     const citas = await UsersModel.findAll({ where: { fecha } });
//     res.json(citas);
//   } catch (error) {
//     console.error('Error al obtener las citas:', error);
//     res.status(500).json({ mensaje: 'Error al obtener las citas' });
//   }
// };

// Crear una nueva cita
export const crearCita = async (req, res) => {
  try {
    const { fecha, hora } = req.body;
    const citaExistente = await UsersModel.findOne({ where: { fecha, hora } });

    if (citaExistente) {
      return res.status(400).json({ mensaje: 'La hora seleccionada ya está ocupada' });
    }

    const nuevaCita = await UsersModel.create({ fecha, hora, estado: 'Disponible' });
    res.status(201).json(nuevaCita);
  } catch (error) {
    console.error('Error al crear la cita:', error);
    res.status(500).json({ mensaje: 'Error al crear la cita' });
  }
};
