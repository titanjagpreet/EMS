import React from 'react'
import { useState, useEffect, useContext } from 'react'
import Login from './components/auth/login'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

export default function App() {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  },[])
  

  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {

      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))

    } else if (authData ) {

      const employee = authData.employees.find((e) => email == e.email && e.password == password)

      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      }

    }
    else {
      alert("Invalid Credentials")
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}

      {user == 'admin' ? <AdminDashboard role='admin' changeUser={setUser} data={authData.admins}/> : (user == 'employee' ? <EmployeeDashboard  role='employee' changeUser={setUser} data={loggedInUserData} /> : null)}
    </>
  )
}


