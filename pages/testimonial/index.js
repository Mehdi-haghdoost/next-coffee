import PageHeader from '@/components/modules/PageHeader/PageHeader'
import Comments from '@/components/templates/Testimonial/Comments'
import React from 'react'

function Testimonial({ data }) {
  return (

    <>
      <PageHeader />
      <Comments data={data} />
    </>
  )
}


export async function getStaticProps() {
  const res = await fetch('http://localhost:4000/comments')
  const data = await res.json()

  return {
    props: {
      data,
    },
    revalidate: 60 * 60 * 12 // second
  }
}

export default Testimonial