import React from "react"
import Navigation from "./navigation/navigation.component"
import ContactForm from '../components/contact/contact-form.component'

import './layout.css'

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />

      <div className='allChildren'>{children}</div>

      <ContactForm />
    </div>
  )
}