import { useQuery } from '@tanstack/vue-query'
import { userService } from '@/services/userService'

export function useUsers() {
    return useQuery({
        queryKey: ['users'],
        queryFn: userService.getUsers
    })
}

export function useUser(id: number) {
    return useQuery({
        queryKey: ['users', id],
        queryFn: () => userService.getUserById(id),
        enabled: !!id
    })
}