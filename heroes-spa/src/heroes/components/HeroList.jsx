import React, { useMemo } from 'react'
import { getHerosByPublisher } from '../'
import { HeroCard } from './'

export const HeroList = (publisher) => {
  const heros = useMemo(() => getHerosByPublisher(publisher), [publisher])

  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
      {
            heros.map(hero => (
              <HeroCard key={hero.id} hero={hero} />
            ))
      }
    </div>
  )
}
