import { Link, NavLink } from 'react-router'

export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark p-2'>
      <Link className='navbar-brand' to='/'>
        Asociaciones
      </Link>

      <div className='navbar-collapse'>
        <div className='navbar-nav'>
          <NavLink className='nav-item nav-link' to='/marvel'>
            Marvel
          </NavLink>

          <NavLink className='nav-item nav-link' to='/dc'>
            DC
          </NavLink>
        </div>
      </div>

      <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
        <ul className='navbar-nav ml-auto'>
          <span className='nav-item nav-link text-primary'>Eze</span>

          <button className='nav-item nav-link btn btn-outline-primary'>Salir</button>
        </ul>
      </div>
    </nav>
  )
}