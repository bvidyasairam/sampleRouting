const initalState = {
    booleanValue: false
}

export default (state = initalState, action) => {
    const newState = { ...state }
    if (action.type == "CHANGEBOOLEAN") {
        newState.booleanValue = action.data
    }
    return newState;
}