import React from 'react'
import Fromleft from './Donation_Page/Fromleft'
import Fromright from './Donation_Page/Fromright'
import CounterLayout from './CounterBlock/CounterLayout'
import NumberCounter from './CounterBlock/NumberCounter'
import MiddleCard from './MiddleCard/MiddleCard'
import Support from './supportpage/Support'

function DonationPage() {
  return (
    <div style={{overflow:"hidden"}}>
    <div className='mt-5 formdiv' >
    <center> <Fromleft/>    </center>
    <center className='fromright'><Fromright /></center>   
    
    </div>
    <NumberCounter/>
    <CounterLayout/>
    <MiddleCard/>
    <Support/>
  </div>
  )
}

export default DonationPage;
