const Blog = () => {

   const noticias = [
      {
         title: "Inscripciones abiertas",
         text: "Conoce los próximos cursos disponibles en nuestra Academia de Música."
         
      },
      {
         title: "Descubre tu talento musical",
         text: "Encuentra el instrumento y programa que mejor se adapte a tus intereses."
         
      },
      {
         title: "Próximamente Academia de Belleza",
         text: "Formación ACM continúa creciendo con nuevas áreas de capacitación."
         
      }
   ]

   return (
      <section
         id="novedades"
         style={{
            padding: "100px 0",
            background: "#f7f7fb"
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
                  NOVEDADES
               </span>

               <h2 style={{ fontSize: "45px" }}>
                  Lo nuevo en Formación ACM
               </h2>

            </div>


            <div className="row">

               {noticias.map((noticia, index) => (

                  <div
                     key={index}
                     className="col-lg-4 mb-30"
                  >

                     <div
                        style={{
                           background: "white",
                           padding: "35px",
                           borderRadius: "20px",
                           height: "100%"
                        }}
                     >

                        <h3>
                           {noticia.title}
                        </h3>

                        <p>
                           {noticia.text}
                        </p>

                     </div>

                  </div>

               ))}

            </div>

         </div>

      </section>
   )
}

export default Blog