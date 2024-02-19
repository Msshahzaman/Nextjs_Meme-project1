import Image from "next/image";
import Link from "next/link";
import '../page.css'
export default async function Home() {

  
const res = await fetch('https://api.imgflip.com/get_memes')
const response = await res.json()
            
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className="home">Home</h2>




      <div className="render-meme" >

{response.data.memes.map((item,index)=>{
  return (
  
  
  <div className="memeBox" key={index}>
    <h2>{item.id}</h2>
    <h2>{item.name}</h2>
    <img src={item.url}   alt="" />
  <Link href={`detailmeme?url=${item.url}`}>Select meme</Link> 
  </div>
  )
})}
      </div>
     
    </main>
  );
}
