import React from 'react'
import Header from '../components/Header'
import PaymentForm from '../components/PaymentForm'
import Footer from '../components/Footer'
import Authenticated from '../components/Authenticated'

export default function Payment() {
  return (
    <div>
      <Authenticated>
        <Header header="Payment" />
        <PaymentForm />
        <Footer />
      </Authenticated>

    </div>
  )
}
