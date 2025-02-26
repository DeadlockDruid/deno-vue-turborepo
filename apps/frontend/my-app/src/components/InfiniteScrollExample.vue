<template>
  <div class="p-6 max-w-4xl mx-auto">
    <h1 class="text-2xl font-bold mb-6 text-gray-800">Users List</h1>
    
    <div v-if="isPending" class="py-10 text-center text-gray-500">
      <div class="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
      Loading users...
    </div>
    
    <div v-else-if="isError" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
      <p>Error: {{ error.message }}</p>
    </div>
    
    <div v-else-if="data">
      <div v-if="isFetching && !isFetchingNextPage" class="text-sm text-blue-500 mb-4">
        Refreshing data...
      </div>
      
      <div class="space-y-6">
        <div v-for="(group, groupIndex) in data.pages" :key="groupIndex">
          <div v-for="user in group.results" :key="user.login.uuid" class="bg-white rounded-lg shadow p-4 flex items-start space-x-4">
            <img :src="user.picture.medium" :alt="`${user.name.first} ${user.name.last}`" class="w-16 h-16 rounded-full object-cover">
            
            <div class="flex-1">
              <h2 class="text-lg font-semibold text-gray-800">{{ user.name.title }} {{ user.name.first }} {{ user.name.last }}</h2>
              <p class="text-gray-600">{{ user.email }}</p>
              <div class="flex items-center text-sm text-gray-500 mt-1">
                <span>{{ user.location.city }}, {{ user.location.country }}</span>
                <span class="mx-2">•</span>
                <span>{{ user.phone }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-8 text-center">
        <button
          @click="fetchNextPage"
          :disabled="!hasNextPage || isFetchingNextPage"
          class="px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <span v-if="isFetchingNextPage">
            <span class="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2 align-middle"></span>
            Loading more...
          </span>
          <span v-else-if="hasNextPage">Load More Users</span>
          <span v-else>No more users to load</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useInfiniteQuery } from '@tanstack/vue-query'
import axios from 'axios'

const fetchUsers = async ({ pageParam = 1 }) => {
  const res = await axios.get(`https://randomuser.me/api/?page=${pageParam}&results=10&seed=abc`)
  return {
    ...res.data,
    nextCursor: pageParam + 1
  }
}

const {
  data,
  error,
  fetchNextPage,
  hasNextPage,
  isFetching,
  isFetchingNextPage,
  isPending,
  isError,
} = useInfiniteQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
  getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  initialPageParam: 1
})

console.log({
  data,
  error,
  fetchNextPage,
  hasNextPage,
  isFetching,
  isFetchingNextPage,
  isPending,
  isError,
})
</script>