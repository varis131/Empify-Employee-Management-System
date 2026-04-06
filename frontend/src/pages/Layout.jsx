import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <main>
          <h1>sidebar</h1>
          <div>
              <Outlet />
          </div>
      </main>

    </div>
  )
}

export default Layout