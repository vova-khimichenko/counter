export const removeLocalStorage = () => {
    localStorage.removeItem('countState')
}

export const saveState = (state) => {
    let stateAsString = JSON.stringify(state)
    localStorage.setItem('countState', stateAsString)
}

export const restoreState = (state) => {
    let stateAsString = localStorage.getItem('countState')
    if (stateAsString !== null) {
        state = JSON.parse(stateAsString)
    }
    return state
}