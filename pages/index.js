import About from '@/components/templates/Index/About'
import Slider from '@/components/templates/Index/Slider'
import React from 'react'
import Services from '@/components/templates/Index/Services'

function Home({ data }) {
  return (
    <>
      <Slider />
      <About />
      <Services services={data.services} />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:4000/services')
  const services = await res.json()


  return {
    props: {
      data: {
        services,
      }
    },
    revalidate: 60 * 60 * 12, // second
  }
}

export default Home