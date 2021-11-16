import { PractitionerTypes } from "./practitioners.types"

const INITIAL_STATE = {
    allPractitioners: [], 
    pending: false,
    error: null
}

export const practitionerReducer = (prevState=INITIAL_STATE,action) =>{
    switch(action.type){
        case PractitionerTypes.GET_PRACTITIONERS_SUCCESS:
            console.log(action)
            return {
                ...prevState,
                pending: false,
                allPractitioners: action.payload
            }
        case PractitionerTypes.GET_PRACTITIONERS_ERROR:
            return {
                ...prevState,
                pending: false,
                error: action.error
            }
        case PractitionerTypes.GET_PRACTITIONERS_PENDING:
            return {
                ...prevState,
                pending: true                
            }
        default:
            return prevState
    }
}

export const getPractitioners = state => state.practitioners.allPractitioners
export const getPractitionerPending = state => state.practitioners.pending
export const getPractitionerError = state => state.practitioners.error