
<template>
  <div id="app">
    <LayoutSidebar v-if="isLoginPage"></LayoutSidebar>
    <div id="main" class="layout-navbar navbar-fixed">
      <VerticalHeader v-if="isLoginPage"></VerticalHeader>
      <div id="main-content">
        <slot/>
        <LayoutFooter></LayoutFooter>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import LayoutSidebar from '~~/components/Layouts/Sidebar/LayoutSidebar.vue';
import VerticalHeader from '~~/components/Layouts/VerticalHeader.vue';
import LayoutFooter from '~~/components/Layouts/LayoutFooter.vue';
const route = useRoute();
const isLoginPage = computed(() => route.name !== 'auth-registration');
// console.log(route.name);
</script>