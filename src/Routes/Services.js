import React from 'react'
import Navbar from '../components/Navbar'
import Services_List from '../components/Services_List'

function Services() {


    const All_Services = [

        {
            title:"TEXT TO IMAGE",
            description:"Draw Your Imaginations transforms ideas into reality, letting creativity shine",
            to:"/generate-image",
            
        },
        

    ]


  return (
    <div>

        <Navbar/>

       <div className=' h-[100%] gap-8 w-[100%] mt-[50px] flex flex-wrap items-center justify-center  ' >

       <div className=' font-services tracking-[8px] w-[100%] h-[30px] flex items-center justify-center text-[64px] ' >SERVICES</div>

       {
            All_Services.length > 0 ? 

                All_Services.map((item,index)=>(

                    <Services_List title={item.title} description={item.description} path={item.to}  key={index} />

                )) 

                : <p> NO SERVICES AVAILABLE RIGHT NOW PLEASE WAIT...</p>
        }


       </div>
        

    </div>
  )
}

export default Services