import React from 'react'
import './ProductDetails.css'

const USAGE = [
  'Spread a tablespoon on toasted brown bread for a PB&J sandwich with a chocolatey twist.',
  'Spread on baked goods such as breads, cakes, and doughnuts for a rich, dark chocolate layer.',
  'Add a tablespoon to fruit salads, smoothies, or milkshakes to make them more filling with dark chocolate goodness.',
  'Craving a chocolate sandwich? This heavenly spread is your immediate rescue without the diet guilt.',
]

const INFO_ROWS = [
  { label: 'Available Sizes', value: '300g, 500g, 1KG' },
  { label: 'Shelf Life', value: '9 Months' },
  { label: 'Manufactured In', value: 'India 🇮🇳' },
  { label: 'Dietary', value: 'Vegetarian' },
  { label: 'Storage', value: 'Cool, dry place' },
]

export default function ProductDetails() {
  return (
    <section className="details-section">
      <div className="details-inner">
        <div className="details-header">
          <h2>Product Details</h2>
        </div>
        <div className="details-grid">

          <div className="details-card">
            <h3>How to Use</h3>
            <ul className="usage-list">
              {USAGE.map((step, i) => (
                <li key={i}>
                  <span className="usage-num">{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="details-card">
            <h3>Additional Information</h3>
            <div className="info-table">
              {INFO_ROWS.map((row, i) => (
                <div key={i} className={`info-row ${i < INFO_ROWS.length - 1 ? 'bordered' : ''}`}>
                  <span className="info-label">{row.label}</span>
                  <span className="info-value">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="details-card details-full">
            <h3>Full Description</h3>
            <p>
              Are you even living to the fullest if you haven't tried our lip-smackin' Chocolate Salvation peanut butter?
              Dig into this treat when you don't want to cheat on your diet. A perfect blend of delightful chocolate and rich peanuts.
              A relationship truly made in heaven. A perfect jar of sinful indulgence to not let you give up on your healthy diet goals,
              while also gratifying your never-ending desire for Dark Chocolate cravings.
            </p>
            <p style={{ marginTop: '14px' }}>
              Made with premium quality roasted peanuts and real dark chocolate — no artificial flavours, no hydrogenated oils,
              no artificial preservatives. Just pure, honest goodness in every spoonful. Our peanut butter is crafted to satisfy
              both your taste buds and your body's nutritional needs, making it the perfect companion for athletes, fitness enthusiasts,
              and chocolate lovers alike.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
