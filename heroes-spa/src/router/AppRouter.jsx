import { React } from 'react'
import { LoginPages } from '../auth'
import { Route, Routes } from 'react-router'
import { HeroesRoutes } from '../heroes'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPages />} />
        <Route path='/*' element={<HeroesRoutes />} />
      </Routes>
    </>
  )
}
