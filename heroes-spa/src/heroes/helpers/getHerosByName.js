import React from 'react'
import { heroes } from '../data/heroes'

export const getHerosByName = (name = '') => {
  if (name !== '') {
    name = name.toLocaleLowerCase().trim()
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().trim().includes(name))
  }
  return []
}
