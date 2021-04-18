import React, { Fragment, useContext, useState, useEffect } from "react";
import companies from "../jsons/track-companies.json";
import { useRouter } from "next/router";


const Modal1 = () => {
  // States:
  const [phaseOne, setphaseOne] = useState(false);
  const [phaseTwo, setphaseTwo] = useState(false);
  const [phaseThree, setphaseThree] = useState(false);
  const [modal, setModal] = useState(true);
  const [imgPorDefecto, setImgPorDefecto] = useState("");
  const [nombreCompany, setNombreCompany] = useState("");
  // Get the router object. Routing para obtener el code actual.
  const router = useRouter();
  const {
    query: { code },
  } = router;
  // History
  let searchValue = code;
  useEffect(() => {
    const getCompanyCode = () => {
      /*
      // Debugging
      console.log("companies ", companies);
      */
      if (searchValue) {
        for (let i = 0; i < companies.length; i++) {
          // Si el code company existe entonces
          if (companies[i].courier_code === searchValue) {
            setNombreCompany(companies[i].courier_name);
            /*
            // Debugging
            console.log("nombreCompany ", nombreCompany);
            */
            setImgPorDefecto(companies[i].courier_logo);
            setphaseOne(false);
            setphaseTwo(true);
            setphaseThree(false);
          }
        }
      }else{
        setphaseOne(true);
      }
    };
    getCompanyCode();
  }, [searchValue]);
  // Permite quitar el modal
  const toggleModal = () => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  };
  const togglePhaseOne = () => {
    // console.log("Diste click. Dentro de togglePhaseOne");
    if (phaseOne) {
      setphaseOne(false);
    } else {
      setphaseOne(true);
    }
  };
  // Permite mostrar el boton de llamar
  const togglePhaseThree = () => {
    // console.log("Diste click. Dentro de togglePhaseThree");
    if (phaseThree) {
      setphaseThree(false);
      setphaseTwo(false);
      setphaseOne(true);
    } else {
      setphaseThree(true);
      setphaseTwo(false);
      setphaseOne(false);
    }
  };
  
  return (
    <Fragment>
      <div>
        <section className="cont-modal-main fondo-blanco animate__animated animate__bounceInRight">
          <div className="tajeta">
            <div className="container-elements-tarjeta">
              <div className="flex-elemts">
              {/* Start Boton de echar para atras. */}
                <div className="cont-btn-salir">
                  {!phaseThree ? <div></div> : null}
                  {phaseThree ? (
                    <button
                      type="button"
                      className="btn btn-default animate__animated animate__fadeIn"
                      aria-label="Left Align"
                      onClick={togglePhaseThree}
                    >
                      <span
                        className="glyphicon glyphicon-arrow-left"
                        aria-hidden="true"
                      ></span>
                    </button>
                  ) : null}
                </div>
                {/* Fin del Boton de echar para atras. */}
                {/* Start Fase 1. */}
                {phaseOne ? (
                  <h3 className="title-vale1 animate__animated animate__fadeIn">
                    ¿Qué necesita?
                  </h3>
                ) : null}
                {phaseOne ? (
                  <a
                    className="btn-vale-dashboard1 animate__animated animate__fadeIn"
                    style={{ width: "200px" }}
                    href="https://buscapack.es/"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Localizar un envío
                  </a>
                ) : null}
                {phaseOne ? (
                  <button
                    className="btn-vale-dashboard1 animate__animated animate__fadeIn"
                    style={{ width: "200px" }}
                    onClick={togglePhaseThree}
                  >
                    Hablar con un agente
                  </button>
                ) : null}
                {phaseOne ? (
                  <button
                    className="btn-vale-dashboard1 animate__animated animate__fadeIn"
                    style={{ width: "200px" }}
                    onClick={togglePhaseThree}
                  >
                    Incidencia
                  </button>
                ) : null}
                {phaseOne ? (
                  <button
                    className="btn-vale-dashboard1 animate__animated animate__fadeIn"
                    style={{ width: "200px" }}
                    onClick={togglePhaseThree}
                  >
                    Otras gestiones
                  </button>
                ) : null}
                {/* Fin Fase 1. */}
                {/* Start Fase 2. */}
                {phaseTwo && imgPorDefecto.length > 0 ? (
                  <h3 className="title-vale1 animate__animated animate__fadeIn">
                    ¿Es usted cliente de {nombreCompany}?
                  </h3>
                ) : null}
                {phaseTwo && imgPorDefecto.length > 0 ? (
                  <img
                    src={imgPorDefecto}
                    className="animate__animated animate__fadeIn"
                    style={{ marginBottom: "10px", maxWidth: "210px" }}
                    alt="img-company-from-db"
                  />
                ) : null}
                {phaseTwo && imgPorDefecto.length > 0 ? (
                  <button
                    className="btn-vale-dashboard1 animate__animated animate__fadeIn"
                    style={{ width: "200px" }}
                    onClick={togglePhaseThree}
                  >
                    Sí
                  </button>
                ) : null}
                {phaseTwo && imgPorDefecto.length > 0 ? (
                  <button
                    className="btn-vale-dashboard1 animate__animated animate__fadeIn"
                    style={{ width: "200px" }}
                    onClick={togglePhaseThree}
                  >
                    No
                  </button>
                ) : null}
                
                {/* Fin Fase 2. */}
                {/* Start Fase 3. */}
                {/* Start Img de la compania. */}
                {phaseThree && imgPorDefecto.length > 0 ? (
                  <img
                    src={imgPorDefecto}
                    className="animate__animated animate__fadeIn"
                    style={{ marginBottom: "10px", maxWidth: "210px" }}
                    alt="img-company-from-db"
                  />
                ) : null}
                {/* Fin Img de la compania. */}
                {/* Start Img lo de buscapack naranja (Cuando no hay img de la compania). */}
                {phaseThree && imgPorDefecto.length === 0 ? (
                  <img
                    src="/static/img/buscapck-logo-naranja.svg"
                    className="animate__animated animate__fadeIn"
                    style={{ marginBottom: "10px" }}
                    alt="buscapck-logo-blanco"
                  />
                ) : null}
                {/* Fin Img lo de buscapck naranja (Cuando no hay img de la compania). */}
                {phaseThree ? (
                  <a
                    href="tel:11824"
                    className="btn-vale-dashboard1 animate__animated animate__fadeIn"
                    role="button"
                    style={{ width: "200px", textDecoration: "none" }}
                  >
                    Llamar ahora
                  </a>
                ) : null}

                {phaseThree ? (
                  <span className="text-descriptivo animate__animated animate__fadeIn">
                    Publicidad de servicio de teléfonos de información de
                    abonados,llamando le facilitamos el teléfono de la compañía
                    y/o le ponemos en contacto con ella, el precio máximo por
                    minuto tres euros y dos céntimos, impuestos incluidos.
                    Duración máxima de la llamada diez minutos. Servicio
                    prestado por 11824 servicio informacion telefonica, S.L.
                  </span>
                ) : null}
                {/* Fin Fase 3. */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Modal1;
