<template>
    <div class="menu">
    <div class="sc-kpHvgf gCMaXe">
        <p class="show menu-dropdown" @click="toggleDropdown">
            <!-- <p class="show menu-dropdown" @click="toggleDropdown" :data-kt-menu-trigger="menuTrigger"
            :data-kt-menu-placement="menuPlacement"> -->
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.08789 22.1475V14.475" stroke="#272727" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M4.08789 9.81V1.8975" stroke="#272727" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M12.0154 22.1475V8.49001" stroke="#272727" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M12.0154 3.66V1.8975" stroke="#272727" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M19.9352 22.1475V17.955" stroke="#272727" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M19.9352 13.3275V1.8975" stroke="#272727" stroke-linecap="round" stroke-linejoin="round"></path>
                <path
                    d="M4.08763 14.205C5.30128 14.205 6.28514 13.2211 6.28514 12.0075C6.28514 10.7939 5.30128 9.81 4.08763 9.81C2.87399 9.81 1.89014 10.7939 1.89014 12.0075C1.89014 13.2211 2.87399 14.205 4.08763 14.205Z"
                    stroke="#272727"></path>
                <path
                    d="M12.0151 8.48999C13.2288 8.48999 14.2126 7.50614 14.2126 6.29249C14.2126 5.07885 13.2288 4.09499 12.0151 4.09499C10.8015 4.09499 9.81763 5.07885 9.81763 6.29249C9.81763 7.50614 10.8015 8.48999 12.0151 8.48999Z"
                    stroke="#272727"></path>
                <path
                    d="M19.9354 17.7225C21.1491 17.7225 22.1329 16.7386 22.1329 15.525C22.1329 14.3114 21.1491 13.3275 19.9354 13.3275C18.7218 13.3275 17.7379 14.3114 17.7379 15.525C17.7379 16.7386 18.7218 17.7225 19.9354 17.7225Z"
                    stroke="#272727"></path>
            </svg>
            <span class="ms-2">More fillters</span>
        </p>
        <div v-if="isOpen" class="menu menu-sub menu-sub-dropdown w-auto p-2 mt-10 shadow" :data-kt-menu="true">
            <div class="exteriorColor">
                <p class="fw-bolder">Exterior colour</p>
                <div class="d-flex flex-wrap" style="gap: 9px;">
                    <!-- <div v-for="color in exteriorColors" :key="color.name" class="kQjinY" @click="handleColorClick(color.name)"> -->
                    <!-- <div :class="color.color" class="hi border"></div> -->
                    <div v-for="color in exteriorColors" :key="color.name"
                        :class="['kQjinY', { 'selected': selectedColor.includes(color.name) }]"
                        @click="handleColorClick(color)">
                        <div :class="[color.color, 'hi', 'border']"></div>
                        {{ color.name }}
                    </div>

                </div>
            </div>
            <hr>
            <div class="separator mt-1 mb-5 border-2 border-secondary"></div>
            <div class="carseat">
                <p class="fw-bolder">Seats</p>
                <div class="d-flex flex-wrap" style="gap: 9px;">
                    <div v-for="seat in seats" :key="seat.name"
                        :class="['kQjinY', { 'selected': selectedSeats.includes(seat.name) }]"
                        @click="handleSeatClick(seat)">
                        <!-- <div v-for="seat in seats" :key="seat.name" class="kQjinY" @click="handleSeatClick(seat.name)"> -->
                        {{ seat.name }}
                    </div>
                </div>
            </div>


            <hr>
            <div class="separator mt-10 mb-5 border-2 border-secondary"></div>

            <div class="transmission">
                <p class="fw-bolder">Transmission</p>
                <div class="d-flex flex-wrap" style="gap: 9px;">
                    <div v-for="transmission in transmissions" :key="transmission.name"
                        :class="['kQjinY', { 'selected': selectedtransmission === transmission.name }]"
                        @click="handletransmissionClick(transmission)">

                        {{ transmission.name }}
                    </div>
                </div>
            </div>

            <div class="separator mt-10 mb-5 border-2 border-secondary"></div>

            <div class="fuelType">
                <p class="fw-bolder">Fuel type</p>
                <div class="d-flex flex-wrap" style="gap: 9px;">
                    <div v-for="fuelType in fuelTypes" :key="fuelType.name"
                        :class="['kQjinY', { 'selected': selectedFuelType === fuelType.name }]"
                        @click="handleFuelTypeClick(fuelType)">
                        {{ fuelType.name }}
                    </div>

                </div>
            </div>

            <div class="separator mt-10 mb-5 border-2 border-secondary"></div>

            <div class="drivetrain">
                <p class="fw-bolder">Drivetrain</p>
                <div class="d-flex flex-wrap" style="gap: 9px;">
                    <div v-for="drivetrain in drivetrains" :key="drivetrain.name"
                        :class="['kQjinY', { 'selected': selecteddrivetrain === drivetrain.name }]"
                        @click="handledrivetrainClick(drivetrain)">
                        {{ drivetrain.name }}
                    </div>

                </div>
            </div>

            <div class="separator mt-10 mb-5 border-2 border-secondary"></div>

            <div class="cylinders">
                <p class="fw-bolder">Cylinders</p>
                <div class="d-flex flex-wrap" style="gap: 9px;">
                    <div v-for="cylinder in cylinders" :key="cylinder.name"
                        :class="['kQjinY', { 'selected': selectedcylinder === cylinder.name }]"
                        @click="handlecylinderClick(cylinder)">
                        {{ cylinder.name }}
                    </div>
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
const selectedColor = ref([])
const exteriorColors = [
    { name: 'Black', color: 'bg-dark' },
    { name: 'White', color: 'bg-white' },
    { name: 'Grey', color: 'bg-secondary' },
    { name: 'Silver', color: 'bg-light' },
    { name: 'Blue', color: 'bg-primary' },
    { name: 'Red', color: 'bg-danger' },
    { name: 'Green', color: 'bg-success' },
    { name: 'Yellow', color: 'bg-warning' },
]
function handleColorClick(color) {
    const index = selectedColor.value.indexOf(color.name)
    if (index !== -1) {
        // Already selected, remove it
        selectedColor.value.splice(index, 1)
    } else {
        // Add to selections
        selectedColor.value.push(color.name)
    }
   
    const selectedString = selectedColor.value.join(', ')

    emits('colorClick', {
        selectedString
    })
}

const selectedSeats = ref([])
const seats = [
    { name: '2 seats' },
    { name: '4 seats' },
    { name: '5 seats' },
    { name: '6 seats' },
    { name: '7 seats' },
    { name: '8 seats' },
    { name: '9 seats' },
]

function handleSeatClick(seat) {
    const index = selectedSeats.value.indexOf(seat.name)
    if (index !== -1) {
        selectedSeats.value.splice(index, 1)
    } else {
        selectedSeats.value.push(seat.name)
    }
    // const selectedString = selectedSeats.value.join(', ')
    // Map to new strings
    const mappedSeats = selectedSeats.value.map(name => {
        return name.replace(' seats', '')
    })

    const selectedString = mappedSeats.join(', ')
    emits('seatClick', selectedString)
}

//handle transmission
const selectedtransmission = ref([])
const transmissions = [
    { name: 'Automatic' },
    { name: 'Manual' },
]

function handletransmissionClick(transmission) {
    // selectedtransmission.value = selectedtransmission.value === transmission.name ? '' : transmission.name;
    const index = selectedtransmission.value.indexOf(transmission.name)
    if (index !== -1) {
        // Already selected, remove it
        selectedtransmission.value.splice(index, 1)
    } else {
        // Add to selections
        selectedtransmission.value.push(transmission.name)
    }
    const selectedString = selectedtransmission.value.join(', ')
    emits('transmissionClick', {
        selectedString
    })
}

//handle Fuel type
const selectedFuelType = ref([])
const fuelTypes = [
    { name: 'Gasoline/Mild Electric Hybrid' },
    { name: 'Plugin-In Hybrid' },
    { name: 'Electric/Gas' },
    { name: 'Gasoline' },
    { name: 'Electric' },
    { name: 'Hydrogen' },
    { name: 'Hybrid' },
    { name: 'Diesel' },
]
function handleFuelTypeClick(fuelType) {
    // selectedFuelType.value = selectedFuelType.value === fuelType.name ? '' : fuelType.name;
    const index = selectedFuelType.value.indexOf(fuelType.name)
    if (index !== -1) {
        // Already selected, remove it
        selectedFuelType.value.splice(index, 1)
    } else {
        // Add to selections
        selectedFuelType.value.push(fuelType.name)
    }
    const selectedString = selectedFuelType.value.join(', ')
    emits('fuelTypeClick', {
        selectedString
    })
}
//handle drivetrain
const selecteddrivetrain = ref([])
const drivetrains = [
    { name: 'FWD' },
    { name: 'AWD' },
    { name: '4WD' },
    { name: 'RWD' },
]
function handledrivetrainClick(drivetrain) {
    // selecteddrivetrain.value = selecteddrivetrain.value === drivetrain.name ? '' : drivetrain.name;
    const index = selecteddrivetrain.value.indexOf(drivetrain.name)
    if (index !== -1) {
        // Already selected, remove it
        selecteddrivetrain.value.splice(index, 1)
    } else {
        // Add to selections
        selecteddrivetrain.value.push(drivetrain.name)
    }
    const selectedString = selecteddrivetrain.value.join(', ')
    emits('drivetrainClick', {
        selectedString

    })
}

//handle cylinders type
const selectedcylinder = ref([])
const cylinders = [
    { name: 'Boxer(4 cyl.)' },
    { name: 'Boxer(6 cyl.)' },
    { name: 'Flat-six' },
    { name: 'Rotary' },
]
function handlecylinderClick(cylinder) {
    // selectedcylinder.value = selectedcylinder.value === cylinder.name ? '' : cylinder.name;
    const index = selectedcylinder.value.indexOf(cylinder.name)
    if (index !== -1) {
        // Already selected, remove it
        selectedcylinder.value.splice(index, 1)
    } else {
        // Add to selections
        selectedcylinder.value.push(cylinder.name)
    }
    const selectedString = selectedcylinder.value.join(', ')
    emits('cylinderClick', {
        selectedString
    })
}

//handle emits for more filter
const emits = defineEmits(['colorClick', 'seatClick', 'transmissionClick', 'fuelTypeClick', 'drivetrainClick', 'cylinderClick']);


const isOpen = computed(() => activeMenu.value === 'Morefilter')

function toggleDropdown() {
    if (isOpen.value) {
        closeMenu()
    } else {
        openMenu('Morefilter')
    }
}

</script>
<style scoped>
.menu-sub-dropdown {
    z-index: 105;
    position: absolute;
    inset: 0px auto auto 0px;
    margin: 0px;
    border-radius: .475rem;
    background-color: #fff;
    transform: translate(446px, 271px);
}

.kQjinY.selected {
    border-color: red;
    /* Add border color to selected color box */
}

.kQjinY {
    box-sizing: border-box;
    display: flex;
    padding: 12px;
    gap: 8px;
    height: 35px;
    background: rgb(255, 255, 255);
    border: 1px solid rgb(221, 221, 221);
    border-radius: 8px;
    cursor: pointer;
    -webkit-box-align: center;
    align-items: center;
    font-weight: 400;
}

.hi {
    width: 23px;
    height: 23px;
    border-radius: 50%;

}
</style>