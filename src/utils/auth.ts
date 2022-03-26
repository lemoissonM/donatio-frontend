export const logout = () => {
    localStorage.setItem('token', '');
    window.location.assign('/')
}

export const isAuth = () => {
    return localStorage.getItem('token');
}