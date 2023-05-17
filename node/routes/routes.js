import express from "express";
import {
  getAllUsers,
  createUsers,
  updateUsers,
  deleteUsers,
  crearCita
} from "../controllers/UsersControllers.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.post("/users/add", createUsers, crearCita);
router.put("/users/edit/:id",updateUsers);
router.delete("/users/delete/:id",deleteUsers);

// router.get('/citas/:fecha',obtenerCitasPorFecha);
// router.post('/addcitas', crearCita);

export default router;