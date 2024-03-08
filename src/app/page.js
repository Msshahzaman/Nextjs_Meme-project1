import Image from "next/image";
import Link from "next/link";
import '../page.css'
export default async function Home() {

  
const res = await fetch('https://api.imgflip.com/get_memes')
const response = await res.json()
            
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className="home">Meme Generator</h2>




      <div className="render-meme" >

{response.data.memes.map((item,index)=>{
  return (
  
  
  <div className="memeBox" key={index}>
    <h2 className="memeName" >{item.name}</h2>
    <br />
    <img src={item.url}   alt="" />
    <br />
    <div >
  <Link href={`detailmeme?url=${item.url}`} className="Select-meme-Btn">SELECT MEME</Link> </div>
  <br />
  <br />
  </div>
  )
})}
      </div>
     
    </main>
  );
}
