import React from 'react'
//imported the javascript for each page into calculator
import Content from '../components/Calculator/Content';
import Header from '../components/Calculator/Header';
import Footer from '../components/Calculator/Footer';

// use react to add components to page
const Calculator = () => {
  return (
    <>
      <>
      <Header />
      </>
      <Content />
      <>
      <Footer />
      </>
    </>
  )
}

export default Calculator