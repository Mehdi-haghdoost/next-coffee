import React from 'react'
import ServiceItem from '@/components/modules/ServiceItem/ServiceItem'
import {  faAward, faCoffee, faTable, faTruck } from "@fortawesome/free-solid-svg-icons";
function Services() {
  return (
    <div class="container-fluid pt-5">
      <div class="container">
        <div class="section-title">
          <h4 class="text-primary text-uppercase" style={{letterSpacing: '5px'}} >Our Services</h4>
          <h1 class="display-4">Fresh & Organic Beans</h1>
        </div>
        <div class="row">
         <ServiceItem title='Fastest Door Delivery'
         desc='Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor'
         image={'/images/service-1.jpg'}
         icon={faTruck}
         />
          <ServiceItem title='Fresh Coffee Beans'
         desc='Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor'
         image={'/images/service-1.jpg'}
         icon={faCoffee}
         />
          <ServiceItem title='Best Quality Coffee'
         desc='Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor'
         image={'/images/service-1.jpg'}
         icon={faAward}
         />
          <ServiceItem title='Online Table Booking'
         desc='Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor'
         image={'/images/service-1.jpg'}
         icon={faTable}
         />
        </div>
      </div>
    </div>
  )
}

export default Services