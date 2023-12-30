import HeroLayout from '@/_shared/components/HeroLayout'
import Announcement from '@/container/Announcement'
import Banner from '@/container/Banner'
import Download from '@/container/Download'
import Footer from '@/container/Footer'
import NavBar from '@/container/NavBar'
import Overview from '@/container/Overview'
import Partners from '@/container/Partners'
import Products from '@/container/Products'
import Services from '@/container/Services'

export default function Home() {
  return (
    <main className='w-full flex flex-col'>
      <Announcement/>
      <HeroLayout>
        <div className='w-full flex flex-col pt-[1.13rem] lg:px-8 xl-1:px-0 xl-1:max-w-[77.59806rem] xl-1:m-auto'>
          <NavBar/>
          <Banner/>
        </div>
      </HeroLayout>
      <Products/>
      <Services/>
      <Overview/>
      <Partners/>
      <Download/>
      <Footer />
    </main>
  )
}
