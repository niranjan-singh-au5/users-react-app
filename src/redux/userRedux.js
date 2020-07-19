

function userReducer(state = {}, action) {
    let stateCopy = JSON.parse(JSON.stringify(state))
    console.log(action)
    switch (action.type) {
        case "user-dashboard":
            stateCopy.dashboard = action.payload
            return stateCopy
        case "user-details":
            stateCopy.user = action.payload.data
            return stateCopy
        default:
            return stateCopy
    }
}

export default userReducer
