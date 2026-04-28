import React from 'react'
import './ImageStrip.css'

const STRIP_IMGS = [
  { src: 'https://www.maskabutters.in/cdn/shop/files/2_fb7f5d2e-2794-4ce3-b5e8-453bf383fd35.jpg?v=1751095172&width=900', alt: 'Product view 2' },
  { src: 'https://www.maskabutters.in/cdn/shop/files/3_d0dda42b-142e-4396-b13d-da3243a3971f.jpg?v=1751095172&width=900', alt: 'Product view 3' },
  { src: 'https://www.maskabutters.in/cdn/shop/files/4thimage_c083b744-6546-4105-8535-c5cfd4635dcb.jpg?v=1751095172&width=900', alt: 'Product view 4' },
]

export default function ImageStrip() {
  return (
    <div className="strip-section">
      <div className="strip-inner">
        {STRIP_IMGS.map((img, i) => (
          <img key={i} src={img.src} alt={img.alt} className="strip-img" />
        ))}
      </div>
    </div>
  )
}
