import PageHeader from '@/components/modules/PageHeader/PageHeader'
import ServicesDetails from '@/components/templates/Services/ServicesDetails'
import React from 'react'

function Services({ data }) {

  return (
    <>
      <PageHeader />
      <ServicesDetails data={data} />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:4000/services')
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}
export default Services