const Brand = () => {

   return (
      <section
         id="academias"
         style={{
            padding: "90px 0",
            background: "#ffffff"
         }}
      >

         <div className="container">

            <div className="text-center mb-50">

               <span
                  style={{
                     color: "#ff3eab",
                     fontWeight: "700"
                  }}
               >
                  FORMACIÓN ACM
               </span>

               <h2
                  style={{
                     fontSize: "45px",
                     fontWeight: "800"
                  }}
               >
                  Nuestras academias
               </h2>

               <p>
                  Un mismo espacio de formación con diferentes áreas
                  para descubrir y desarrollar tus habilidades.
               </p>

            </div>


            <div className="row justify-content-center">

               <div className="col-lg-4 mb-30">

                  <div
                     style={{
                        padding: "45px",
                        background: "#291078",
                        color: "white",
                        textAlign: "center",
                        borderRadius: "20px"
                     }}
                  >

                     <div style={{ fontSize: "60px" }}>
                        🎵
                     </div>

                     <h3 style={{ color: "white" }}>
                        Academia de Música
                     </h3>

                     <p>
                        Canto, instrumentos, teoría musical y más.
                     </p>

                  </div>

               </div>


               <div className="col-lg-4 mb-30">

                  <div
                     style={{
                        padding: "45px",
                        background: "#ff43b5",
                        color: "white",
                        textAlign: "center",
                        borderRadius: "20px"
                     }}
                  >

                     <div style={{ fontSize: "60px" }}>
                        💄
                     </div>

                     <h3 style={{ color: "white" }}>
                        Academia de Belleza
                     </h3>

                     <p>
                        Próximamente nuevos programas de formación.
                     </p>

                  </div>

               </div>


               <div className="col-lg-4 mb-30">

                  <div
                     style={{
                        padding: "45px",
                        background: "#f2f2f7",
                        textAlign: "center",
                        borderRadius: "20px"
                     }}
                  >

                     <div style={{ fontSize: "60px" }}>
                        +
                     </div>

                     <h3>
                        Nuevas Academias
                     </h3>

                     <p>
                        Próximamente más áreas de capacitación.
                     </p>

                  </div>

               </div>

            </div>

         </div>

      </section>
   )
}

export default Brand