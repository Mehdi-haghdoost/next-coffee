import Card from '@/components/modules/Card/Card'
import React from 'react'

function Routes({ data }) {


    const hotFilteredData = data.filter((item) => item.type === 'hot')

    const coldFilteredData = data.filter((item) => item.type === 'cold')


    return (
        <>
            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="section-title">
                        <h4 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Menu &amp; Pricing</h4>
                        <h1 className="display-4">Competitive Pricing</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 className="mb-5">Hot Coffee</h1>

                            {
                                hotFilteredData.length === 0 ? (
                                    <div className="alert alert-light h4" role="alert">
                                        oops: )) There's Nothing To Show !!
                                    </div>
                                ) : (
                                    hotFilteredData.map(item => (
                                        <Card key={item.id} {...item} />
                                    ))
                                )
                            }
                        </div>
                        <div className="col-lg-6">
                            <h1 className="mb-5">Cold Coffee</h1>
                            {
                                coldFilteredData.length === 0 ? (
                                    <div className="alert alert-light h4" role="alert">
                                        oops:)) There's Nothing To Show !!
                                    </div>
                                ) : (
                                    coldFilteredData.map(item => (
                                        <Card key={item.id} {...item} />
                                    ))
                                )
                            }
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Routes