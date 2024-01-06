export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log("MIDDLEWARE:", from.fullPath, "===>", to.fullPath);
});
