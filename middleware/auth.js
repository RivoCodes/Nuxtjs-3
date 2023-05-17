export default defineNuxtRouteMiddleware((to, from) => {
  if (to.id === 1) {
      return navigateTo('/blog/1')
    }else{
      navigateTo('/')
    }
  })