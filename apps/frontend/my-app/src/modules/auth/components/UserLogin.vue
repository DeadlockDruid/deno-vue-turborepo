<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../store'
import { loginSchema, type LoginForm } from '../schema'

const authStore = useAuthStore()

const form = ref<LoginForm>({ email: '', password: '' })
const errors = ref<{ email?: string[]; password?: string[] }>({})

const handleSubmit = () => {
  const result = loginSchema.safeParse(form.value)

  if (!result.success) {
    errors.value = result.error.flatten().fieldErrors // Store all errors as an array
    return
  }

  errors.value = {}

  authStore.login(form.value)
}
</script>

<template>
  <div class="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-4">Login</h2>

    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label class="block text-gray-700">Email</label>
        <input
          v-model="form.email"
          type="email"
          class="w-full p-2 border rounded-lg"
          placeholder="Enter email"
        />
        <div v-if="errors.email">
          <p v-for="(err, index) in errors.email" :key="index" class="text-red-500">
            {{ err }}
          </p>
        </div>
      </div>

      <div class="mb-4">
        <label class="block text-gray-700">Password</label>
        <input
          v-model="form.password"
          type="password"
          class="w-full p-2 border rounded-lg"
          placeholder="Enter password"
        />
        <div v-if="errors.password">
          <p v-for="(err, index) in errors.password" :key="index" class="text-red-500">
            {{ err }}
          </p>
        </div>
      </div>

      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-lg w-full">
        Login
      </button>
    </form>
  </div>
</template>
