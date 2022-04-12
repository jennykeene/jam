import decode from 'jwt-decode';

// we instantiate a new version of AuthService for every component it imports
class AuthService {
    // retrieve data saved in token
    getProfile() {
        return decode(this.getToken());
    }

    //checking to see if user still logged in 
    loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token); // handwaiving here
    }

    // check if user token is expired
    isTokenExpired(token) {
        try {
        const decoded = decode(token);
        if (decoded.exp < Date.now() / 1000) {
            return true;
        } else return false;
        } catch (err) {
        return false;
        }
    }

    // get token from localStorage
    getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token');
    }

    // set token to localStorage & reload page to homepage 
    login(idToken) {
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken);

        window.location.assign('/preview');
    }

    // clear token from localStorage & force logout with reload
    logout() {
        // Clear user token and profile data from localStorage
        // axios.defaults.headers.common["Authorization"] = null;
        localStorage.removeItem('id_token');
        // this will reload the page and reset the state of the application
        window.location.assign('/');
    }
}

export default new AuthService();
