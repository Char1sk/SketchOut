const UserModule = {
    namespaced: true,
    state: {
        isLogged: false,
        username: ""
    },
    mutations: {
        logIn: function(state, username) {
            state.isLogged = true;
            state.username = username;
        },
        logOut: function(state) {
            state.isLogged = false;
            state.username = "";
        }
    }
};

export default UserModule;