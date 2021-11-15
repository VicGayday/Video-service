import React from 'react'

import Newfilms from '../newfilms/Newfilms'
import Genres from '../genres/Genres'
import './Films.css'

const Films = () => {
  return (
    <main>
      <h3>🔥 Новинки</h3>
      <Newfilms />
      <h3 className="genres">Жанры</h3>
      <Genres />
    </main>
  );
}

export default Films;
