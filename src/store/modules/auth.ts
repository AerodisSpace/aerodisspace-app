export default ({
    namespaced: true,

    state: () => ({
        authenticated: false,
        user: null
    }),

    mutations: {
        SET_USER(state: any, user: any) {
            state.user = user
            if (user) {
                state.authenticated = true
            }
        }
    },

    actions: {
        
    }
})