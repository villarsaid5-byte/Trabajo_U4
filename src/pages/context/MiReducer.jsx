import type from "./type";
const MiReducer = (state={},action) => {
    switch(action.type){
        case type.login:{
            return {
                logged:true,
                usuario:action.payload
            }
        }
        case type.logout:{
            return {
                logged:false,
                usuario:null
            }
        }
        default:{
            return state;
        }
    }
}
export default MiReducer;