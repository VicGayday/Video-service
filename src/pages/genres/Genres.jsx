import React from 'react'

import './Genres.css'

const Genres = () => {
  return (
    <section className="genres">
      <div className="genre-container comedy">
        😁 <p>Комедии</p>
      </div>
      <div className="genre-container drama">
        😭 <p>Драмы</p>
      </div>
      <div className="genre-container fantastic">👽 <p>Фантастика</p></div>
      <div className="genre-container horror">👻 <p>Ужасы</p></div>
    </section>
  );
}

export default Genres;
