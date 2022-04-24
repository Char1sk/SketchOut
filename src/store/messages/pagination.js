import axios from "axios"

const PaginationModule = {
    namespaced: true,
    state: {
        isLoading: false,
        currentPage: 1,
        pageSize: 10,
        total: 60,
        messages: []
    },
    mutations: {
        changePage: function(state, num) {
            state.currentPage = num;
        },
        getMessages: function(state) {
            let currentUrl = "/messages/" + state.currentPage + ".json";
            state.isLoading = true;
            axios.get(currentUrl)
                .then(response => {
                    state.messages = response.data;
                    state.isLoading = false;
                })
                .catch(error => alert(error));
        }
    }
};

export default PaginationModule;