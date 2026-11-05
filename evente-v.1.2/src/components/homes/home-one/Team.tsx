const Team = () => {

   const maestros = [
      {
         name: "Profesor de Canto",
         area: "Técnica Vocal",
         icon: "🎤"
      },
      {
         name: "Profesor de Guitarra",
         area: "Guitarra y armonía",
         icon: "🎸"
      },
      {
         name: "Profesor de Piano",
         area: "Piano y teoría musical",
         icon: "🎹"
      }
   ]

   return (
      <section
         id="maestros"
         style={{
            padding: "100px 0",
            background: "#281075"
         }}
      >

         <div className="container">

            <div className="text-center mb-50">

               <span
                  style={{
                     color: "#ff43b5",
                     fontWeight: "700"
                  }}
               >
                  NUESTROS MAESTROS
               </span>

               <h2
                  style={{
                     color: "white",
                     fontSize: "45px"
                  }}
               >
                  Aprende acompañado de profesionales
               </h2>

            </div>


            <div className="row">

               {maestros.map((maestro, index) => (

                  <div
                     key={index}
                     className="col-lg-4 col-md-6 mb-30"
                  >

                     <div
                        style={{
                           padding: "40px",
                           textAlign: "center",
                           borderRadius: "20px",
                           background: "rgba(255,255,255,.1)",
                           color: "white"
                        }}
                     >

                        <div
                           style={{
                              fontSize: "65px",
                              marginBottom: "20px"
                           }}
                        >
                           {maestro.icon}
                        </div>

                        <h3 style={{ color: "white" }}>
                           {maestro.name}
                        </h3>

                        <p style={{ color: "#ddd" }}>
                           {maestro.area}
                        </p>

                     </div>

                  </div>

               ))}

            </div>

         </div>

      </section>
   )
}

export default Team