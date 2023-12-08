import type { FC } from 'react'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import DashboardPage from '@root/pages/dashboard/DashboardPage'

const Routing: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/admin' />} />
        <Route path='/admin' element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
