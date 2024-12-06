import React from 'react'
import { Link } from 'react-router'

const CharactersByHero = ({ alter_ego,characters }) => {
  if (alter_ego === characters) return (<></>)

  return <p>{characters}</p>
}

export const HeroCard = ({ hero }) => {
  const imgUrl = `/assets/heroes/${hero.id}.jpg`

  return (
    <div className='col animate__animated animate__fadeInUp'>
      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-4'>
            <img className='card-img' src={imgUrl} alt={hero.superhero} />
          </div>
          <div className='col'>
            <div className='card-body'>

              <h5 className='card-title'>{hero.superhero}</h5>
              <p className='card-text'>{hero.alter_ego}</p>

              <CharactersByHero alter_ego={hero.alter_ego} characters={hero.characters} />

              <p className='card-text'>
                <small className='text-muted'>{hero.first_appearance}</small>
              </p>

              <Link to={`/hero/${hero.id}`}>
                Mas
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
