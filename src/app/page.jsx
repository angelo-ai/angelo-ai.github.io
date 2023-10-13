'use client'
import Image from 'next/image'

import image_1 from "../../public/image_1.png"
import image_2 from "../../public/image_2.png"
import image_3 from "../../public/image_3.png"
import image_4 from "../../public/image_4.png"
import image_5 from "../../public/image_5.png"
import image_6 from "../../public/image_6.png"
import { useEffect, useRef, useState } from 'react'

export default function Home() {

  const headerRef = useRef();
  const circleRef = useRef();
  const containerRef = useRef();
  const [pageScroll, setPageScroll] = useState(false);

  useEffect(() => {

    const eventListener = window.addEventListener("scroll", e => {

      const scroll = window.pageYOffset || document.documentElement.scrollTop;

      scroll > 200 ? setPageScroll(true) : setPageScroll(false);

      const containerHeight = containerRef.current.offsetHeight;

      circleRef.current.style.right = (scroll/containerHeight)*100 - 96 + "px";

    });

    return () => { window.removeEventListener("scroll", eventListener) }

  }, []);

  return (
    <div className='w-full min-h-screen flex flex-col justify-between items-center relative font-inter' ref={containerRef}>


      <div id="background" className='h-screen w-screen absolute opacity-50 -z-10'>
        <div className='fixed w-72 md:w-2/5 max-w-md aspect-square rounded-full bg-gradient-to-r from-pink-500 to-purple-500 blur-md -right-24' ref={circleRef}>
        </div>

        <div className='flex items-center justify-center fixed w-72 md:w-2/5 max-w-md aspect-square rounded-full ring-8 ring-purple-500 blur -left-24 -top-8'>
          {/* <div className='w-4/5 aspect-square bg-background rounded-full m-auto'></div> */}
        </div>

        <div className='fixed bottom-12 left-12 grid grid-rows-2 grid-cols-2 w-56 md:w-2/5 max-w-xs aspect-square gap-6'>
          <div className='w-full aspect-square bg-gradient-to-br from-pink-500 to-purple-500 blur-md'></div>

          <div className='w-full aspect-square bg-gradient-to-br from-pink-500 to-purple-500 blur-md'></div>
          <div className='w-full aspect-square bg-gradient-to-br from-pink-500 to-purple-500 blur-md'></div>
        </div>
      </div>

      {
        pageScroll &&
        <header className='w-full h-36 bg-[#fefefe]/10 backdrop-blur fixed animate-appear' ref={headerRef}>

        </header>
      }


      <main className="w-full flex-1 flex flex-col">

        <section className='w-full min-h-screen text-center md:text-left flex flex-col gap-6 p-6 md:px-24 justify-center items-center md:flex-row md:justify-between'>
          <div className='md:flex-1 flex-col items-center justify-center'>
            <h1 className=' bock py-1 leading-normal text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-transparent bg-clip-text animate-gradient bg-300%'>
              Angelo
            </h1>
            <p className=' bock leading-relaxed mt-6 text-3xl font-bold text-[#fefefe] bg-clip-text bg-300%'>
              Crie, edite, transforme e
              <br />
              melhore.
            </p>
          </div>

          <div className='md:flex-1 w-fit md:w-full grid grid-rows-3 grid-cols-2 gap-6 md:grid-cols-3'>

            <figure className='w-full flex aspect-square justify-center items-center md:col-start-1 md:row-start-2' >
              <Image src={image_1} className='w-full max-w-[100px] md:max-w-[200px]' alt="Imagem gerada por IA" />
            </figure>
            <figure className='w-full flex aspect-square justify-center items-center md:col-start-3 md:row-start-1' >
              <Image src={image_2} className='w-full max-w-[100px] md:max-w-[200px]' alt="Imagem gerada por IA" />
            </figure>
            <figure className='w-full flex aspect-square justify-center items-center md:col-start-2 md:row-start-1' >
              <Image src={image_3} className='w-full max-w-[100px] md:max-w-[200px]' alt="Imagem gerada por IA" />
            </figure>
            <figure className='w-full flex aspect-square justify-center items-center md:col-start-3 md:row-start-3' >
              <Image src={image_4} className='w-full max-w-[100px] md:max-w-[200px]' alt="Imagem gerada por IA" />
            </figure>
            <figure className='w-full flex aspect-square justify-center items-center md:col-start-2 md:row-start-2' >
              <Image src={image_5} className='w-full max-w-[100px] md:max-w-[200px]' alt="Imagem gerada por IA" />
            </figure>
            <figure className='w-full flex aspect-square justify-center items-center md:col-start-3 md:row-start-2' >
              <Image src={image_6} className='w-full max-w-[100px] md:max-w-[200px]' alt="Imagem gerada por IA" />
            </figure>

          </div>
        </section>

        <section className='w-full min-h-screen text-center md:text-left flex flex-col gap-6 p-6 md:px-24 justify-center items-center md:flex-row md:justify-between'>

        </section>

      </main>
      <footer>

      </footer>
    </div>
  )
}