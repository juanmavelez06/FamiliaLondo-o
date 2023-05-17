import "./index.css";
import imageA from "../AppBiografia/img/Flondoño.jpg";
import imageB from "../AppBiografia/img/Flondoño2.jpg";
import imageC from "../AppBiografia/img/Flondoño3.jpg";
import imageD from "../AppBiografia/img/Flondoño4.jpg";
import imageE from "../AppBiografia/img/Csilleta.jpg";
import imageF from "../AppBiografia/img/Londoños.jpg";

const Biografia = () => {
  return (
    <div className="container_box">
      <h1>Biografia y Proceso</h1>
      <h3>Descubre mi trabajo</h3>
      <br />
      <p>
        El corregimiento de Santa Elena esta ubicado a 17 kilómetros del centro
        de la Ciudad de Medellín y es reconocido por ser la cuna de la Cultura
        Silletera que fue declarara Patrimonio Cultura E Inmaterial de la Nación
        en el año 2003 e inscrita en la Lista Representativa de Patrimonio
        cultural e inmaterial de la Nación según la resolución 1843 de 2015 del
        Ministerio de Cultura. Además de esto es dueña de importantes atractivos
        que contienen gran cantidad de recursos naturales y culturales lo cual
        lo hace un sitio ideal para desarrollar actividades de tipo turismo
        rural comunitario en la etapa de reactivación segura de la economía. De
        lo anterior es que surge entonces la necesidad de reestructurar la
        propuesta de La Casa del Silletero Familia Londoño ubicada en la Vereda
        Barro Blanco del Corregimiento de Santa Elena, la cual responderá a una
        demanda ya existente y en crecimiento y a su vez ayudará a la solución
        de un problema presentado al interior de la vereda de deficiencia en su
        planta turística rural. Por medio de la realización de este proyecto se
        podrá adaptar un espacio propicio y sostenible que reunirá ciertas
        características, las cuales facilitaran la práctica del turismo cultural
        y el agroturismo de manera Biosegura y divertida tanto para habitantes
        como turistas y visitantes. El desarrollo de este tipo de espacios de
        esparcimiento impactará positivamente al territorio cultural (Santa
        Elena) a nivel turístico, generará una derrama económica importante,
        protegerá el medio ambiental y velará por el desarrollo sociocultural,
        debido a que se busca perder la estacionalidad de la Cultura Silletera
        reservada para el mes de agosto y ampliará el sentido de pertenencia de
        los habitantes hacia la manifestación cultural.
      </p>
      <section className="gallery">
        
        <figure className="gallery__picture">
          <img src={imageA} alt="" className="gallery__img" />
        </figure>

        <figure className="gallery__picture">
          <img src={imageB} alt="" className="gallery__img" />
        </figure>

        <figure className="gallery__picture">
          <img src={imageC} alt="" className="gallery__img" />
        </figure>

        <figure className="gallery__picture">
          <img src={imageD} alt="" className="gallery__img" />
        </figure>

        <figure className="gallery__picture">
          <img src={imageE} alt="" className="gallery__img" />
        </figure>

        <figure className="gallery__picture">
          <img src={imageF} alt="" className="gallery__img" />
        </figure>

      </section>
    </div>
  );
};

export default Biografia;
