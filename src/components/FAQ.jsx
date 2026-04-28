import React, { useState } from 'react'
import './FAQ.css'

const FAQS = [
  { q: "What is meant by Oil Separation?", a: "Oil separation in peanut butter is a natural phenomenon, especially in natural or clean-label peanut butters that don't use emulsifiers or hydrogenated oils. This is a universal test of all the nut-butters in the world — if there is oil separation, that means it's 100% natural." },
  { q: "If we see a pool of oil on top, what should we do?", a: "Don't worry — it's completely natural! Just take a clean spoon or butter knife and stir the peanut butter well from the bottom to the top until the oil mixes back in evenly. After stirring, store the jar upside down to keep it smooth next time." },
  { q: "How should I store Maska peanut butter?", a: "Store in a cool, dry place away from direct sunlight. Refrigeration is optional but can extend shelf life. Always use a clean, dry spoon to prevent contamination." },
  { q: "What makes Maska's products unique?", a: "Maska offers clean-label, healthy snacks crafted with natural ingredients. Our products are free from artificial additives, ensuring both taste and nutrition in every bite." },
  { q: "Are Maska products suitable for all age groups?", a: "Yes, our snacks are designed to be enjoyed by individuals of all ages, providing wholesome nutrition without compromising on flavor." },
  { q: "What is the shelf life of Maska products?", a: "Our products have a shelf life of up to 9 months. Please refer to the packaging for specific expiration dates." },
  { q: "Do Maska products contain added sugars?", a: "We do not use refined sugar. We prioritize natural sweetness by using Brown Sugar. Our products contain no refined sugars, aligning with our commitment to health." },
  { q: "Are your products vegetarian or vegan?", a: "All Maska products are vegetarian. Some items are vegan-friendly; please check individual product descriptions for specific dietary information." },
  { q: "How can I place a bulk order?", a: "For bulk purchases or corporate inquiries, please contact us through the Bulk Orders section on our website or email us directly at niramishnow@gmail.com." },
  { q: "What is your return policy?", a: "Customer satisfaction is our priority. If you're unsatisfied with your purchase, please reach out to our support team within 7 days of delivery for assistance." },
  { q: "How long does delivery take?", a: "Standard delivery times are 2-3 days for major cities and 4-6 days for other regions. You'll receive tracking information once your order is dispatched." },
  { q: "Where is Maska peanut butter manufactured?", a: "We proudly produce our peanut butter in India, adhering to strict quality and hygiene standards. Facility Address: 438, Transport Nagar, Kota, Rajasthan 324005." },
]

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item ${open ? 'open' : ''}`} onClick={() => setOpen(o => !o)}>
      <button className="faq-question">
        {faq.q}
        <span className="faq-icon">{open ? '−' : '+'}</span>
      </button>
      <div className="faq-answer" style={{ maxHeight: open ? '300px' : '0' }}>
        <div className="faq-answer-inner">{faq.a}</div>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="faq-section">
      <div className="faq-inner">
        <h2>Frequently Asked Questions</h2>
        {FAQS.map((faq, i) => <FaqItem key={i} faq={faq} />)}
      </div>
    </section>
  )
}
