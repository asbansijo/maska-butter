import React from 'react'
import AnnouncementBar from './components/AnnouncementBar'
import Navbar from './components/Navbar'
import Breadcrumb from './components/Breadcrumb'
import ProductSection from './components/ProductSection'
import ImageStrip from './components/ImageStrip'
import ReviewsSection from './components/ReviewsSection'
import ProductDetails from './components/ProductDetails'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <Breadcrumb />
      <ProductSection />
      <ImageStrip />
      <ReviewsSection />
      <ProductDetails />
      <FAQ />
      <Footer />
    </>
  )
}
