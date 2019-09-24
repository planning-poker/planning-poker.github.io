export const createUser = (name) => {
    return (dispatch, getState, { getFirebase, getFirestore } ) => {
        const fireStore = getFirestore();
        fireStore.collection('users').add(
            {
                firstName: name.name,
                lastName: name.name,
                initials: "XY",
            }
        )
        .then(function(user) {
            // console.log("User -->", user);
            let userDetails = {
                id:user.id,
                name: name.name
            }
            dispatch({ type:'CREATE_USER', userDetails })
        })
        .catch((err) => {
            dispatch({ type: 'CREATE_USER_ERROR', err })
        })

    }
};