import PageHeader from '@/components/modules/PageHeader/PageHeader'
import Pricing from '@/components/templates/Menu/Pricing'
import React from 'react'

function Menu({ data }) {
  return (
    <>
      <PageHeader />
      <Pricing data={data} />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:4000/menu')
  const data = await res.json()

  return {
    props: {
      data,
    },
    revalidate: 30 * 30 * 12  // second
  }
}

export default Menu