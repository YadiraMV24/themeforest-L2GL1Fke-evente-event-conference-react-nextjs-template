const Schedule = () => {

   const horarios = [
      {
         curso: "Canto",
         dias: "Lunes y miércoles",
         horario: "16:00 - 18:00"
      },
      {
         curso: "Guitarra",
         dias: "Martes y jueves",
         horario: "17:00 - 19:00"
      },
      {
         curso: "Piano",
         dias: "Lunes y viernes",
         horario: "15:00 - 17:00"
      },
      {
         curso: "Batería",
         dias: "Sábados",
         horario: "10:00 - 13:00"
      }
   ]

   return (
      <section
         id="horarios"
         style={{ padding: "100px 0" }}
      >

         <div className="container">

            <div className="text-center mb-50">

               <span
                  style={{
                     color: "#ff3eab",
                     fontWeight: "700"
                  }}
               >
                  HORARIOS
               </span>

               <h2
                  style={{
                     fontSize: "45px",
                     fontWeight: "800"
                  }}
               >
                  Elige el horario que mejor se adapte a ti
               </h2>

            </div>


            <div className="row justify-content-center">

               <div className="col-xl-9">

                  {horarios.map((item, index) => (

                     <div
                        key={index}
                        style={{
                           display: "flex",
                           justifyContent: "space-between",
                           alignItems: "center",
                           padding: "25px 30px",
                           marginBottom: "15px",
                           borderRadius: "15px",
                           background: "#f7f7fb"
                        }}
                     >

                        <strong>
                           {item.curso}
                        </strong>

                        <span>
                           {item.dias}
                        </span>

                        <span>
                           {item.horario}
                        </span>

                     </div>

                  ))}

               </div>

            </div>

         </div>

      </section>
   )
}

export default Schedule