export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuth();
  authStore.value.isAuthenticated = true;
  // console.log(authStore.value.isAuthenticated);
  if (to.name === "auth-registration") {
    return true;
  }
  if (!authStore.value.isAuthenticated) {
    return navigateTo({ name: "auth-registration" });
  } else {
    if (authStore.value.isAuthenticated) {
      return true;
    } else {
      return navigateTo("/");
    }
  }
  return true;
});
// export default defineNuxtRouteMiddleware((to, from) => {
//   const authStore = useAuth();
//   authStore.value.isAuthenticated = false;
//   if (to.path === "auth-registration" && authStore.value.isAuthenticated) {
//     return true;
//   }else if(!authStore.value.isAuthenticated){
//     navigateTo({ name: "auth-registration" });
//   }
//   // if (to.name === "auth-registration" && authStore.value.isAuthenticated) {
//   //   return navigateTo("/");
//   // }
//   // if (authStore.value.isAuthenticated) {
//   //   return true;
//   // } else {
//   //   // The user is not authenticated, so redirect to the login page
//   //   return navigateTo({ name: "auth-registration" });
//   // }
//   return true;
// });
