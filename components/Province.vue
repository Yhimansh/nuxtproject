<template>
    <div class="menu">
    <p class="show menu-dropdown" @click="toggleDropdown"> 
    <!-- <p class="show menu-dropdown" @click="toggleDropdown" :data-kt-menu-trigger="menuTrigger"
        :data-kt-menu-placement="menuPlacement">  -->
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.3"
                d="M18.0624 15.3454L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3454C4.56242 13.6454 3.76242 11.4452 4.06242 8.94525C4.56242 5.34525 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24525 19.9624 9.94525C20.0624 12.0452 19.2624 13.9454 18.0624 15.3454ZM13.0624 10.0453C13.0624 9.44534 12.6624 9.04534 12.0624 9.04534C11.4624 9.04534 11.0624 9.44534 11.0624 10.0453V13.0453H13.0624V10.0453Z"
                fill="currentColor" />
            <path
                d="M12.6624 5.54531C12.2624 5.24531 11.7624 5.24531 11.4624 5.54531L8.06241 8.04531V12.0453C8.06241 12.6453 8.46241 13.0453 9.06241 13.0453H11.0624V10.0453C11.0624 9.44531 11.4624 9.04531 12.0624 9.04531C12.6624 9.04531 13.0624 9.44531 13.0624 10.0453V13.0453H15.0624C15.6624 13.0453 16.0624 12.6453 16.0624 12.0453V8.04531L12.6624 5.54531Z"
                fill="currentColor" />
        </svg>
        <span class="ms-2">Province</span>
    </p>

    <div v-if="isOpen" class="menu menu-sub menu-sub-dropdown w-auto p-2 mt-10 shadow" :data-kt-menu="true"
        >
    <!-- <div v-show="isDropdownOpen" class="menu menu-sub menu-sub-dropdown w-auto p-2 mt-10 shadow" :data-kt-menu="true"
        :id="menuId"> -->
        <div class="row" @change="handleProvinceChange">
            <div class="col-3">
                <div class="form-check form-check-custom form-check-solid mb-5">
                    <input class="form-check-input" type="radio" value="AB" name="province" id="province" />
                    <label class="form-check-label" for="car-province">
                        Alberta
                    </label>
                </div>

                <div class="form-check form-check-custom form-check-solid mb-5">
                    <input class="form-check-input" type="radio" value="BC" name="province" id="province" />
                    <label class="form-check-label" for="car-province">
                        British Columbia
                    </label>
                </div>

                <div class="form-check form-check-custom form-check-solid mb-5">
                    <input class="form-check-input" type="radio" value="MB" name="province" id="province" />
                    <label class="form-check-label" for="car-province">
                        Manitoba
                    </label>
                </div>

                <div class="form-check form-check-custom form-check-solid">
                    <input class="form-check-input" type="radio" value="NB" name="province" id="province" />
                    <label class="form-check-label" for="car-province">
                        New Brunswick
                    </label>
                </div>
            </div>

            <div class="col-3">
                <div class="form-check form-check-custom form-check-solid mb-5">
                    <input class="form-check-input" type="radio" value="NL" name="province" id="province" />
                    <label class="form-check-label" for="car-province">
                        Newfoundland and Labrador
                    </label>
                </div>

                <div class="form-check form-check-custom form-check-solid mb-5">
                    <input class="form-check-input" type="radio" value="NS" name="province" id="province" />
                    <label class="form-check-label" for="car-province">
                        Nova Scotia
                    </label>
                </div>

                <div class="form-check form-check-custom form-check-solid mb-5">
                    <input class="form-check-input" type="radio" value="NT" name="province" id="province" />
                    <label class="form-check-label" for="car-province">
                        Northwest Territories
                    </label>
                </div>

                <div class="form-check form-check-custom form-check-solid">
                    <input class="form-check-input" type="radio" value="NU" name="province" id="province" />
                    <label class="form-check-label" for="car-province">
                        Nunavut
                    </label>
                </div>
            </div>

            <div class="col-3">
                <div class="form-check form-check-custom form-check-solid mb-5">
                    <input class="form-check-input" type="radio" value="ON" name="province" id="province" />
                    <label class="form-check-label" for="car-province">
                        Ontario
                    </label>
                </div>

                <div class="form-check form-check-custom form-check-solid mb-5">
                    <input class="form-check-input" type="radio" value="PE" name="province" id="province" />
                    <label class="form-check-label" for="car-province">
                        Prince Edward Island
                    </label>
                </div>

                <div class="form-check form-check-custom form-check-solid mb-5">
                    <input class="form-check-input" type="radio" value="QC" name="province" id="province" />
                    <label class="form-check-label" for="car-province">
                        Quebec
                    </label>
                </div>

                <div class="form-check form-check-custom form-check-solid">
                    <input class="form-check-input" type="radio" value="SK" name="province" id="province" />
                    <label class="form-check-label" for="car-province">
                        Saskatchewan
                    </label>
                </div>
            </div>

            <div class="col-3">
                <div class="form-check form-check-custom form-check-solid mb-3">
                    <input class="form-check-input" type="radio" value="YT" name="province" id="province" checked />
                    <label class="form-check-label" for="car-province">
                        Yukon
                    </label>
                </div>

                <div class="form-check form-check-custom form-check-solid">
                    <input class="form-check-input" type="radio" value="" name="province" id="province" checked />
                    <label class="form-check-label" for="car-province">
                        All
                    </label>
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
const isOpen = computed(() => activeMenu.value === 'Province')  

function toggleDropdown() {
  if (isOpen.value) {
    closeMenu()
  } else {
    openMenu('Province')
  }
}



const handleProvinceChange = (event) => {
  const selectedProvince = event.target.value;
  emit('update-province', selectedProvince); 
};
const emit = defineEmits(['update-province'])

</script>
<style >
.menu-sub-dropdown {
    z-index: 105;
    position: absolute;
    inset: 0px auto auto 0px;
    margin: 0px;
    border-radius: .475rem;
    background-color: #fff;
    margin-top: 0px;
    transform: translate(295px, 270px);
}
</style>