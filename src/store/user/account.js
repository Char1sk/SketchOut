const UserModule = {
    namespaced: true,
    state: {
        isLogged: false,
        username: ""
    },
    mutations: {
        logIn: function(state, username) {
            console.log("FUCK!")
            state.isLogged = true;
            state.username = username;
        },
        logOut: function(state) {
            console.log("SHIT")
            state.isLogged = false;
            state.username = "";
        }
    }
};

export default UserModule;