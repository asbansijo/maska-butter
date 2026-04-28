import React, { useState } from 'react'
import './Footer.css'

const QUICK_LINKS = ['Home','All Products','Our Founders','Product Journey','Blogs','Track My Order']
const POLICIES = ['Privacy Policy','Terms of Service','Refund Policy','Shipping Policy']
const FOOTER_POLICIES = ['Privacy','Terms','Refunds','Shipping']
const PAY_ICONS = ['VISA','MC','UPI','GPAY','COD']

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subMsg, setSubMsg] = useState('')

  const handleSubscribe = () => {
    if (email.includes('@')) {
      setSubMsg('Subscribed!')
      setEmail('')
      setTimeout(() => setSubMsg(''), 3000)
    }
  }

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">

          <div className="footer-brand">
            <div className="footer-logo">Maska<em>butters</em></div>
            <p className="footer-desc">
              Clean-label, all-natural peanut butters and healthy snacks crafted with love in India.
              No artificial additives. Just pure, honest goodness.
            </p>
            <div className="social-links">
              <a className="social-link" href="#" title="Facebook">f</a>
              <a className="social-link" href="#" title="Instagram">📷</a>
              <a className="social-link" href="#" title="Twitter">𝕏</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {QUICK_LINKS.map(l => <li key={l}><a href="#">{l}</a></li>)}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Policies</h4>
            <ul>
              {POLICIES.map(p => <li key={p}><a href="#">{p}</a></li>)}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Connect With Us</h4>
            <div className="contact-item">📞 +91 6395661727</div>
            <div className="contact-item">✉️ info@maskabutters.in</div>
            <div className="contact-item address">Niramish Now Nutrition<br />438, Transport Nagar,<br />Kota, Rajasthan 324005</div>
            <div className="subscribe-wrap">
              <div className="subscribe-label">Subscribe</div>
              <div className="subscribe-row">
                <input
                  className="subscribe-input"
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSubscribe()}
                />
                <button className="subscribe-btn" onClick={handleSubscribe}>→</button>
              </div>
              {subMsg && <div className="sub-msg">{subMsg}</div>}
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026, Maskabutters. All rights reserved. Developed by Device Doctor India.</p>
          <div className="payment-icons">
            {PAY_ICONS.map(p => <span key={p} className="pay-icon">{p}</span>)}
          </div>
          <div className="footer-policies">
            {FOOTER_POLICIES.map(p => <a key={p} href="#">{p}</a>)}
          </div>
        </div>
      </div>
    </footer>
  )
}
