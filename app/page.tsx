
import { HeroSection } from "@/components/hero-section"
import {BrowseSection} from "@/components/browse-section"
import {ProductsSection} from "@/components/product-section"
import Hero from '@/components/hero'
import RoomShowcase from '@/components/room-showcase'
import Gallery from '@/components/Gallery'
import Footer from '@/components/footer'
import Navbar from "@/components/navbar"



export default function Home() {
  return (
    <div>
      <Navbar/>
        <HeroSection />
      <BrowseSection />
      <ProductsSection/>

      <Hero />
      <RoomShowcase />
      <Gallery />
      <Footer />

    </div>
  )
}

