import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router'
import { getHeroById } from '../'

export const HeroPages = () => {
  const { id } = useParams()
  const img = `/assets/heroes/${id}.jpg`

  const hero = getHeroById(id)

  const navigate = useMemo(() => useNavigate(), [id])

  const onNavigateBack = () => {
    navigate(-1)
  }

  if (!hero) {
    return <Navigate to='/marvel' />
  }

  return (
    <div className='row mt-5 animate__animated animate__fadeInLeft'>
      <div className='col-4'>
        <img className='img-thumbnail' src={img} alt={hero.superhero} />
      </div>
      <div className='col'>
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'> <b>Alter ego:</b> {hero.alter_ego} </li>
          <li className='list-group-item'> <b>Publisher:</b> {hero.publisher}</li>
          <li className='list-group-item'> <b>First Appearance:</b> {hero.first_appearance}</li>
        </ul>

        <h5 className='mt-3'>Characters</h5>
        <p>{hero.characters}</p>

        <button className='btn btn-danger' onClick={onNavigateBack}>Salir</button>

      </div>
    </div>
  )
}
