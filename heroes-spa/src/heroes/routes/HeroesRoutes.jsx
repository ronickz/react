import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { MarvelPages, DcPages, SearchPage, HeroPages } from '../'
import { Navbar } from '../../ui'

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/marvel' element={<MarvelPages />} />
          <Route path='/dc' element={<DcPages />} />

          <Route path='/search' element={<SearchPage />} />
          <Route path='hero/:id' element={<HeroPages />} />

          <Route path='/' element={<Navigate to='/marvel' />} />
        </Routes>
      </div>
    </>
  )
}
