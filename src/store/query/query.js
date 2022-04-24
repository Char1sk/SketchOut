const QueryModule = {
    namespaced: true,
    state: {
        // query
        queryOptions: {},
        // pagination
        isLoading: false,
        currentPage: 1,
        pageSize: 10,
        // data
        bikes: []
    },
    mutations: {
        changePage: function(state, num) {
            state.currentPage = num;
        },
        doQuery: function(state) {
            state.isLoading = true;
            console.log(state.queryOptions.id);
            console.log(state.queryOptions.type);
            state.bikes = [
                {
                    id: state.queryOptions.id,
                    type: state.queryOptions.type,
                    status: "normal"
                },
                {
                    id: state.queryOptions.id+1,
                    type: state.queryOptions.type,
                    status: "normal"
                },
                {
                    id: state.queryOptions.id+2,
                    type: state.queryOptions.type,
                    status: "normal"
                },
                {
                    id: state.queryOptions.id+3,
                    type: state.queryOptions.type,
                    status: "normal"
                },
                {
                    id: state.queryOptions.id+4,
                    type: state.queryOptions.type,
                    status: "normal"
                },
                {
                    id: state.queryOptions.id+5,
                    type: state.queryOptions.type,
                    status: "normal"
                },
                {
                    id: state.queryOptions.id+6,
                    type: state.queryOptions.type,
                    status: "normal"
                },
                {
                    id: state.queryOptions.id+7,
                    type: state.queryOptions.type,
                    status: "normal"
                },
                {
                    id: state.queryOptions.id+8,
                    type: state.queryOptions.type,
                    status: "normal"
                },
                {
                    id: state.queryOptions.id+9,
                    type: state.queryOptions.type,
                    status: "normal"
                },
                {
                    id: state.queryOptions.id+10,
                    type: state.queryOptions.type,
                    status: "normal"
                },
                {
                    id: state.queryOptions.id+11,
                    type: state.queryOptions.type,
                    status: "normal"
                },
                {
                    id: state.queryOptions.id+12,
                    type: state.queryOptions.type,
                    status: "normal"
                }
            ];
            state.currentPage = 1;
            // this.axios.get(this.currentUrl)
            //     .then(response => {
            //         this.setBikes(response.data);
            //         this.loaded();
            //         console.log(this.isLoading);
            //     })
            //     .catch(error => alert(error));
            state.isLoading = false;
        }
    }
};

export default QueryModule;