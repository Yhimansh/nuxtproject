
<template>
    <div>

        <div class="row">
            <div class="col-4"></div>
            <div class="col-4 search text-center mb-3 rounded-pill">
                <i class="fa fa-search"></i>
                <input v-model="searchInput" class="form-control rounded-pill" id="search-input"
                    placeholder="Search vehicles, models, or keywords">
                <!-- <input v-model="searchQuery.filterSearch" @input="handleSearch(searchQuery)"
                    class="form-control rounded-pill" id="search-input" placeholder="Search vehicles, models, or keywords"> -->
            </div>

            <div class="col-4"></div>

        </div>
        <div class="d-flex align-items-stretch justify-content-between flex-lg-grow-1 mb-5" id="kt_app_header_wrapper">
            <div>
                <Province @update-province="handleProvince" />
            </div>

            <div>
                <p class="show menu-dropdown" :class="{ 'menu-open': menuOpen }" @click="toggleMenu">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.55995 7.3275L4.68745 7.8C4.80745 8.2275 4.47746 8.6475 4.03496 8.6475H2.87996C2.29496 8.6475 1.82996 8.1825 1.82996 7.605C1.82996 7.0275 2.30246 6.5625 2.87996 6.5625H3.54746C4.01996 6.5625 4.43995 6.8775 4.55995 7.335V7.3275Z"
                            stroke="#272727" stroke-linecap="round"></path>
                        <path
                            d="M19.4473 7.3275L19.3198 7.8C19.1998 8.2275 19.5298 8.6475 19.9723 8.6475H21.1273C21.7123 8.6475 22.1773 8.1825 22.1773 7.605C22.1773 7.0275 21.7048 6.5625 21.1273 6.5625H20.4598C19.9873 6.5625 19.5673 6.8775 19.4473 7.335V7.3275Z"
                            stroke="#272727" stroke-linecap="round"></path>
                        <path
                            d="M2.26501 12.54C2.26501 10.5 4.33501 7.785 7.13251 7.785H16.8675C19.305 7.785 21.735 9.825 21.735 12.54V15.9375V16.8975C21.735 17.865 20.94 18.6525 19.965 18.6525H4.03501C3.06001 18.6525 2.26501 17.865 2.26501 16.8975V12.54V12.54Z"
                            stroke="#272727" stroke-linejoin="round"></path>
                        <path
                            d="M4.88245 7.995C4.88245 4.8525 6.49495 1.935 8.28745 1.935H15.4574C17.2499 1.935 19.0424 4.275 19.0424 7.995"
                            stroke="#272727" stroke-linejoin="round"></path>
                        <path
                            d="M6.68982 19.0725V18.3225C6.68982 17.355 7.48481 16.5675 8.45981 16.5675H15.5398C16.5148 16.5675 17.3098 17.355 17.3098 18.3225V19.0725"
                            stroke="#272727"></path>
                        <path
                            d="M3.14966 18.4875V21.18C3.14966 21.7125 3.54716 22.14 4.03466 22.14H5.80466C6.29216 22.14 6.68966 21.7125 6.68966 21.18V18.4875"
                            stroke="#272727"></path>
                        <path
                            d="M17.3171 18.6525V21.2625C17.3171 21.75 17.7146 22.14 18.2021 22.14H19.9721C20.4596 22.14 20.8571 21.75 20.8571 21.2625V18.6525"
                            stroke="#272727"></path>
                        <path
                            d="M4.92004 12.5925C4.92004 12.045 5.41504 11.6325 5.96254 11.73L7.73254 12.045C8.15254 12.12 8.46004 12.4875 8.46004 12.9075V13.1775C8.46004 13.665 8.06254 14.055 7.57504 14.055H5.80504C5.31754 14.055 4.92004 13.665 4.92004 13.1775V12.6V12.5925Z"
                            stroke="#272727"></path>
                        <path
                            d="M18.645 12.5925C18.645 12.045 18.15 11.6325 17.6025 11.73L15.8325 12.045C15.4125 12.12 15.105 12.4875 15.105 12.9075V13.1775C15.105 13.665 15.5025 14.055 15.99 14.055H17.76C18.2475 14.055 18.645 13.665 18.645 13.1775V12.6V12.5925Z"
                            stroke="#272727"></path>
                    </svg>
                    <span class="ms-2">Make &amp; model</span>
                </p>
                <div v-if="menuOpen" class="menu menu-sub menu-sub-dropdown w-1000px p-10 mt-10 car-make-model"
                    data-kt-menu="true" id="kt-toolbar-filter">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="form-check col-3 mb-5">
                                    <input class="form-check-input" type="checkbox" value="asdfasfa" id="car_make" />
                                    <label class="form-check-label" for="car_make">
                                        AB
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--  <div>
                <ComponentA />
            </div>
            <div>
                <ComponentB />
            </div> -->
            <div>
                <PriceRange @update-price="handlePriceChange" />
            </div>
            <div>
                <BodyType />
            </div>
            <div>
                <YearMilage />
            </div>
            <div>
                <Morefilter @colorClick="handleColorClick" @seatClick="handleSeatClick"
                    @transmissionClick="handleTransmissionClick" @fuelTypeClick="handlefuelTypeClick"
                    @drivetrainClick="handledrivetrainClick" @cylinderClick="handlecylinderClick" />
                <!-- <Morefilter :setSelectedColor="color => child.selectedColor = color"
                    :setSelectedSeats="seats => child.selectedSeats = seats" /> -->
            </div>
            <!-- <div class="sc-kpHvgf gCMaXe">
                <p class="dropdown-toggle show menu-dropdown" :class="{ 'menu-open': openyear }" @click="toggleYear">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18.6602 12.21L16.6277 2.59499C16.5377 2.18249 16.1852 1.88999 15.7727 1.88999H6.67519C6.27769 1.88999 5.9252 2.16749 5.8277 2.57249L1.8977 18.72C1.7627 19.29 2.1752 19.8375 2.7452 19.8375H13.4252"
                            stroke="#272727"></path>
                        <path d="M9.04469 1.8975L5.54968 19.845" stroke="#272727"></path>
                        <path d="M13.4176 1.8975L15.6001 12.6675" stroke="#272727"></path>
                        <path d="M11.2352 7.2825V9.525" stroke="#272727" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                        <path d="M11.2352 2.3475V4.59" stroke="#272727" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                        <path d="M11.2352 17.145V19.3875" stroke="#272727" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                        <path d="M11.2352 12.21V14.4525" stroke="#272727" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                        <path d="M17.3477 14.46V17.475L18.6602 18.9525" stroke="#272727" stroke-linecap="round"></path>
                        <path
                            d="M17.3475 22.08C20.0027 22.08 22.155 19.8705 22.155 17.145C22.155 14.4195 20.0027 12.21 17.3475 12.21C14.6924 12.21 12.54 14.4195 12.54 17.145C12.54 19.8705 14.6924 22.08 17.3475 22.08Z"
                            stroke="#272727"></path>
                    </svg>
                    <span class="ms-2">Year &amp; Mileage</span>
                </p>
                <YearMilage v-if="openyear" />
            </div> -->
            <!-- <div class="sc-kpHvgf gCMaXe">
                <p class="dropdown-toggle show menu-dropdown" :class="{ 'menu-open': open }" @click="toggle">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.08789 22.1475V14.475" stroke="#272727" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                        <path d="M4.08789 9.81V1.8975" stroke="#272727" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                        <path d="M12.0154 22.1475V8.49001" stroke="#272727" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                        <path d="M12.0154 3.66V1.8975" stroke="#272727" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                        <path d="M19.9352 22.1475V17.955" stroke="#272727" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                        <path d="M19.9352 13.3275V1.8975" stroke="#272727" stroke-linecap="round" stroke-linejoin="round">
                        </path>
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
                    <span>More Filters</span>
                </p>
                <Morefilter v-if="open" />
            </div>  -->
        </div>

        <hr />
        <div class="separator mt-1 mb-10 border-2 border-secondary"></div>
        <div v-if="loading" class="mb-4" style="display: flex;justify-content: center;">
            <div class="spinner-border" role="status">
                <span class="sr-only"></span>
            </div>
        </div>
        <div class="row" id="show-list">
            <template v-for="(pageData, pageIndex) in invValue" :key="pageIndex">
                <template v-for="(result, index) in pageData" :key="index">
                    <template
                        v-if="result.vehicles_tks_make !== '' && result.vehicles_tks_model !== '' && result.vehicles_tks_year !== '' && result.vehicles_tks_year !== '0'">
                        <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                            <div class="card mb-5">
                                <NuxtLink :to="`/inventory-details/${result.id}`" target="_blank">
                                    <img v-if="result.hasOwnProperty('img')" :src="result.img" alt="Image" class="card-img"
                                        style="width: 100%; height: 324px;" />
                                    <img v-else
                                        src="https://img.freepik.com/premium-photo/blue-premium-business-sedan-car-sports-configuration-white-background-3d-rendering_101266-26564.jpg"
                                        alt="Image" class="card-img" style="width: 100%; height: 324px;" />
                                </NuxtLink>
                                <div class="mt-4">
                                    <div
                                        class="d-flex align-items-stretch justify-content-between flex-lg-grow-1 mt-0 pt-0">

                                        <div>
                                            <NuxtLink class="mb-0 pb-0" :to="`/inventory-details/${result.id}`"
                                                target="_blank">
                                                <p class="fw-bolder text-dark fs-5">
                                                    {{ result.vehicles_tks_year }}
                                                    {{ result.vehicles_tks_make }}
                                                    {{ result.vehicles_tks_model }}
                                                </p>
                                            </NuxtLink>
                                        </div>

                                        <div>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.3"
                                                    d="M18.0624 15.3454L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3454C4.56242 13.6454 3.76242 11.4452 4.06242 8.94525C4.56242 5.34525 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24525 19.9624 9.94525C20.0624 12.0452 19.2624 13.9454 18.0624 15.3454ZM13.0624 10.0453C13.0624 9.44534 12.6624 9.04534 12.0624 9.04534C11.4624 9.04534 11.0624 9.44534 11.0624 10.0453V13.0453H13.0624V10.0453Z"
                                                    fill="currentColor" />
                                                <path
                                                    d="M12.6624 5.54531C12.2624 5.24531 11.7624 5.24531 11.4624 5.54531L8.06241 8.04531V12.0453C8.06241 12.6453 8.46241 13.0453 9.06241 13.0453H11.0624V10.0453C11.0624 9.44531 11.4624 9.04531 12.0624 9.04531C12.6624 9.04531 13.0624 9.44531 13.0624 10.0453V13.0453H15.0624C15.6624 13.0453 16.0624 12.6453 16.0624 12.0453V8.04531L12.6624 5.54531Z"
                                                    fill="currentColor" />
                                            </svg>
                                            <span class="fw-bolder fs-7">
                                                {{ result.cf_1601 }}
                                                <!-- {{ result.cf_1601 ? renderProvince[result.cf_1601] : "N/A" }} -->
                                            </span>
                                        </div>
                                    </div>

                                    <div
                                        class="d-flex align-items-stretch justify-content-between flex-lg-grow-1 mt-0 pt-0">

                                        <p>$ {{ parseFloat(result.vehicles_tks_unitprice) }}
                                            <NuxtLink class="mb-0 pb-0" :to="`/inventory-details/${result.id}`"
                                                target="_blank">
                                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg" class="sc-iEPtyo etwPOW">
                                                    <g clip-path="url(#clip0_1382_6864)">
                                                        <path
                                                            d="M15.25 8.5C15.25 12.5041 12.0041 15.75 8 15.75C3.99594 15.75 0.75 12.5041 0.75 8.5C0.75 4.49594 3.99594 1.25 8 1.25C12.0041 1.25 15.25 4.49594 15.25 8.5Z"
                                                            stroke="#007570" stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                        <path d="M8 5H8.00667" stroke="#007570" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M8 12V8" stroke="#007570" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_1382_6864">
                                                            <rect width="16" height="16" fill="white"
                                                                transform="translate(0 0.5)">
                                                            </rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </NuxtLink>
                                        </p>
                                        <p class="fs-8">Vin :
                                            {{ result.vehicles_tks_vin }}
                                        </p>
                                        <p>
                                            {{ result.vehicles_tks_km ? result.vehicles_tks_km : "N/A" }}
                                            km</p>
                                    </div>
                                    <div
                                        class="d-flex align-items-stretch justify-content-between flex-lg-grow-1 mt-0 pt-0">

                                        <div>

                                            {{ result.vehiclesno }}

                                        </div>
                                        <div>
                                            <!-- <button class="btn btn-success float-end" id="request-offer" ><i class="fa fa-paper-plane fa-2x"></i> Offer</button>-->
                                            {{ result.bid_tks_status }}
                                            <button class="btn btn-sm btn-success btn-request-offer"><i
                                                    class="fa fa-paper-plane fa-2x"></i> Offer</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </template>
            </template>
        </div>

        <div class="row d-none" id="show-filter-list">
        </div>

        <div class="d-none flex-column flex-center text-center p-10" id="no-car-error">
            <!--begin::Wrapper-->
            <div class="card card-flush w-lg-650px py-5">
                <div class="card-body py-15 py-lg-20">

                    <!--begin::Title-->
                    <h1 class="fw-bolder fs-2hx text-gray-900 mb-4">
                        Oops!
                    </h1>
                    <!--end::Title-->

                    <!--begin::Text-->
                    <div class="fw-semibold fs-6 text-gray-500 mb-7">
                        No Car available.
                    </div>
                    <!--end::Text-->
                </div>
            </div>
            <!--end::Wrapper-->
        </div>

    </div>
</template>
<script setup>
const { invValue, filtersApplied, fetchInventory } = useInventoryApi();
const page = 1;
const pageLimit = 20;
const loading = ref(true);
// const route = useRoute()
// const currentPage = route.path
// console.log('path', currentPage)
// (async () => {
//     try {
//         await fetchInventory(page, pageLimit);
//         loading.value = false;
//     } catch (error) {
//         console.error('Error fetching inventory:', error);
//         loading.value = false;
//     }
// })();
const searchQuery = reactive({
    filterSearch: ''
})

const searchInput = ref('')

async function fetchFilteredInventory() {
    loading.value = true
    try {
        
            const filters = ({
                'searchInput': searchInput.value,
                'minPrice': priceRange.value.min,
                'maxPrice': priceRange.value.max,
                'province': provinceChange.value,
                'exteriorColor': exteriorColorSelected.value,
                'transmission': transmissionSelected.value,
                'carseat': seatSelected.value,
                'fuelType': fuelTypeSelected.value,
                'drivetrain': drivetrainSelected.value,
            })
            await fetchInventory(page, pageLimit, filters);
        
            // await fetchInventory(page, pageLimit);
        
        loading.value = false
    } catch (error) {
        console.error(error)
        loading.value = false
    }
}


// watch(searchInput, async (newValue) => {
//     loading.value = true
//     await fetchFilteredInventory()
// })

// watch(priceRange, async (newValue) => {
//     loading.value = true
//     await fetchFilteredInventory()
// })

// watch(provinceChange, async (newValue) => {
//     loading.value = true
//     await fetchFilteredInventory()
// })


//for child pricechange
const priceRange = ref({
    min: null,
    max: null
})
function handlePriceChange(price) {
    priceRange.value = price
}

//for child provincechange
const provinceChange = ref('')
const handleProvince = (selectedProvince) => {
    provinceChange.value = selectedProvince;
};

//for child colorselect
const exteriorColorSelected = ref([]);
const handleColorClick = (colorName) => {
    exteriorColorSelected.value = colorName.selectedString
    //   console.log("color", exteriorColorSelected.value);
};

//for child seatselect
const seatSelected = ref([]);
const handleSeatClick = (seatName) => {
    seatSelected.value = seatName;
    console.log(seatSelected.value)
};

//for child transmission change
const transmissionSelected = ref('');
const handleTransmissionClick = (transmissionName) => {
    transmissionSelected.value = transmissionName.selectedString
    console.log(transmissionSelected.value)
}
//for child fueltype change
const fuelTypeSelected = ref('')
const handlefuelTypeClick = (fueltypeName) => {
    fuelTypeSelected.value = fueltypeName.selectedString
    console.log(fuelTypeSelected.value)
}

//for child drivetrain change
const drivetrainSelected = ref('')
const handledrivetrainClick = (drivetrainName) => {
    drivetrainSelected.value = drivetrainName.selectedString
    console.log(drivetrainSelected.value)
}
//for child cylenders change 
const cylinderSelected = ref('')
const handlecylinderClick = (cylinderName) => {
    cylinderSelected.value = cylinderName.selectedString
    console.log(cylinderSelected.value)
}
watch([searchInput,priceRange, provinceChange, exteriorColorSelected, seatSelected, transmissionSelected, fuelTypeSelected, drivetrainSelected, cylinderSelected,], async () => {
    loading.value = true
    if(provinceChange.value == '')
    {
    filtersApplied.value = false
    }else{
    filtersApplied.value = true
    }
    await fetchFilteredInventory();
});
fetchFilteredInventory()



onMounted(() => {
    document.addEventListener('click', handleOutsideClick)
})

onUnmounted(() => {
    document.removeEventListener('click', handleOutsideClick)
})

const handleOutsideClick = (e) => {
    if (!e.target.closest('.menu')) {
        closeMenu()
    }
}


const menuOpen = ref(false)

function toggleMenu() {
    menuOpen.value = !menuOpen.value
}


// const page = 1;
// const pageLimit = 20;
// await fetch();
// async function fetch() {
//     await fetchInventory(page, pageLimit);
// }
// const fetchData = async (page, pageLimit) => {
//     await fetchInventory(page, pageLimit);
// };
// fetchData();

// const invValueData = useAsyncData(async () => {
//     const { fetchInventory } = useInventoryApi();
//     const page = 1;
//     const pageLimit = 20;
//     const { invValue } = await fetchInventory(page, pageLimit);
//     return { invValue };
// });
// console.log(invValueData)
// const invValue = ref(invValueData.invValue);  -->
// const { invValue, fetchInventory, handleScroll } = useInventoryApi()

// onMounted(async () => {
//     await fetchInventory(1, 20);
//     handleScroll();
// });
// const debouncedOnPageScrollInventory = debounce(onpagescrollInventory, 500); // Adjust the debounce delay as needed (500 milliseconds in this example)
// const invValue = allInventoryData();
// const invValue = ref([]);
// let currentPage = 1;




// const url =
//     "http://localhost/yugoxm/v7crm/modules/CustomerPortal/api.php";
// const allInventory = async (page, pageLimit) => {
//     var formdata = new FormData();
//     formdata.append("_operation", "FetchRecords");
//     formdata.append("module", "Vehicles");
//     formdata.append("moduleLabel", "Vehicles");
//     formdata.append("appKey", "4d293a95aa430bc2960e263bc1ccb203");
//     formdata.append("userRole", "1");
//     formdata.append("orgId", "28375");
//     formdata.append("pageLimit", pageLimit);
//     formdata.append("page", page);

//     const { data } = await useFetch(url, {
//         method: "post",
//         body: formdata,
//     });
//     // console.log(data.value)
//     const invdata = await JSON.parse(data.value);
//     const dataArray = Object.values(invdata);
//     const filteredDataArray = dataArray.filter(item => item !== true);
//     if (page === 1) {
//         invValue.value = filteredDataArray;
//     } else {
//         invValue.value.push(...filteredDataArray);
//     }
//     // console.log(invValue.value);
// }

// allInventory(1, 20);
// onMounted(() => {
//     allInventory(1, 20);
// });
// onUnmounted(() => {
//     window.removeEventListener('scroll', handleScroll);
// });
// watch(invValue.value, () => {
//     scrollToTop()
// })
// const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' })
// }

// const handleScroll = (e) => {
//     const currentScroll = window.scrollY;
//     // console.log(currentScroll)
//     const windowHeight = window.innerHeight;
//     const documentHeight = document.documentElement.scrollHeight;
//     const bottom = documentHeight - windowHeight;
//     // if (currentScroll + windowHeight >= bottom) {}
//     if (currentScroll >= bottom) {

//         currentPage++;
//         console.log("currentpage", currentPage)
//         const page = currentPage;
//         const pageLimit = 20;
//         // allInventory(page, pageLimit);
//         fetchInventory(page, pageLimit);
//     }
// };
// if (process.client) {
//     window.addEventListener('scroll', handleScroll);
//     // window.addEventListener('scroll', (e) => {
//     //     // console.log(window.scrollY)
//     //     // const currentScroll = e.target.scrollTop;
//     //     const currentScroll = window.scrollY;
//     //     if (currentScroll > 1988) {
//     //         const page = Math.floor(currentScroll / 1988) + 1;
//     //         console.log('page', page)
//     //         const pageLimit = 20;
//     //         console.log('pageLimit', pageLimit);
//     //         onpagescrollInventory(page, pageLimit);
//     //     }
//     // });
// }

const provinces = reactive([
    {
        code: 'AB',
        name: 'Alberta'
    },
    {
        code: 'BC',
        name: 'British Columbia'
    },
    {
        code: 'MB',
        name: 'Manitoba'
    },
    {
        code: 'NB',
        name: 'New Brunswick'
    },
    {
        code: 'NL',
        name: 'Newfoundland and Labrador'
    },
    {
        code: 'NS',
        name: 'Nova Scotia'
    },
    {
        code: 'NT',
        name: 'Northwest Territories'
    },
    {
        code: 'NU',
        name: 'Nunavut'
    },
    {
        code: 'ON',
        name: 'Ontario'
    },
    {
        code: 'PE',
        name: 'Prince Edward Island'
    },
    {
        code: 'QC',
        name: 'Quebec'
    },
    {
        code: 'SK',
        name: 'Saskatchewan'
    },
    {
        code: 'YT',
        name: 'Yukon'
    }
]);

const renderProvince = (cf_1601) => {
    return provinces.find((province) => province.code === cf_1601);
};
// onMounted(async () => {
//     async function fetchData() {
//         const { data } = await allInventory();
//         console.log("inventory", data.value)
//         // fetchvalue = data;
//     }

//     await fetchData();
// });
</script>
<!-- <script>
export default {
    async asyncData({ params }) {
        const { fetchInventory } = useInventoryApi();
        const page = 1;
        const pageLimit = 20;
        const { invValue } = await fetchInventory(page, pageLimit);
        return { invValue };
    },
};
</script> -->
<style scoped>
#bg-themeColor {
    background: rgba(0, 0, 0, 0) linear-gradient(to right, #3c8685 0%, #b0d9ad 100%) repeat scroll 0 0 !important;
}

label.customBorder,
div.customBorder {
    border: solid 0.12px #ccc;
}

div.customBorder:hover {
    border: solid 0.12px #000;
}

div.customBorderCard {
    border: solid 0.12px #ccc;
}

.customBorderCosigners {
    border: solid 0.5px #ccc;
}

.editPills {
    display: none;
    padding-left: 10px;
    color: black;
}

div.customBorder:hover .editPills {
    cursor: pointer;
    display: inline-block;
}

select.customSelect {
    width: 85%;
    display: inline-block;
    height: 25px;
    padding: 0px 10px;
    background: white !important;
    border: none;
}

#countdown {
    font-size: 1rem;
    color: red;
    font-weight: bold;
    text-align: center;
    padding: 0px 5px;
}

#availableField {
    cursor: pointer;
    padding: 3px;
}

.availableFieldDiv {
    margin: 5px 15px;
}

input.inputBoxRound {
    border-radius: 50% !important;
    /* background-color: #50cd89!important; */
    cursor: pointer;
    border-color: #181c32;
}

input.inputBoxRound:checked {
    border-radius: 50% !important;
    background-color: #50cd89 !important;
    border-color: #181c32;
}

.customPadding {
    padding: 70px 60px 70px 60px;
}

h1.dealerText {
    font-size: xxx-large;
}

h2.digitalText {
    font-size: 85px;
    color: #7bbe9e;
    /* background: rgba(0, 0, 0, 0) linear-gradient(to right, #3c8685 0%, #b0d9ad 100%) repeat scroll 0 0; */
}

@media (min-width: 992px) {
    .customPadding {
        /* padding: unset; */
    }

    h2.digitalText {
        font-size: 70px;
        color: #7bbe9e;
        /* background: rgba(0, 0, 0, 0) linear-gradient(to right, #3c8685 0%, #b0d9ad 100%) repeat scroll 0 0; */
    }

    .customH4 {
        font-size: larger;
    }
}

.text-justify {
    text-align: justify;
    font-size: x-large;
}

.customH2S {
    font-size: 30px;

    padding: 50px 15px 15px;
}

ul.customUl {
    padding: 0px 40px;
}

.customUl li {
    font-size: large;
}

.customH2T {
    font-size: 30px;
    padding: 30px;
}

.customPtext {
    font-size: large;
    padding: 5px 25px;
}

.mobile-footer-btn {
    display: none !important;
}

@media only screen and (min-width: 600px) {
    /* For tablets: */

    .abouth1 {
        font-size: 20px;
    }

    .abouth2 {
        font-size: 20px;
    }
}

@media only screen and (min-width: 768px) {
    /* For desktop: */

    .abouth1 {
        font-size: 60px;
    }

    .abouth2 {
        font-size: 30px;
    }
}

@media only screen and (max-width: 768px) {
    .toolbar {
        /* height: 128%; */
        display: none;
    }

    .mobile-footer-btn {
        position: fixed;
        left: 0;
        background: #fff;
        width: 100%;
        height: 100px;
        bottom: 0;
        display: flex !important;
        justify-content: space-evenly;
        padding: 6px 0px 10px 0px;
        flex-shrink: 0;
        z-index: 9;
    }

    .mobile-header {
        display: none !important;
    }

    #hide-side-icon {
        visibility: hidden;
    }

    .footer {
        margin-bottom: 50px;
        width: 480px;
    }

    #kt_content_container_2 {
        flex-direction: column;
        height: 500px;
    }

    .post {
        margin: auto;
        align-items: center;
        width: 100%;
        padding-left: 10px;
    }

    .content2 {
        height: 100%;
    }

    #kt_wrapper {
        padding-top: 0px;
        overflow-x: hidden;
        margin-top: -160px;

    }

    .inventory {
        margin-top: 250px;
        margin-bottom: 156px
    }

    .customPadding {
        padding: 0px 0px 40px 0px;
    }

    .dealerText {
        font-size: 40px !important;
    }

    .digitalText {
        font-size: 50px !important;
    }

    .footer {
        position: fixed;
        left: 0;
        background: #fff;
        width: 100%;
        height: 70px;
        bottom: 48px;
        z-index: 9;
    }

    .h4 {
        font-size: 18px;
    }

    .svg-icon.svg-icon-2 svg {
        width: 2.5rem !important;
        height: 2.5rem !important;
    }

    .content2 {
        padding-top: 30px !important;
        height: 126%;
    }

    #availableField {
        width: 175px;
    }

    .availableDiv {
        width: 290px;
    }

    .text-justify {
        font-size: 18px;
    }

    #countdown {
        display: block;
    }

    .referrals#kt_content {
        margin-bottom: 145px;
        margin-top: 194px;
    }

    .referrals-view#kt_content {
        margin-bottom: 145px;
        margin-top: 194px;
    }
}

/* Hide on medium and large screens (computers) */
@media (min-width: 768px) {
    .hidden-on-desktop {
        display: none;
    }
}

/* Hide on small screens (mobile devices) */
@media (max-width: 767px) {
    .display-on-mobile {
        display: block;
    }
}

.fUcaoU {
    box-sizing: border-box;
    display: flex;
    padding: 12px;
    gap: 8px;
    background: rgb(255, 255, 255);
    border: 1px solid rgb(221, 221, 221);
    border-radius: 8px;
    cursor: pointer;
    -webkit-box-align: center;
    align-items: center;
    font-weight: 400;
}

.bg-white {
    background-color: white !important;
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

.search {
    position: relative;
    /* width: 50%; */
    /* box-shadow: 0 0 40px rgba(51, 51, 51, .1); */

}

.search input {
    width: 100%;
    text-indent: 16px;
    border: 2px solid #d6d4d4;


}


.search input:focus {

    box-shadow: none;
    border: 2px solid #FF464C;


}

.search .fa-search {

    position: absolute;
    top: 15px;
    left: 20px;

}

.btn-bg {
    background-color: #D7F4F4;
    color: #3c8685;
}

.nav-link.active,
.nav-link:hover {
    border-bottom: 1px solid #FF464C !important;
    color: #000 !important;
}
</style>