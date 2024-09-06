import Image from "next/image";
import { Inter } from "next/font/google";
import axios from "axios";
import { Video } from "@/types";

const inter = Inter({ subsets: ["latin"] });

interface IVideo{
  videos:Video[]
}

export default function Home({videos}:IVideo) {
  return (
    <div className="flex flex-col gap-10 h-full"
    >
      {
        videos?.length > 0 ?(
          videos?.map(video=>(
            <div>
              
            </div>
          ))
        ) : (
          <span></span>
        )
      }
    </div>
  );
}


export async function getServerSideProps(){
  try{
    const {data} = await axios.get('http://localhost:3000/api/post');
    
    return {
      props:{
        videos:data
      }
    }
  }catch(error){
    console.log(error)
  }
}