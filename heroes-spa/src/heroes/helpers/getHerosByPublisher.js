import { heroes } from '../data/heroes'

export const getHerosByPublisher = ({ publisher }) => {
  const validPublishers = ['DC Comics', 'Marvel Comics']

  if (!validPublishers.includes(publisher)) {
    throw new Error('asd')
  }

  return heroes.filter(heroe => heroe.publisher === publisher)
}
