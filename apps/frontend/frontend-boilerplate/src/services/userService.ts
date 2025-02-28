import api from './api'

export const userService = {
    getUsers: async () => {
        const { data } = await api.get('/users')
        return data
    },
    getUserById: async (id: number) => {
        const { data } = await api.get(`/users/${id}`)
        return data
    },
}