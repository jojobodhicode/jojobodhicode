import background from '../src/images/bg-galaxy.jpg';
import jojoBodhiCodeLogo from '../src/images/jojoBodhiCodeLogo.png';

export default function Home() {

  return (
    <>
      <style>
        {
          `
          .bg-galaxy{
            background-image:  url(${background.src});
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
          }
          
          .h-vh-100 {
            height: 100vh;
          }`
        }
      </style>
   <div className="page-wrapper bg-galaxy w-100 h-vh-100">
     <div className="max-w-">
      <img className="img-fluid w-100" src={jojoBodhiCodeLogo.src} alt="jojoBodhiCodeLogo"/>
     </div>
   </div>
   </>
  )
}
