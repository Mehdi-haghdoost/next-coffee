import ProductsDetails from '@/components/templates/Product/ProductDetails'
import Comments from '@/components/templates/Product/Comments'
import React from 'react'

function Product({ product }) {


  return (
    <>
      <ProductsDetails data={product} />
      <Comments />
    </>
  )
}
export async function getStaticPaths() {
  const res = await fetch('http://localhost:4000/menu')
  const productData = await res.json()

  const paths = productData.map(product => ({
    params: { id: String(product.id) },
  }))

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context
  const res = await fetch(`http://localhost:4000/menu/${params.id}`)
  const product = await res.json()
  console.log('product =>', product);
  return {
    props: {
      product,
    },
  }
}

export default Product