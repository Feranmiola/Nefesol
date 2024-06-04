import Footer from "@/shared/Footer"
import TopBar from "@/shared/TopBar"
import { useLayoutEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Outlet } from "react-router-dom"

const PageLayout = () => {

  const [loading, setLoading] = useState(true);
  useLayoutEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500); // Delay of 2 seconds
  }, []);

  if(loading){
      return (
          <div className='w-screen h-screen bg-white flex items-center justify-center minw-[100vh]'>
            <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#0A4519"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />
          </div>
        );
  }

    return (
      <div className="flex flex-col">
        <div className="w-screen">
          <TopBar/>
        </div>
        <div className="bg-white w-screen">
          <Outlet/>
        </div>
        <Footer/>
      </div>
    )
}

export default PageLayout