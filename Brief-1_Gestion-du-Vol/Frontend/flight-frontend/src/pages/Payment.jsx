import React from 'react'
import Header from '../components/Header'
import PaymentForm from '../components/PaymentForm'
import Footer from '../components/Footer'

export default function Payment() {
  return (
    <div>
        <Header header="Payment" />
        <PaymentForm />
        <Footer />

    </div>
  )
}
