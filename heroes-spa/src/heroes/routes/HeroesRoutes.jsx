import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { Navbar } from '../ui'

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/marvel' element={<MarvelPages />} />
        <Route path='/dc' element={<DcPages />} />
        <Route path='/login' element={<LoginPages />} />
        <Route path='/' element={<Navigate to='/marvel' />} />
      </Routes>
    </>
  )
}
