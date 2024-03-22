import Image from "next/image";
import axios from "axios";

export default function Home() {


  
const baseURL: string | undefined = process.env.NEXT_PUBLIC_SERVER
if (baseURL){

  
  axios.get(baseURL)
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}

  return (
    <>
    <header>
      <nav className="p-5 border border-blue-600"> 
        <h1 className= "text-2xl text-blue-300">Parent Tracker </h1>
      </nav>
    </header>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-5 border border-blue-600 w-full">
        <h2>
          Tasks
        </h2>
      </div>

    </main>
    </>
    
  );
}
