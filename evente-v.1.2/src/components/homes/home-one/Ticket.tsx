const Ticket = () => {

   return (
      <section
         id="inscripciones"
         style={{
            padding: "100px 0"
         }}
      >

         <div className="container">

            <div
               style={{
                  padding: "60px",
                  borderRadius: "30px",
                  background: "linear-gradient(135deg,#291078,#5b28d9)",
                  color: "white",
                  textAlign: "center"
               }}
            >

               <span
                  style={{
                     color: "#ff43b5",
                     fontWeight: "800"
                  }}
               >
                  INSCRIPCIONES
               </span>

               <h2
                  style={{
                     color: "white",
                     fontSize: "45px",
                     margin: "15px 0"
                  }}
               >
                  Comienza tu formación musical
               </h2>

               <p
                  style={{
                     fontSize: "18px",
                     color: "#eee",
                     maxWidth: "700px",
                     margin: "0 auto 30px"
                  }}
               >
                  Solicita información sobre nuestros cursos,
                  horarios y próximas inscripciones.
               </p>


               <a
                  href="#contacto"
                  style={{
                     display: "inline-block",
                     background: "#ff43b5",
                     color: "white",
                     padding: "16px 30px",
                     borderRadius: "30px",
                     textDecoration: "none",
                     fontWeight: "800"
                  }}
               >
                  SOLICITAR INFORMACIÓN
               </a>

            </div>

         </div>

      </section>
   )
}

export default Ticket