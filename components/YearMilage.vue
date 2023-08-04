<template>
    <div class="menu">

    <div class="sc-kpHvgf gCMaXe">
        <p class="show menu-dropdown" @click="toggleDropdown" >
        <!-- <p class="show menu-dropdown" @click="toggleDropdown" :data-kt-menu-trigger="menuTrigger"
            :data-kt-menu-placement="menuPlacement"> -->
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M18.6602 12.21L16.6277 2.59499C16.5377 2.18249 16.1852 1.88999 15.7727 1.88999H6.67519C6.27769 1.88999 5.9252 2.16749 5.8277 2.57249L1.8977 18.72C1.7627 19.29 2.1752 19.8375 2.7452 19.8375H13.4252"
                    stroke="#272727"></path>
                <path d="M9.04469 1.8975L5.54968 19.845" stroke="#272727"></path>
                <path d="M13.4176 1.8975L15.6001 12.6675" stroke="#272727"></path>
                <path d="M11.2352 7.2825V9.525" stroke="#272727" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M11.2352 2.3475V4.59" stroke="#272727" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M11.2352 17.145V19.3875" stroke="#272727" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M11.2352 12.21V14.4525" stroke="#272727" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M17.3477 14.46V17.475L18.6602 18.9525" stroke="#272727" stroke-linecap="round"></path>
                <path
                    d="M17.3475 22.08C20.0027 22.08 22.155 19.8705 22.155 17.145C22.155 14.4195 20.0027 12.21 17.3475 12.21C14.6924 12.21 12.54 14.4195 12.54 17.145C12.54 19.8705 14.6924 22.08 17.3475 22.08Z"
                    stroke="#272727"></path>
            </svg>
            <span class="ms-2">Year &amp; Mileage</span>
        </p>

        <div v-if="isOpen" class="menu menu-sub menu-sub-dropdown w-auto p-2 mt-10 shadow" :data-kt-menu="true"
            >
        <!-- <div v-show="isDropdownOpen" class="menu menu-sub menu-sub-dropdown w-auto p-2 mt-10 shadow" :data-kt-menu="true"
            :id="menuId"> -->

            <div class="d-flex flex-wrap text-center" style="gap: 20px;">
                <div class="d-flex" style="gap: 9px;">
                    <p>Year range: </p>
                    <input type="text" aria-label="Minimum" class="form-control" maxlength="10" pattern="[0-9]*"
                        inputmode="numeric" placeholder="Min" id="car-min-year">
                    <input type="text" aria-label="Maximum" class="form-control" maxlength="10" pattern="[0-9]*"
                        inputmode="numeric" placeholder="Max" id="car-max-year">
                </div>

                <div class="d-flex" style="gap: 9px;">
                    <p>Mileage: </p>
                    <input type="text" aria-label="Minimum" class="form-control" maxlength="10" pattern="[0-9]*"
                        inputmode="numeric" placeholder="Min" id="minKMValue">
                    <input type="text" aria-label="Maximum" class="form-control" maxlength="10" pattern="[0-9]*"
                        inputmode="numeric" placeholder="Max" id="maxKMValue">
                </div>
            </div>

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
const isOpen = computed(() => activeMenu.value === 'YearMilage')  

function toggleDropdown() {
  if (isOpen.value) {
    closeMenu()
  } else {
    openMenu('YearMilage')
  }
}

</script>
<style scoped
>
.menu-sub-dropdown {
    z-index: 105;
    border-radius: .475rem;
    background-color: #fff;
    position: absolute;
}
</style>