import React from 'react'

export default function Octocat({ details }) {
  return (
    <div class="card responsive-text responsive-padding">
      <a class="card-face" href={details.link}>
        <img
          className="card-img"
          src={details.image}
          alt={details.name}
        />
      </a>
      <div className="card-details">
        <span className="card-id">{details.number}</span>
        <a className="card-name" href={details.link}>{details.name}</a>
        <div className="card-authors">
          {
            details.authors.map((author, index) => {
              return (
                <a
                  id={index}
                  className="artist-link"
                  href={author.link}
                  target="_blank"
                  rel="nofollow"
                >
                  <img
                    className="artist-img"
                    src={author.image}
                    width="24"
                    height="24"
                  />
                </a>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
