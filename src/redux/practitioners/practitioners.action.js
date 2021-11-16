import { PractitionerTypes } from "./practitioners.types";

export function getPractitionersSuccess(data){
    return{
        type: PractitionerTypes.GET_PRACTITIONERS_SUCCESS,
        payload: data
    }
}

export function getPractitionersPending(){
    return {
        type: PractitionerTypes.GET_PRACTITIONERS_PENDING
    }
}

export function getPractitionersError(error){
    return{
        type: PractitionerTypes.GET_PRACTITIONERS_ERROR,
        error: error
    }
}

// export default {getPractitionersError, getPractitionersPending, getPractitionersSuccess}