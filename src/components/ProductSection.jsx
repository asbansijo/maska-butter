import React, { useState } from 'react'
import './ProductSection.css'

const IMAGES = [
  { src: 'https://www.maskabutters.in/cdn/shop/files/1stimage_97e43668-94e5-4e14-b412-03974ad7d17d.jpg?v=1751095172&width=900', thumb: 'https://www.maskabutters.in/cdn/shop/files/1stimage_97e43668-94e5-4e14-b412-03974ad7d17d.jpg?v=1751095172&width=416' },
  { src: 'https://www.maskabutters.in/cdn/shop/files/2_fb7f5d2e-2794-4ce3-b5e8-453bf383fd35.jpg?v=1751095172&width=900', thumb: 'https://www.maskabutters.in/cdn/shop/files/2_fb7f5d2e-2794-4ce3-b5e8-453bf383fd35.jpg?v=1751095172&width=416' },
  { src: 'https://www.maskabutters.in/cdn/shop/files/3_d0dda42b-142e-4396-b13d-da3243a3971f.jpg?v=1751095172&width=900', thumb: 'https://www.maskabutters.in/cdn/shop/files/3_d0dda42b-142e-4396-b13d-da3243a3971f.jpg?v=1751095172&width=416' },
  { src: 'https://www.maskabutters.in/cdn/shop/files/4thimage_c083b744-6546-4105-8535-c5cfd4635dcb.jpg?v=1751095172&width=900', thumb: 'https://www.maskabutters.in/cdn/shop/files/4thimage_c083b744-6546-4105-8535-c5cfd4635dcb.jpg?v=1751095172&width=416' },
  { src: 'https://www.maskabutters.in/cdn/shop/files/5thslide_bc00c9a1-a129-45d0-87fa-155ef1f05562.jpg?v=1751095173&width=900', thumb: 'https://www.maskabutters.in/cdn/shop/files/5thslide_bc00c9a1-a129-45d0-87fa-155ef1f05562.jpg?v=1751095173&width=416' },
]

const SIZES = ['300g', '500g', '1 Kg']

const PILLS = [
  { icon: '🌿', label: '100% Natural' },
  { icon: '🚫', label: 'No Trans Fat' },
  { icon: '🌾', label: 'Gluten Free' },
  { icon: '🍫', label: 'Dark Chocolate' },
  { icon: '💚', label: 'No Preservatives' },
  { icon: '🔄', label: '9 Months Shelf Life' },
]

const BENEFITS = [
  { bold: 'Reduces stress', text: '— Made from the rich goodness of Dark Chocolate, 2 spoonfuls is your immediate rescue for stressful days.' },
  { bold: 'Lowers risk of Diabetes', text: '— Low in carbohydrates; research suggests eating 2 tablespoons for 5 days a week can reduce diabetes risk by 30%.' },
  { bold: 'Helps in weight loss', text: '— High Fiber, High Protein. A healthy substitute for your diet needs to shed those extra pounds.' },
  { bold: 'Strong muscular & skeletal health', text: '— Rich in Iron and Calcium, essential for oxygen circulation and strong bones and muscles.' },
]

const INGREDIENTS = [
  { icon: '🥜', label: 'Roasted Peanuts' },
  { icon: '🍫', label: 'Dark Chocolate' },
  { icon: '🍬', label: 'Brown Sugar' },
  { icon: '🧂', label: 'Pink Salt' },
]

const FEATURES = [
  'Premium Quality Peanuts','Dark Chocolate','ZERO Cholesterol','NO Trans Fat',
  'NO Hydrogenated Oils','Gluten Free','No Artificial Colours','No Preservatives',
  'Diet Friendly','Keto Friendly',
]

export default function ProductSection() {
  const [activeImg, setActiveImg] = useState(0)
  const [selectedSize, setSelectedSize] = useState('300g')
  const [cartMsg, setCartMsg] = useState('')

  const handleAddToCart = () => {
    setCartMsg('Added to cart!')
    setTimeout(() => setCartMsg(''), 2000)
  }

  return (
    <section className="product-section">
      <div className="product-inner">

        {/* GALLERY */}
        <div className="gallery fade-up">
          <div className="gallery-main">
            <div className="gallery-badge">SALE</div>
            <img
              key={activeImg}
              src={IMAGES[activeImg].src}
              alt="Chocolate Salvation Peanut Butter"
              className="main-img"
            />
          </div>
          <div className="gallery-thumbs">
            {IMAGES.map((img, i) => (
              <div
                key={i}
                className={`gallery-thumb ${i === activeImg ? 'active' : ''}`}
                onClick={() => setActiveImg(i)}
              >
                <img src={img.thumb} alt={`View ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* PRODUCT INFO */}
        <div className="product-info">
          <div className="product-brand fade-up delay-1">Maskabutters</div>
          <h1 className="product-title fade-up delay-2">
            Chocolate Salvation<br />Peanut Butter
          </h1>
          <p className="product-subtitle fade-up delay-2">A sinful indulgence. A healthy salvation.</p>

          <div className="rating-row fade-up delay-3">
            <div className="stars">★★★★★</div>
            <span className="rating-num">4.7</span>
            <span className="rating-sep">·</span>
            <span className="rating-count">Based on 148 reviews</span>
            <span className="rating-sep">·</span>
            <span className="free-ship">✓ Free Shipping</span>
          </div>

          <div className="price-block fade-up delay-3">
            <div className="price-row">
              <span className="price-sale">Rs. 322.20</span>
              <span className="price-original">Rs. 379.00</span>
              <span className="price-badge">15% OFF</span>
            </div>
            <p className="price-note">Inclusive of all taxes · 5% additional off with HEALTHY5</p>
          </div>

          <div className="fade-up delay-4">
            <div className="size-label">Select Size</div>
            <div className="size-options">
              {SIZES.map(s => (
                <button
                  key={s}
                  className={`size-btn ${selectedSize === s ? 'active' : ''}`}
                  onClick={() => setSelectedSize(s)}
                >{s}</button>
              ))}
            </div>
          </div>

          <div className="cta-buttons fade-up delay-5">
            <button className="btn-primary" onClick={handleAddToCart}>
              🛒 &nbsp; Add to Cart
              {cartMsg && <span className="cart-msg">{cartMsg}</span>}
            </button>
            <button className="btn-secondary">
              ⚡ &nbsp; Buy It Now
            </button>
          </div>

          <div className="guarantee-pills fade-up delay-5">
            {PILLS.map(p => (
              <span key={p.label} className="pill">
                <span className="pill-icon">{p.icon}</span> {p.label}
              </span>
            ))}
          </div>

          <div className="desc-block fade-up">
            <h3>Description</h3>
            <p>Are you even living to the fullest if you haven't tried our lip-smackin' Chocolate Salvation peanut butter? Dig into this treat when you don't want to cheat on your diet. A perfect blend of delightful chocolate and rich peanuts — a relationship truly made in heaven.</p>
          </div>

          <div className="desc-block fade-up">
            <h3>Benefits</h3>
            <ul className="benefits-list">
              {BENEFITS.map((b, i) => (
                <li key={i}>
                  <span className="benefit-dot" />
                  <span><strong>{b.bold}</strong> {b.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="desc-block fade-up">
            <h3>Ingredients</h3>
            <div className="ingredients-row">
              {INGREDIENTS.map(ing => (
                <div key={ing.label} className="ingredient-chip">
                  <span>{ing.icon}</span>{ing.label}
                </div>
              ))}
            </div>
          </div>

          <div className="desc-block fade-up">
            <h3>Features</h3>
            <div className="features-tags">
              {FEATURES.map(f => (
                <span key={f} className="feature-tag">{f}</span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
