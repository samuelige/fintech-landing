import HeroLayout from '@/_shared/components/HeroLayout'
import Announcement from '@/container/Announcement'
import Banner from '@/container/Banner'
import NavBar from '@/container/NavBar'
import Products from '@/container/Products'
import Services from '@/container/Services'

export default function Home() {
  return (
    <main className='w-full flex flex-col'>
      <Announcement/>
      <HeroLayout>
        <div className='w-full flex flex-col pt-[1.13rem] xl-1:max-w-[77.59806rem] xl-1:m-auto'>
          <NavBar/>
          <Banner/>
        </div>
      </HeroLayout>
      <Products/>
      <Services/>
    </main>
  )
}
