import  express  from "express";
import cors from "cors";
import db from "./database/db.js"
import userRoutes from "./routes/routes.js";
import {PORT} from "./config.js";
import log4js from 'log4js'

log4js.configure({
    appenders: {
      console: { type: "console" },
      file: { type: "file", filename: "logs/app.log" },
      error: {
        type: "file",
        filename: "logs/error.log",
        layout: {
          type: "pattern",
          pattern: "[%d] [%p] [%c] - %m %n %f:%l %x{user} %x{trace}",
        },
      },
    },
    categories: {
      default: { appenders: ["console", "file"], level: "info" },
      error: { appenders: ["error"], level: "error" },
    },
  });
  
  const logger = log4js.getLogger("error");

const app = express();

app.use(cors());
app.use(express.json());


app.use("/users", userRoutes);


try {
    await db.authenticate();
    console.log("La conexion con base de datos se dio de manera exitosa!")
} catch (error) {
    logger.error(`El error de conexion es: ${error}`)
}

app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})