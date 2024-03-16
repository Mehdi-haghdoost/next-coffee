import PageHeader from '@/components/modules/PageHeader/PageHeader'
import Routes from '@/components/templates/Search/Routes'
import React from 'react'

function Search({data}) {

  
  return (
    <>
      <PageHeader />
      <Routes data={data} />
    </>
  )
}

export async function getServerSideProps(context) {

  const { query } = context

  const res = await fetch('http://localhost:4000/menu')
  const data = await res.json()

  const searchResult = data.filter(item => item.type.toLowerCase().includes(query.q.toLowerCase()) || item.title.toLowerCase().includes(query.q.toLowerCase()))
  console.log(searchResult);
  return {
    props: {
      data : searchResult,
    },
  }
}

export default Search