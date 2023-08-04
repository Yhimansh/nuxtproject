<template>
    <div class="menu">
    <p class="show menu-dropdown" @click="toggleDropdown">
    <!-- <p class="show menu-dropdown" @click="toggleDropdown" :data-kt-menu-trigger="menuTrigger" -->
        <!-- :data-kt-menu-placement="menuPlacement"> -->
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M19.86 6.06C19.86 7.1325 18.96 8.0175 17.82 8.0175C16.68 8.0175 15.78 7.1325 15.78 6.06C15.78 4.9875 16.68 4.1025 17.82 4.1025C18.96 4.1025 19.86 4.9875 19.86 6.06Z"
                stroke="#272727"></path>
            <path
                d="M13.0499 1.9275L19.9949 2.3775C20.8724 2.4375 21.5774 3.135 21.6299 4.005L22.0949 11.25C22.1249 11.76 21.9374 12.255 21.5699 12.615L12.2249 21.645C11.5424 22.305 10.4624 22.305 9.7799 21.645L2.3549 14.4675C1.6574 13.7925 1.6424 12.69 2.3249 12L11.6849 2.4525C12.0449 2.085 12.5399 1.8975 13.0574 1.9275H13.0499Z"
                stroke="#272727" stroke-linecap="round"></path>
            <path
                d="M14.0998 12.045C14.0998 12.045 12.8623 10.845 12.2398 10.2525C11.6173 9.6525 10.7398 9.8175 10.3798 10.2525C10.0198 10.6875 9.75734 11.4525 10.3798 12.045C10.7948 12.445 11.2073 12.845 11.6173 13.245C12.2398 13.845 11.9323 14.67 11.6173 15.0375C11.3023 15.405 10.3798 15.6375 9.75734 15.0375C9.13484 14.4375 7.89734 13.245 7.89734 13.245"
                stroke="#272727" stroke-linecap="round"></path>
            <path d="M12.8624 10.8525L14.0999 9.6525" stroke="#272727" stroke-linecap="round"></path>
            <path d="M7.90503 15.6375L9.14253 14.4375" stroke="#272727" stroke-linecap="round"></path>
        </svg>
        <span class="ms-2">Price range</span>
    </p>

    <div v-if="isOpen" class="menu menu-sub menu-sub-dropdown w-auto p-2 mt-10 shadow" :data-kt-menu="true"
        >
    <!-- <div v-show="isDropdownOpen" class="menu menu-sub menu-sub-dropdown w-auto p-2 mt-10 shadow" :data-kt-menu="true"
        :id="menuId"> -->
        <div class="d-flex" style="gap: 9px;">
            <p>Price range: </p>
            <input type="text" v-model="minPrice" @blur="handleBlur" aria-label="Minimum" class="form-control"
                maxlength="10" pattern="[0-9]*" inputmode="numeric" placeholder="Min" id="minValue">
            <input type="text" v-model="maxPrice" @blur="handleBlur" aria-label="Maximum" class="form-control"
                maxlength="10" pattern="[0-9]*" inputmode="numeric" placeholder="Max" id="maxValue">
        </div>

    </div>
</div>
</template>
<script setup>
// const menuTrigger = ref('click');
// const menuPlacement = ref('bottom-start');
// const menuId = ref('kt-toolbar-filter');

// const isDropdownOpen = ref(false);

// const toggleDropdown = () => {
//     isDropdownOpen.value = !isDropdownOpen.value;
// };
const isOpen = computed(() => activeMenu.value === 'Pricerange')  

function toggleDropdown() {
  if (isOpen.value) {
    closeMenu()
  } else {
    openMenu('Pricerange')
  }
}
const emit = defineEmits(['update-price'])

const minPrice = ref(null)
const maxPrice = ref(null)

// watch([minPrice, maxPrice], () => {
//   emit('update-price', {
//     min: minPrice.value,
//     max: maxPrice.value
//   }) 
// });
function handleBlur() {
    emit('update-price', {
        min: minPrice.value,
        max: maxPrice.value
    })
}

</script>
<style scoped>
.menu-sub-dropdown {
    z-index: 105;
    position: absolute;
    inset: 0px auto auto 0px;
    margin: 0px;
    margin-top: 0px;
    border-radius: .475rem;
    background-color: #fff;
    transform: translate(673px, 270px);
}
</style>