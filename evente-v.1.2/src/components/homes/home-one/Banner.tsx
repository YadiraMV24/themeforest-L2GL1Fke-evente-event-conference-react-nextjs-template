
"use client"

import BannerIconOne from "./BannerIconOne"
import Link from "next/link"
import Image from "next/image"

import shape from "@/assets/img/hero/shape.png"
import banner_thumb from "@/assets/img/hero/thumb.png"
import bg_img from "@/assets/img/hero/bg.jpg"

const Banner = () => {

   return (
      <div
         className="td-hero-area td-hero-spacing bg-position p-relative fix"
         style={{
            backgroundImage: `url(${bg_img.src})`
         }}
      >

         <div
            className="td-hero-text-shape wow td-animetion-left"
            data-wow-duration="1.5s"
         >
            <BannerIconOne />
         </div>

         <div className="container-fluid container-1680">

            <div className="row align-items-center">

               <div className="col-xl-6 col-lg-8">

                  <div className="td-hero-content p-relative mb-30 pl-165">

                     {/* SUBTÍTULO */}
                     <span className="td-hero-subtitle mb-10">
                        ACADEMIA DE MÚSICA
                     </span>

                     {/* TÍTULO PRINCIPAL */}
                     <h2 className="td-hero-title">
                        FORMACIÓN
                        <br />
                        MUSICAL
                     </h2>

                     {/* DESCRIPCIÓN */}
                     <p className="td-hero-location mb-35">
                        Descubre tu talento y desarrolla tus habilidades
                        musicales con Formación ACM.
                        <br /><br />
                        Aprende con programas diseñados para estudiantes
                        de diferentes edades y niveles.
                     </p>

                     {/* BOTÓN */}
                     <Link
                        className="td-btn td-left-right"
                        href="#cursos"
                     >
                        <span className="td-text">
                           CONOCE NUESTROS CURSOS
                        </span>
                     </Link>

                  </div>

               </div>

               {/* IMAGEN LATERAL */}
               <div className="col-xl-6 col-lg-12">

                  <div className="td-hero-thumb mb-30 p-relative">

                     <div className="td-hero-shape-one up-down">
                        <Image src={shape} alt="" />
                     </div>

                     <Image
                        className="w-100"
                        src={banner_thumb}
                        alt="Formación musical ACM"
                        priority
                     />

                  </div>

               </div>

            </div>

         </div>

      </div>
   )
}

export default Banner
