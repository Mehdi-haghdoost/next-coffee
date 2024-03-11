import About from '@/components/templates/Index/About'
import Slider from '@/components/templates/Index/Slider'
import React from 'react'
import Services from '@/components/templates/Index/Services'
import Offers from '@/components/templates/Index/Offers'
import Menu from '@/components/templates/Index/Menu'
import Reservation from '@/components/templates/Index/Reservation'
import Testimonials from '@/components/templates/Index/Testimonials'


function Home({ data }) {
  return (
    <>
      <Slider />
      <About />
      <Services services={data.services} />
      <Offers />
      <Menu menu={data.menu} />
      <Reservation />
      <Testimonials comments={data.comments} />
    </>
  )
}

export async function getStaticProps() {
  const serviceResponse = await fetch('http://localhost:4000/services')
  const services = await serviceResponse.json()

  const menuRespone = await fetch('http://localhost:4000/menu')
  const menu = await menuRespone.json()

  const commentsResponse = await fetch('http://localhost:4000/comments')
  const comments = await commentsResponse.json()


  return {
    props: {
      data: {
        services,
        menu,
        comments,
      }
    },
    revalidate: 60 * 60 * 12, // second
  }
}

export default Home