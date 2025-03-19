import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className='pt-16 pb-24 '>
        {/*heading  */}
        <SectionHeading heading='Why Choose Us'/>
        <div className='grid w-[80%]  mx-auto grid-cols-1 md:grid-cols-2
         lg:grid-cols-3 gap-16 items-center mt-20'>
            <div>
                <ServiceCard  image="/images/c1.svg" title="Best Price Guarantee" />
            </div>
            <div>
                <ServiceCard  image="/images/c2.svg" title="Easy & Quick Booking" />
            </div>
            <div>
                <ServiceCard  image="/images/c3.svg" title="CustomerCare 24/7" />
            </div>
         </div>
    </div>
  )
}

export default Services