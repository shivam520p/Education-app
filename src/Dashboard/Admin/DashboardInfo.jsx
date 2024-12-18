import React, { useContext, useEffect }  from 'react'
import ContactForm from './Users/ContactForm';
import AllSessionBook from './Users/AllSessionBook';

const DashboardInfo = () => {
  return (
    <>
    <div className='flex flex-col gap-4'>
    <ContactForm/>
    <AllSessionBook/>
    </div>
    </>
  )
}

export default DashboardInfo