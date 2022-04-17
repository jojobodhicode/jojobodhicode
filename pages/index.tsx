import background from "../src/images/bg-galaxy.jpg"
import jojoBodhiCodeLogo from "../src/images/jojoBodhiCodeLogo.png"

export default function Home() {
  return (
    <>
      <style>
        {`
          .bg-galaxy{
            background-image:  url(${background.src});
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
          }
          
          .h-vh-100 {
            height: 100vh;
          }
          
          .max-w-75-percent { 
            max-width: 75%;
          }
          
          .bg-001219 {
            background-color: #001219;
          }

          .text-shadow {
            text-shadow: 2px 2px #ff0000;
          }
          `}
      </style>
      <div className="page-wrapper bg-galaxy w-100 h-vh-100">
        <div className="w-100 d-flex">
          <img
            className="img-fluid w-100 max-w-75-percent p-5 mx-auto"
            src={jojoBodhiCodeLogo.src}
            alt="jojoBodhiCodeLogo"
          />
        </div>

        <div className="d-flex flex-column align-items-center">
          <h1 className="text-white pb-3 text-shadow">
            <strong>jojoBodhiCode</strong>
          </h1>
        </div>

        <div className="main-body-wrapper bg-001219w-100"></div>
      </div>
    </>
  )
}
