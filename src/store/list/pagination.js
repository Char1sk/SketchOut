import axios from "axios"

const PaginationModule = {
    namespaced: true,
    state: {
        isLoading: false,
        currentPage: 1,
        pageSize: 10,
        total: 60,
        bikes: []
    },
    mutations: {
        changePage: function(state, num) {
            state.currentPage = num;
        },
        getBikes: function(state) {
            let currentUrl = "/bikes/" + state.currentPage + ".json";
            state.isLoading = true;
            axios.get(currentUrl)
                .then(response => {
                    state.bikes = response.data;
                    state.isLoading = false;
                })
                .catch(error => alert(error));
        }
    }
};

export default PaginationModule;