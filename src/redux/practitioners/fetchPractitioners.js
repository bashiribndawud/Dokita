import { getPractitionersPending, getPractitionersSuccess, getPractitionersError } from "./practitioners.action"
import { firestore } from "../../components/firebase/firebase.utils"

function fetchPractitioners(){
    return dispatch => {
        dispatch(getPractitionersPending())
        firestore.collection('specialty').get().then(val =>{
            let data = val.docs.map(doc => doc.data())  
            dispatch(getPractitionersSuccess(data))            
            return data        
        }).catch(err =>{
            dispatch(getPractitionersError(err))
        })
    }
}
export default fetchPractitioners