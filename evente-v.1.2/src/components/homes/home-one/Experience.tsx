const Experience = () => {

   const areas = [
      {
         icon: "🎤",
         title: "Canto",
         text: "Técnica vocal, respiración, afinación e interpretación."
      },
      {
         icon: "🎸",
         title: "Guitarra",
         text: "Aprende acordes, ritmo, técnica e interpretación musical."
      },
      {
         icon: "🎹",
         title: "Piano",
         text: "Desarrolla coordinación, lectura musical y técnica."
      },
      {
         icon: "🥁",
         title: "Batería",
         text: "Aprende ritmo, coordinación y fundamentos de percusión."
      },
      {
         icon: "🎼",
         title: "Teoría Musical",
         text: "Comprende notas, escalas, armonía, ritmo y composición."
      },
      {
         icon: "🎧",
         title: "Producción Musical",
         text: "Conoce herramientas para crear y producir música."
      }
   ]

   return (
      <section
         id="cursos"
         style={{
            padding: "100px 0",
            background: "#f7f7fb"
         }}
      >

         <div className="container">

            <div className="text-center mb-60">

               <span
                  style={{
                     color: "#ff3eab",
                     fontWeight: "700"
                  }}
               >
                  FORMACIÓN MUSICAL
               </span>

               <h2
                  style={{
                     fontSize: "45px",
                     fontWeight: "800",
                     marginTop: "10px"
                  }}
               >
                  Encuentra tu instrumento y desarrolla tu talento
               </h2>

            </div>


            <div className="row">

               {areas.map((area, index) => (

                  <div
                     key={index}
                     className="col-xl-4 col-lg-4 col-md-6 mb-30"
                  >

                     <div
                        style={{
                           background: "white",
                           padding: "35px",
                           borderRadius: "20px",
                           height: "100%",
                           boxShadow: "0 10px 30px rgba(0,0,0,.06)"
                        }}
                     >

                        <div style={{ fontSize: "45px" }}>
                           {area.icon}
                        </div>

                        <h3 style={{ marginTop: "20px" }}>
                           {area.title}
                        </h3>

                        <p>
                           {area.text}
                        </p>

                     </div>

                  </div>

               ))}

            </div>

         </div>

      </section>
   )
}

export default Experience