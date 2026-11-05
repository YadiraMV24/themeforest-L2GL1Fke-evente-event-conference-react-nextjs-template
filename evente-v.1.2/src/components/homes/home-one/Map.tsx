const Map = () => {

   return (
      <section
         id="contacto"
         style={{
            padding: "100px 0",
            background: "#f7f7fb"
         }}
      >

         <div className="container">

            <div className="row align-items-center">

               {/* =====================================================
                  INFORMACIÓN DE CONTACTO
               ===================================================== */}

               <div className="col-lg-5 mb-30">

                  <span
                     style={{
                        color: "#ff43b5",
                        fontWeight: "700"
                     }}
                  >
                     ENCUÉNTRANOS
                  </span>


                  <h2
                     style={{
                        fontSize: "45px",
                        fontWeight: "800",
                        marginTop: "10px",
                        marginBottom: "20px"
                     }}
                  >
                     Academia Contemporánea de Música
                  </h2>


                  <p
                     style={{
                        fontSize: "17px",
                        lineHeight: "1.8",
                        marginBottom: "25px"
                     }}
                  >
                     Visítanos y conoce nuestros espacios de formación musical.
                     Aquí podrás obtener información sobre cursos, horarios,
                     inscripciones y programas disponibles.
                  </p>


                  <a
                     href="https://www.google.com/maps/place/Academia+Contemporanea+de+M%C3%BAsica/@19.3477834,-99.1292129,15z/data=!4m6!3m5!1s0x85d1ffb23dcd2c35:0xe7f3b275c0a1bb2!8m2!3d19.3565556!4d-99.1088373!16s%2Fg%2F11jjjgljsh?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D"
                     target="_blank"
                     rel="noopener noreferrer"
                     style={{
                        display: "inline-block",
                        background: "#291078",
                        color: "#ffffff",
                        padding: "15px 28px",
                        borderRadius: "30px",
                        textDecoration: "none",
                        fontWeight: "800",
                        marginTop: "10px"
                     }}
                  >
                     📍 VER EN GOOGLE MAPS
                  </a>

               </div>



               {/* =====================================================
                  MAPA
               ===================================================== */}

               <div className="col-lg-7">

                  <div
                     style={{
                        width: "100%",
                        height: "450px",
                        borderRadius: "25px",
                        overflow: "hidden",
                        boxShadow: "0 15px 40px rgba(0,0,0,0.10)"
                     }}
                  >

                     <iframe
                        src="https://www.google.com/maps?q=19.3565556,-99.1088373&z=16&output=embed"
                        width="100%"
                        height="100%"
                        style={{
                           border: "0"
                        }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Academia Contemporánea de Música"
                     />

                  </div>

               </div>

            </div>

         </div>

      </section>
   )
}

export default Map