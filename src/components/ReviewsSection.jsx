import React, { useEffect, useRef, useState } from 'react'
import './ReviewsSection.css'

const RATING_BARS = [
  { stars: '★★★★★', label: '5', pct: 78 },
  { stars: '★★★★',  label: '4', pct: 14 },
  { stars: '★★★',   label: '3', pct: 5  },
  { stars: '★★',    label: '2', pct: 2  },
  { stars: '★',     label: '1', pct: 1  },
]

const ThumbIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3z" />
    <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
  </svg>
)

const REVIEWS = [
  {
    id: 1, initials: 'PK', avatarClass: 'av-choc', name: 'Priya K.', meta: 'Verified Purchase · Size: 500g',
    stars: '★★★★★', wide: true, featured: true,
    title: 'This is literally my daily dose of happiness in a jar',
    body: "I've tried at least 8 brands of peanut butter before finding Maska's Chocolate Salvation and I genuinely cannot go back. The dark chocolate flavour is deep and rich — not that artificial cocoa powder taste you get from cheaper brands. It mixes perfectly into my morning smoothie and my kids absolutely devour it on toast. The oil separation is real and normal as they say — stir it well and store upside down. Worth every rupee and then some.",
    date: 'March 12, 2025', helpful: 34,
  },
  {
    id: 2, initials: 'AR', avatarClass: 'av-dark', name: 'Arjun R.', meta: 'Verified Purchase',
    stars: '★★★★★', wide: false, featured: false,
    title: 'Gym gains + chocolate cravings sorted',
    body: "I was skeptical about chocolate peanut butter but this is unreal. 2 spoons post-workout with a banana and I'm set. No sugar crash. Genuinely clean ingredients. Ordered the 1kg now.",
    date: 'February 3, 2025', helpful: 21,
  },
  {
    id: 3, initials: 'SM', avatarClass: 'av-warm', name: 'Sneha M.', meta: 'Verified Purchase',
    stars: '★★★★★', wide: false, featured: false,
    title: 'Guilt-free chocolate indulgence finally exists',
    body: 'As someone with a serious sweet tooth who\'s also watching her diet — this is genuinely a godsend. Spread on multigrain toast, added to overnight oats, stirred into Greek yogurt. All incredible. Will be a repeat customer forever.',
    date: 'January 28, 2025', helpful: 17,
  },
  {
    id: 4, initials: 'VT', avatarClass: 'av-dark', name: 'Vikram T.', meta: 'Verified Purchase · Size: 1Kg',
    stars: '★★★★☆', wide: false, featured: false,
    title: 'Great quality, just needs slightly more sweetness',
    body: 'The texture is absolutely premium — thick, creamy, and rich. The dark chocolate flavour is mature and sophisticated. I personally would love just a touch more sweetness but I understand that\'s intentional for the health aspect. Packaging is excellent, arrived sealed perfectly.',
    date: 'April 5, 2025', helpful: 9,
  },
  {
    id: 5, initials: 'ND', avatarClass: 'av-choc', name: 'Nandita D.', meta: 'Verified Purchase · Size: 300g',
    stars: '★★★★★', wide: true, featured: false,
    title: 'Ordered 3 times already — the entire family is addicted',
    body: "Started with the 300g to try, finished it in 6 days between the 3 of us. We make chocolate PB smoothies, use it as a dip for apple slices, and my husband just eats it straight off the spoon at midnight. It's that good. Already on my third order and I'm going for the 1kg this time around. The quality is always consistent and delivery has been super fast each time.",
    date: 'March 30, 2025', helpful: 28,
  },
]

function ReviewCard({ review }) {
  const [helpfulCount, setHelpfulCount] = useState(review.helpful)
  const [voted, setVoted] = useState(false)

  const handleHelpful = () => {
    if (!voted) { setHelpfulCount(c => c + 1); setVoted(true) }
  }

  return (
    <div className={`review-card ${review.wide ? 'review-wide' : ''} ${review.featured ? 'featured' : ''}`}>
      <div className="review-top">
        <div className={`reviewer-avatar ${review.avatarClass}`}>{review.initials}</div>
        <div className="reviewer-info">
          <div className="reviewer-name">{review.name}</div>
          <div className="reviewer-meta">
            <span className="verified-badge"><span className="verified-icon">✓</span> Verified Purchase</span>
            {review.meta.includes('Size') && <span> · {review.meta.split('·')[1]}</span>}
          </div>
        </div>
        <div className="review-stars">{review.stars}</div>
      </div>
      <span className="quote-mark">"</span>
      <div className="review-title">{review.title}</div>
      <p className="review-body">{review.body}</p>
      <div className="review-footer">
        <div className="review-date">{review.date}</div>
        <button className={`review-helpful ${voted ? 'voted' : ''}`} onClick={handleHelpful}>
          <ThumbIcon /> Helpful ({helpfulCount})
        </button>
      </div>
    </div>
  )
}

function RatingBar({ stars, label, pct, animate }) {
  return (
    <div className="rating-bar-row">
      <div className="bar-label">
        <span className="bar-stars">{stars}</span> {label}
      </div>
      <div className="bar-track">
        <div
          className="bar-fill"
          style={{ width: animate ? `${pct}%` : '0%', transition: 'width 1s cubic-bezier(.4,0,.2,1)' }}
        />
      </div>
      <div className="bar-pct">{pct}%</div>
    </div>
  )
}

export default function ReviewsSection() {
  const sectionRef = useRef(null)
  const [barsAnimated, setBarsAnimated] = useState(false)
  const [loadedMore, setLoadedMore] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setBarsAnimated(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="reviews-section" ref={sectionRef}>
      <div className="reviews-inner">

        <div className="reviews-header">
          <div>
            <div className="reviews-eyebrow">Customer Stories</div>
            <h2 className="reviews-heading">
              What our<br />Peanut Butter <em>Lovers</em> Say
            </h2>
          </div>
          <div className="reviews-aggregate">
            <div className="aggregate-stars">★★★★★</div>
            <div className="aggregate-score">4.7<span>/5</span></div>
            <div className="aggregate-count">Based on 148 verified reviews</div>
          </div>
        </div>

        <div className="rating-bars">
          {RATING_BARS.map(b => (
            <RatingBar key={b.label} {...b} animate={barsAnimated} />
          ))}
        </div>

        <div className="reviews-grid">
          {REVIEWS.map(r => <ReviewCard key={r.id} review={r} />)}
        </div>

        <div className="reviews-cta">
          <button
            className="btn-load-reviews"
            onClick={() => setLoadedMore(true)}
          >
            {loadedMore ? '✓  All reviews loaded' : 'Load More Reviews'}
          </button>
        </div>

      </div>
    </section>
  )
}
