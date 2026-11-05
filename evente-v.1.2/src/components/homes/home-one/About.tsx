const About = () => {
   return (
      <section id="nosotros" className="pt-120 pb-120">
         <div className="container">

            <div className="row align-items-center">

               <div className="col-xl-6 col-lg-6 mb-40">

                  <span
                     style={{
                        color: "#ff3eab",
                        fontWeight: "700",
                        textTransform: "uppercase"
                     }}
                  >
                     CONOCE FORMACIÓN ACM
                  </span>

                  <h2
                     style={{
                        fontSize: "48px",
                        fontWeight: "800",
                        marginTop: "15px",
                        marginBottom: "25px"
                     }}
                  >
                     Un espacio para descubrir y desarrollar tu talento
                  </h2>

                  <p
                     style={{
                        fontSize: "18px",
                        lineHeight: "1.8"
                     }}
                  >
                     Formación ACM es un espacio dedicado al aprendizaje,
                     desarrollo artístico y capacitación de personas
                     interesadas en fortalecer sus habilidades.
                  </p>

                  <p
                     style={{
                        fontSize: "18px",
                        lineHeight: "1.8"
                     }}
                  >
                     Nuestra Academia de Música ofrece programas para
                     estudiantes de diferentes edades y niveles, creando
                     experiencias de aprendizaje prácticas, creativas
                     y accesibles.
                  </p>

               </div>


               <div className="col-xl-6 col-lg-6">

                  <div
                     style={{
                        background: "#291078",
                        padding: "50px",
                        borderRadius: "25px",
                        color: "white"
                     }}
                  >

                     <h3 style={{ color: "white" }}>
                        Nuestra misión
                     </h3>

                     <p style={{ lineHeight: "1.8" }}>
                        Impulsar el talento de cada estudiante mediante
                        una formación de calidad que fomente la creatividad,
                        disciplina, expresión y crecimiento personal.
                     </p>

                  </div>

               </div>

            </div>

         </div>
      </section>
   )
}

export default About