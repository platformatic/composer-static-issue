import '../node_modules/bulma/css/bulma.css'
import React, { useEffect, useState } from 'react'

export default function App (props) {
  const [user, setUser] = useState(null)
  useEffect(() => {
    setUser({
      full_name: 'Foobar',
      image: 'https://picsum.photos/200'
    })
  }, [])
  return (
    <div>
      <div className='container mt-4'>
        <div className='jumbotron itext-primary'>
          {user &&
            <div className='is-size-3'>
              <h2>Hello {user.full_name}!</h2>
              <img src={user.image} />
            </div>}
        </div>
      </div>
    </div>
  )
}
