import type { FC } from 'react'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import DashboardPage from '@root/pages/dashboard/DashboardPage'
import Login from '@root/pages/auth/Login'


const Routing: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
