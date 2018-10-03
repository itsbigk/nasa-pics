import React from 'react'

const AstronomyCard = ({ title, url, hdurl, explanation, date, copyright }) => (
  <div className='astronomy-card'>
    <h6 className='astronomy-card-title'>
      {title}
    </h6>
    <a href={hdurl} className='astronomy-card-image' target='_blank'>
      <img src={url} alt={title} />
    </a>

    <p>{explanation}</p>

    <span>{date}, {copyright}</span>
  </div>
)

export default AstronomyCard
