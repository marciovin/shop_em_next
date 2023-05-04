import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";

import { useKeenSlider } from 'keen-slider/react'

import camiseta1 from '../assets/camiseta1.png'
import camiseta2 from '../assets/camiseta2.png'
import camiseta3 from '../assets/camiseta3.png'

import 'keen-slider/keen-slider.min.css';

export default function Home() {
   const [sliderRef] = useKeenSlider({
      slides: {
         perView: 3,
         spacing: 48,
      }
   })


  return (
   <HomeContainer ref={sliderRef} className='keen-slider'>
      <Product className="keen-slider__slider">
            <Image src={camiseta1} width={520} height={480} alt="" />

            <footer>
               <strong>camiseta x</strong>
               <span>R$ 79,90</span>
            </footer>
       </Product>

       <Product className="keen-slider__slider">
            <Image src={camiseta2} width={520} height={480} alt="" />

            <footer>
               <strong>camiseta x</strong>
               <span>R$ 79,90</span>
            </footer>
       </Product>

       <Product className="keen-slider__slider">
            <Image src={camiseta3} width={520} height={480} alt="" />

            <footer>
               <strong>camiseta x</strong>
               <span>R$ 79,90</span>
            </footer>
       </Product>
   </HomeContainer>
      );
}
