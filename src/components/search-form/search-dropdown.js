import React from 'react'
import  './search-dropdown.css'
import { Link } from 'react-router-dom'

const SearchDropdown = ({practitioners,specialties , handleSelect}) => {   
    console.log(practitioners)
    console.log(specialties)
    return (
        <div id="myDropdown" class="dropdown-content">   
        {specialties.map(e => (
            <a className="drop-menu text-dark"  onClick={() => handleSelect(e)} >{e}</a>

        ))}  
        <hr/>  
        {practitioners.map((e, idx, arr) => (
            <Link key={e.id.$oid} className="drop-menu text-dark d-flex"  to={{ pathname: '/doctor', state: { details: arr[idx] } }} >
                <img className="little-img" src={e.image} />
                <div>
                    <span> Dr. {e.name}</span> <br/>
                    <small>{e.specialty}</small>
                </div>
                </Link>

        ))}  
        </div>
    )
}

export default SearchDropdown
