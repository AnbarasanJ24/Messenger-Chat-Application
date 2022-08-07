import React from 'react'
import Sidebar from '../sidebar/Sidebar.jsx'
import './dashboard.css'

const Dashboard = ({id}) => {
  return (
    <main className='dashboard'>
      <aside><Sidebar id={id} /></aside>
      <section>Section</section>
    </main>
  )
}

export default Dashboard