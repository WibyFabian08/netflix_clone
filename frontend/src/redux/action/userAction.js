export const getUser = () => (dispatch) => {
    const user = JSON.parse(localStorage.getItem('user'))

    dispatch({type: 'SET_USER', value: user.user});
}