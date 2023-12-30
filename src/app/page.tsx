import HeroLayout from '@/_shared/components/HeroLayout'
import Announcement from '@/container/Announcement'
import NavBar from '@/container/NavBar'

export default function Home() {
  return (
    <main className='w-full flex flex-col'>
      <Announcement/>
      <HeroLayout>
        <div className='w-full flex flex-col pt-[1.13rem] xl-1:max-w-[90rem] xl-1:m-auto'>
          <NavBar/>
        </div>
      </HeroLayout>
    </main>
  )
}
