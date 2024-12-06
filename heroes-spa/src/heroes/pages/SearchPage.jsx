import React from 'react'
import { useForm } from '../../hooks/useForm'
import { useLocation, useNavigate } from 'react-router'
import queryString from 'query-string'
import { getHerosByName, HeroCard } from '../'

export const SearchPage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse(location.search)
  const heros = getHerosByName(q)

  const showSearch = (q.length === 0)
  const showError = (q.length === 0 && heros.lenght === 0)

  const { searchText, onInputChange } = useForm({
    searchText: 'w'
  })

  const onSearchSubmit = (event) => {
    event.preventDefault()
    navigate(`?q=${searchText.toLowerCase().trim()}`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className='row'>
        <div className='col-5'>
          <h4>Searching</h4>
          <hr />
          <form action='' onSubmit={onSearchSubmit}>
            <input type='text' placeholder='Search Hero' className='form-control' name='searchText' value={searchText} onChange={onInputChange} />
            <button className='btn btn-outline-primary mt-2'>Search</button>
          </form>
        </div>

        <div className='col-7'>
          <h4>Results</h4>
          <hr />

          <div className='alert alert-primary' style={{ display: showSearch ? '' : 'none' }}>
            No resultados
          </div>

          {
            (heros) && (heros.map((hero) => <HeroCard key={hero.id} hero={hero} />))
          }

          <div className='alert alert-danger' style={{ display: showError ? '' : 'none' }}>
            No resultados
          </div>

        </div>
      </div>
    </>
  )
}
