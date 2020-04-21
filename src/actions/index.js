export const increment=(e)=> {

    return {
        type: 'INCREMENT',
        payload:e
    };
};

export const decrement=()=>{

    return {
        type: 'DECREMENT'
    }
}


export const signin=()=>{

    return {
        type: 'SIGN_IN'
    }
}
