import classNames from "classnames";

// style
import './../public/css/globals.css';

// component
import Footer from './../src/components/Footer';
import Sidebar from "./../src/components/Sidebar";
import Navigation from "./../src/components/Navigation/Navigation";

//글로벌 css, 모든 페이지의 레이아웃, 상태 값
//Component: 현재 페이지, pageProps 초기 객체
function MyApp({ Component, pageProps }) {
  const section_con = classNames(
    "container-fluid","flex-grow-1"
  );
  return (
    <>
    <div className="h-100 d-flex flex-column">
      <Navigation/>
      <div className={section_con}>
        <div className="row h-100">
          <Sidebar></Sidebar>
          <div className="col d-flex flex-column">
            <div className="d-flex flex-fill align-items-center justify-content-center">
             <Component {...pageProps} /> 
            </div>
            <Footer/>
          </div>
        </div>
      </div>
      
     </div>
    </>
  )
}

export default MyApp
