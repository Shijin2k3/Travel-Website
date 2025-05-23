import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div id="services" className='pt-16 pb-24 '>
        {/*heading  */}
        <SectionHeading heading='Why Choose Us'/>
        <div className='grid w-[80%]  mx-auto grid-cols-1 md:grid-cols-2
         lg:grid-cols-3 gap-16 items-center mt-20'>
            <div data-aos="fade-up"  data-aos-anchor-placement="top-center">
                <ServiceCard  image="/images/c1.svg" title="Best Price Guarantee" />
            </div>
            <div data-aos="fade-up"  data-aos-anchor-placement="top-center" data-aos-delay='150'>
                <ServiceCard  image="/images/c2.svg" title="Easy & Quick Booking" />
            </div>
            <div data-aos="fade-up"  data-aos-anchor-placement="top-center" data-aos-delay='350'>
                <ServiceCard  image="/images/c3.svg" title="CustomerCare 24/7" />
            </div>
         </div>
    </div>
  )
}

export default Services