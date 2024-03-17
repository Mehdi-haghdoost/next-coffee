import ProductsDetails from '@/components/templates/Product/ProductDetails'
import Comments from '@/components/templates/Product/Comments'
import React from 'react'

function Product({ product,comments }) {


  return (
    <>
      <ProductsDetails data={product} />
      <Comments data={comments} />
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

  const productResponse = await fetch(`http://localhost:4000/menu/${params.id}`)
  const productData = await productResponse.json()

  const commentsResponse = await fetch('http://localhost:4000/comments')
  const comments = await commentsResponse.json()

  const productComments = comments.filter(comment => comment.productID === +(productData.id))

  console.log('comments =>' , comments);
  console.log('productData =>', productData);
  console.log('productComments =>',productComments);



  return {
    props: {
      product : productData,
      comments : productComments,
    },
  }
}

export default Product