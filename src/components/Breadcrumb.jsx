import React from 'react'
import './Breadcrumb.css'

export default function Breadcrumb() {
  return (
    <div className="breadcrumb">
      <div className="breadcrumb-inner">
        <a href="#">Home</a>
        <span className="sep">›</span>
        <a href="#">Peanut Butter</a>
        <span className="sep">›</span>
        <span className="current">Chocolate Salvation</span>
      </div>
    </div>
  )
}
