<template>
  <div class="container">
    <h1 class="text-2xl">User list</h1>
    <div v-if="isLoading" class="text-center">Loading...</div>
    <div v-if="isError" class="text-center text-red-500">Failed to load users.</div>

    <div v-if="data" class="grid grid-cols-2 gap-4">
      <div
        v-for="(user, index) in data"
        :key="index"
        class="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 flex"
      >
      <div>
        <img 
          :src="user.picture.large" 
          :alt="`${user.name.first} ${user.name.last}`" 
          class="h-10 object-cover rounded-full mr-2"
        />
      </div>
        <div>
          <h2 class="text-lg font-semibold">{{ user.name.first }} {{ user.name.last }}</h2>
          <p class="text-gray-600">{{ user.email }}</p>
        </div>
      </div>
    </div>

    <div class="flex justify-center space-x-4 mt-6">
        <Button
            @click="prevPage"
            :disabled="page === 1 || isFetching"
        >
            Previous
        </Button>
        <Button
            @click="nextPage"
        >
            Next
        </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, type Ref } from 'vue'
import { useQuery, keepPreviousData } from '@tanstack/vue-query'
import axios from 'axios'
import { Button } from '@repo/ui'

const page = ref(1)

const peopleFetcher = async (page: Ref<number>) => {
  const res = await axios.get(`https://randomuser.me/api/?page=${page.value}&results=6&seed=abc`)
  const data = await res.data
  console.log(data)
  return data?.results || []
}

const prevPage = () => {
  page.value = Math.max(page.value - 1, 1)
}
const nextPage = () => {
  if (!isPlaceholderData.value) {
    page.value = page.value + 1
  }
}
const { isLoading, isError, data, isFetching, isPlaceholderData } = useQuery({
  queryKey: ['people', page],
  queryFn: () => peopleFetcher(page),
  placeholderData: keepPreviousData,
  staleTime: 5 * 60 * 1000, 
})

</script>
