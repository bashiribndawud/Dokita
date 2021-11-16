import React from 'react'
import Header from '../../components/header/header'
import SearchForm from '../../components/search-form/search-form'
import PractitionerLists from '../../components/practitioner-list/practitioner-list'
import { withRouter } from 'react-router-dom'

const Practitioners = ({location}) => {
    console.log(location)
    return (
        <div>
            <Header />
            <div className="cover-wrapper p-2" style={{marginTop:'-12px'}}>
                <SearchForm />
            </div>
            <PractitionerLists />
        </div>
    )
}

export default withRouter(Practitioners)
