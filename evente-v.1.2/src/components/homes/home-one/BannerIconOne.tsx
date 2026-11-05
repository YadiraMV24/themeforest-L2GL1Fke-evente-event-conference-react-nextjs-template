const BannerIconOne = () => {

   return (
      <div
         style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            pointerEvents: "none"
         }}
      >

         <div
            style={{
               position: "absolute",
               top: "20%",
               left: "5%",
               fontSize: "35px",
               color: "#ffffff",
               opacity: "0.5"
            }}
         >
            ♪
         </div>


         <div
            style={{
               position: "absolute",
               top: "40%",
               right: "8%",
               fontSize: "50px",
               color: "#ff3eab",
               opacity: "0.7"
            }}
         >
            ♫
         </div>


         <div
            style={{
               position: "absolute",
               bottom: "15%",
               left: "20%",
               fontSize: "40px",
               color: "#ffffff",
               opacity: "0.4"
            }}
         >
            ♬
         </div>

      </div>
   )
}

export default BannerIconOne