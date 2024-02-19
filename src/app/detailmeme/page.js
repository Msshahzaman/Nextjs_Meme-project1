'use client'
import './detailpage.css'
import { useSearchParams } from "next/navigation"
import { exportComponentAsJPEG } from 'react-component-export-image'
import { createRef, useState } from "react"
import Draggable from 'react-draggable';



function detailmeme() {
  const [FirstText, setFirstText] = useState('')
  const [SecondText, setSecondText] = useState('')

    const searchParams = useSearchParams()
    const memeUrl = searchParams.get('url')

   const memeRef = createRef()

const exportMeme = () =>{
  exportComponentAsJPEG(memeRef,{
    filename : 'shahzaman'
  })
}



  return (
    <div>
        <h1>Meme detail</h1>

        <div ref={memeRef}>
        <img src={memeUrl} alt="" width={400} height={400} /> <br />




<Draggable>
<div className='Meme-text'>{FirstText}</div> 
</Draggable>

<Draggable>

        <div className='Meme-text' >{SecondText}</div> 

</Draggable>


        </div>
      

<input type="text" placeholder="First Text" onChange={e=>setFirstText(e.target.value)} />   <br /> <br />
<input type="text" placeholder="Second Text" onChange={e=>setSecondText(e.target.value)}  />
<button onClick={exportMeme}>Save Meme</button>





    </div>
  )
}

export default detailmeme;
