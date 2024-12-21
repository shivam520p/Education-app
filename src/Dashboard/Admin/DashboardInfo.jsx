import React from 'react'
import ContactForm from './Users/ContactForm';
import AllLeads from './Users/AllLeads';

const DashboardInfo = () => {
  return (
    <>
    <div className='flex flex-col gap-4'>
    <ContactForm/>
    <AllLeads/>
    {/* <AllSessionBook/> */}
    </div>
    </>
  )
}

export default DashboardInfo