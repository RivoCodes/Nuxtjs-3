<template>
  <header>
    <nav class="bg-gray-100">
        <div class="px-8 mx-auto border">
          <div class="flex justify-between">
            <div class="flex space-x-4">
              <div>
                <a href="#" class="flex item-center py-2 px-2 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-1 text-blue-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  <span class="font-bold">
                    HOME PAGES
                  </span>
                </a>
              </div>
              <div class="flex item-center space-x-3 py-2 px-3 text-gray-500">
                <NuxtLink to="/">About us</NuxtLink>
                <NuxtLink to="/">Features</NuxtLink>
              </div>
            </div>
          <div class="flex item-center space-x-1">
            <NuxtLink class="py-3 px-3 bg-green-400 text-green-900 rounded hover:bg-green-300 hover:text-green-800" to="/login">Login</NuxtLink>
            <a href="#" class="py-3 px-3 bg-yellow-400 text-yellow-900 rounded hover:text-yellow-800 hover:bg-yellow-300" >SignUp</a>
          </div>
        </div>
        </div>
      </nav>
    </header>
</template>