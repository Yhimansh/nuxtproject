<template>
    <div class="menu">
    
    <div class="sc-kpHvgf gCMaXe">
        <p class="show menu-dropdown" @click="toggleDropdown" > 
        <!-- <p class="show menu-dropdown" @click="toggleDropdown" :data-kt-menu-trigger="menuTrigger"
            :data-kt-menu-placement="menuPlacement">  -->
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M4.71736 21.255H4.64236C3.50236 21.255 2.71486 21.0375 2.71486 21.0375C2.50486 21.015 2.30236 20.9175 2.13736 20.76C1.96486 20.595 1.85986 20.3475 1.85986 20.0775V19.56C1.85986 19.2 1.96487 18.8475 2.16737 18.5775L2.18987 18.5475L2.46736 17.385C2.46736 17.385 2.46736 17.1375 2.90236 17.1375C3.20986 17.1375 3.88487 17.04 4.25237 16.9875C4.40987 16.965 4.56736 16.905 4.70236 16.8075C5.16736 16.485 6.38236 15.6975 7.82986 15.255C8.19736 15.1425 8.56487 15.075 8.93987 15.0525C9.56987 15.0075 10.6949 14.955 11.8049 15.0525C12.6074 15.1275 13.3949 15.39 14.1299 15.795L16.0949 16.9125C16.2974 17.025 16.5074 17.0925 16.7324 17.115C17.4749 17.19 19.3574 17.4525 20.8799 18.12C21.1724 18.2475 21.4124 18.48 21.5774 18.7875C21.7124 19.035 21.8624 19.305 21.9224 19.3275C21.9224 19.3275 22.4174 19.905 21.7649 20.895C21.6524 21.075 21.4649 21.18 21.2699 21.18C20.9849 21.18 20.5574 21.21 19.7324 21.1875"
                    stroke="#272727" stroke-miterlimit="10"></path>
                <path d="M17.1075 21.1876C10.7175 21.1648 8.09996 21.1876 7.33496 21.2105" stroke="#272727"
                    stroke-miterlimit="10"></path>
                <path
                    d="M5.92501 22.14C5.10751 22.14 4.44751 21.4725 4.44751 20.655C4.44751 19.8375 5.10751 19.17 5.92501 19.17C6.74251 19.17 7.40251 19.8375 7.40251 20.655C7.40251 21.4725 6.74251 22.14 5.92501 22.14Z"
                    stroke="#272727" stroke-miterlimit="10"></path>
                <path
                    d="M18.3303 22.14C17.5128 22.14 16.8528 21.4725 16.8528 20.655C16.8528 19.8375 17.5128 19.17 18.3303 19.17C19.1478 19.17 19.8078 19.8375 19.8078 20.655C19.8078 21.4725 19.1478 22.14 18.3303 22.14Z"
                    stroke="#272727" stroke-miterlimit="10"></path>
                <path d="M16.2074 8.64001H7.49243" stroke="#272727" stroke-linecap="square" stroke-linejoin="round">
                </path>
                <path
                    d="M4.0279 8.67H3.0679C3.0079 8.6625 2.8729 8.655 2.7304 8.5575C2.6254 8.49 2.5429 8.3925 2.4904 8.2725L2.4229 8.145C2.2954 7.8825 2.27289 7.575 2.37039 7.2975L2.4604 7.035L2.5354 5.7825C2.5429 5.6025 2.6404 5.4375 2.7754 5.3475H2.76789C3.30039 4.995 4.8004 4.215 7.5904 4.11C7.5904 4.11 10.0804 2.07 11.1829 1.89C11.1829 1.89 16.2454 1.8525 19.6204 2.295C19.6204 2.295 20.9029 3.4575 21.2029 4.2V5.64C21.2029 5.64 21.3604 6.255 21.5254 6.5775C21.6004 6.7425 21.6379 6.9225 21.6379 7.11C21.6379 7.2225 21.6229 7.3575 21.6079 7.4925C21.5629 7.8825 21.3004 8.205 20.9554 8.295L19.5304 8.6625"
                    stroke="#272727" stroke-linecap="round" stroke-linejoin="round"></path>
                <path
                    d="M5.51254 10.08C6.33004 10.08 6.99004 9.4125 6.99004 8.595C6.99004 7.7775 6.33004 7.11 5.51254 7.11C4.69504 7.11 4.03503 7.7775 4.03503 8.595C4.03503 9.4125 4.69504 10.08 5.51254 10.08Z"
                    stroke="#272727" stroke-linecap="round" stroke-linejoin="round"></path>
                <path
                    d="M18.0902 10.095C18.9077 10.095 19.5677 9.4275 19.5677 8.61C19.5677 7.7925 18.9077 7.125 18.0902 7.125C17.2727 7.125 16.6127 7.7925 16.6127 8.61C16.6127 9.4275 17.2727 10.095 18.0902 10.095Z"
                    stroke="#272727" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <span class="ms-2">Body type</span>
        </p>
        <div v-if="isOpen" class="menu menu-sub menu-sub-dropdown w-auto p-2 mt-10 shadow" :data-kt-menu="true"
            >
        <!-- <div v-show="isDropdownOpen" class="menu menu-sub menu-sub-dropdown w-auto p-2 mt-10 shadow" :data-kt-menu="true"
            :id="menuId"> -->
            <div class="d-flex flex-wrap" style="gap: 9px;">
                <div class="fUcaoU">
                    <svg width="46" height="20" viewBox="0 0 46 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="46" height="20" fill="#E5E5E5"></rect>
                        <rect width="15227" height="5237" transform="translate(-9389 -465)" fill="#FAFAFA"></rect>
                        <g filter="url(#filter0_d_2513_36644)">
                            <rect x="-40" y="-40" width="673.004" height="168" rx="16" fill="white"></rect>
                            <rect x="-15.5" y="-15.5" width="116" height="51" rx="7.5" fill="white"></rect>
                            <path d="M33 15.5C27.2252 15.5 20.8297 15.5 12.404 15.5H12" stroke="#6D6D6D"
                                stroke-linecap="round" stroke-linejoin="round"></path>
                            <path
                                d="M5.7111 15H3.6311C3.5011 14.98 3.2111 14.9699 2.9011 14.7795C2.6811 14.6492 2.5011 14.4688 2.3811 14.2383L2.2411 13.9878C1.9611 13.4867 1.9211 12.8954 2.1311 12.3642L2.3311 11.8631L2.5011 9.46783C2.5211 9.11706 2.7211 8.80637 3.0211 8.636L3.0011 8.61595C4.1511 7.96452 7.4211 6.47124 13.4811 6.26077C13.4811 6.26077 18.8911 2.35217 21.2911 2.0014C21.2911 2.0014 32.2811 1.93125 39.6211 2.78312C39.6211 2.78312 42.4011 5.00802 43.0611 6.43115V9.18721C43.0611 9.18721 43.4111 10.3598 43.7611 10.9812C43.9311 11.2918 44.0111 11.6426 44.0011 12.0034C44.0011 12.2239 43.9711 12.4744 43.9411 12.735C43.8411 13.4867 43.2711 14.098 42.5311 14.2684L39.4411 14.9699H39.0311"
                                stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path
                                d="M15.1211 7.64C15.1211 7.64 18.6411 4.63 21.6611 3.87L32.5111 4.11L34.8111 7.06L15.1211 7.64Z"
                                stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M24.8807 4.01001L24.7207 7.35001" stroke="#6D6D6D" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                            <path d="M41.0202 4.16005L37.2402 4.05005L39.4402 6.34005H42.6202" stroke="#6D6D6D"
                                stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M42.9216 7.82996H41.5116L40.6016 9.62996L42.9216 9.59996" stroke="#6D6D6D"
                                stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M2.57031 11.1999C2.57031 11.1999 4.73031 10.6799 5.77031 9.43994H2.57031"
                                stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path
                                d="M36 18C37.66 18 39 16.66 39 15C39 13.34 37.66 12 36 12C34.34 12 33 13.34 33 15C33 16.66 34.34 18 36 18Z"
                                stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path
                                d="M36 16.5C36.83 16.5 37.5 15.83 37.5 15C37.5 14.17 36.83 13.5 36 13.5C35.17 13.5 34.5 14.17 34.5 15C34.5 15.83 35.17 16.5 36 16.5Z"
                                stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path
                                d="M9 18C10.66 18 12 16.66 12 15C12 13.34 10.66 12 9 12C7.34 12 6 13.34 6 15C6 16.66 7.34 18 9 18Z"
                                stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path
                                d="M9 16.5C9.83 16.5 10.5 15.83 10.5 15C10.5 14.17 9.83 13.5 9 13.5C8.17 13.5 7.5 14.17 7.5 15C7.5 15.83 8.17 16.5 9 16.5Z"
                                stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                            <rect x="-15.5" y="-15.5" width="116" height="51" rx="7.5" stroke="#DDDDDD"></rect>
                        </g>
                        <defs>
                            <filter id="filter0_d_2513_36644" x="-72" y="-52" width="737.004" height="232"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                <feOffset dy="20"></feOffset>
                                <feGaussianBlur stdDeviation="16"></feGaussianBlur>
                                <feColorMatrix type="matrix"
                                    values="0 0 0 0 0.233333 0 0 0 0 0.101111 0 0 0 0 0.101111 0 0 0 0.15 0">
                                </feColorMatrix>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2513_36644">
                                </feBlend>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2513_36644"
                                    result="shape">
                                </feBlend>
                            </filter>
                        </defs>
                    </svg>
                    SUV
                </div>

                <div class="fUcaoU">
                    <svg width="46" height="20" viewBox="0 0 46 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="46" height="20" fill="#E5E5E5"></rect>
                        <rect width="15227" height="5237" transform="translate(-9530 -465)" fill="#FAFAFA"></rect>
                        <g filter="url(#filter0_d_2513_36644)">
                            <rect x="-181" y="-40" width="673.004" height="168" rx="16" fill="white"></rect>
                            <rect x="-15.5" y="-15.5" width="130" height="51" rx="7.5" fill="white"></rect>
                            <path d="M24.8706 4.78003L24.1406 7.64003" stroke="#6D6D6D" stroke-miterlimit="10"></path>
                            <path d="M11.9297 14.81C25.7997 14.77 31.4897 14.81 33.1597 14.86" stroke="#6D6D6D"
                                stroke-miterlimit="10"></path>
                            <path
                                d="M15.2698 8.13004C15.2698 8.13004 19.5598 4.72004 24.6798 4.48004C24.6798 4.48004 30.7998 3.85004 34.4498 5.96004L33.9998 7.55004L24.1398 7.83004L15.2598 8.13004H15.2698Z"
                                stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path
                                d="M1.41992 11.7199L4.53992 11.1199C4.53992 11.1199 4.93992 10.1699 5.88992 9.43994L2.63992 9.60994"
                                stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path
                                d="M38.797 15H38.9571C41.4383 15 43.1391 14.5797 43.1391 14.5797C43.5993 14.5296 44.0395 14.3495 44.3997 14.0493C44.7799 13.729 45 13.2587 45 12.7483V11.7575C45 11.067 44.7699 10.3965 44.3397 9.8761L44.2897 9.81606L43.6894 7.58436C43.6894 7.58436 43.6794 7.114 42.7489 7.104C42.0886 7.104 40.6179 6.92386 39.8175 6.81378C39.4673 6.76374 39.1372 6.65365 38.837 6.46351C37.8265 5.84304 35.1853 4.33189 32.0338 3.49125C31.2434 3.27108 30.433 3.15099 29.6226 3.10095C28.2519 3.02089 25.8108 2.92082 23.3896 3.10095C21.6388 3.24106 19.9279 3.74144 18.3372 4.52203L14.0651 6.66366C13.6249 6.88383 13.1647 7.01393 12.6744 7.05396H12.6644C11.0437 7.20407 6.96169 7.69445 3.6501 8.97542C3.0198 9.22561 2.48954 9.66594 2.13937 10.2464C1.84923 10.7167 1.51908 11.2371 1.38901 11.2872C1.38901 11.2872 0.318497 12.398 1.72918 14.2895C1.9793 14.6297 2.37949 14.8299 2.79969 14.8299C3.41999 14.8299 4.34043 14.8899 6.1413 14.8499"
                                stroke="#6D6D6D" stroke-miterlimit="10"></path>
                            <path
                                d="M36 17C37.66 17 39 15.66 39 14C39 12.34 37.66 11 36 11C34.34 11 33 12.34 33 14C33 15.66 34.34 17 36 17Z"
                                stroke="#6D6D6D" stroke-miterlimit="10"></path>
                            <path
                                d="M36 15.5C36.83 15.5 37.5 14.83 37.5 14C37.5 13.17 36.83 12.5 36 12.5C35.17 12.5 34.5 13.17 34.5 14C34.5 14.83 35.17 15.5 36 15.5Z"
                                stroke="#6D6D6D" stroke-miterlimit="10"></path>
                            <path
                                d="M9 17C10.66 17 12 15.66 12 14C12 12.34 10.66 11 9 11C7.34 11 6 12.34 6 14C6 15.66 7.34 17 9 17Z"
                                stroke="#6D6D6D" stroke-miterlimit="10"></path>
                            <path
                                d="M9 15.5C9.83 15.5 10.5 14.83 10.5 14C10.5 13.17 9.83 12.5 9 12.5C8.17 12.5 7.5 13.17 7.5 14C7.5 14.83 8.17 15.5 9 15.5Z"
                                stroke="#6D6D6D" stroke-miterlimit="10"></path>
                            <path
                                d="M43.9203 8.57995C41.9603 8.24995 41.4003 8.40996 41.4103 8.63996C41.5303 10.35 42.6703 10.22 44.3703 10.26"
                                stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                            <rect x="-15.5" y="-15.5" width="130" height="51" rx="7.5" stroke="#DDDDDD"></rect>
                        </g>
                        <defs>
                            <filter id="filter0_d_2513_36644" x="-213" y="-52" width="737.004" height="232"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                <feOffset dy="20"></feOffset>
                                <feGaussianBlur stdDeviation="16"></feGaussianBlur>
                                <feColorMatrix type="matrix"
                                    values="0 0 0 0 0.233333 0 0 0 0 0.101111 0 0 0 0 0.101111 0 0 0 0.15 0">
                                </feColorMatrix>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2513_36644">
                                </feBlend>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2513_36644"
                                    result="shape">
                                </feBlend>
                            </filter>
                        </defs>
                    </svg>
                    Sedan
                </div>

                <div class="fUcaoU">
                    <svg width="46" height="20" viewBox="0 0 46 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33.0199 14.16C26.7399 14.24 20.4499 14.32 14.1699 14.4" stroke="#6D6D6D"
                            stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                            d="M8 14.5L6.14885 14.485C6.01892 14.515 5.46921 14.525 4.81956 14.2653C4.29984 14.0555 4 13.5262 4 12.9769V11.4188C4 11.4188 4 10.46 4.70962 10.2003C4.70962 10.2003 5.28931 8.48243 7.20828 8.07293L13.9946 6.4849C13.9946 6.4849 19.4617 3.01918 21.6905 2.87935C21.6905 2.87935 27.4674 2.19021 35.8029 2.66961C35.8029 2.66961 37.6519 2.61968 38.7313 3.93805L40.7303 6.16529C40.7303 6.16529 41.16 6.74458 41.16 7.44371L41.31 9.51115C41.31 9.51115 42.0196 9.71091 41.9996 10.7396L41.9096 12.4875C41.9096 12.4875 41.9296 13.6261 40.7403 14.0455L38.9712 14.0655"
                            stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                            d="M15.5195 8.27004C15.5195 8.27004 18.4295 5.97004 20.7195 5.12004C20.7195 5.12004 22.1095 4.62004 23.7295 4.51004L32.0395 4.29004C32.0395 4.29004 33.4295 4.23004 33.6895 5.44004L34.0995 6.89004L15.5195 8.26004V8.27004Z"
                            stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M25.3301 4.62V7.34" stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                            d="M4.56055 10.85C4.56055 10.85 6.09055 11.07 6.65055 10.69C6.65055 10.69 7.87055 9.81001 7.73055 9.17001L5.79055 9.01001"
                            stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                            d="M40.9601 7.25996C40.9601 7.25996 39.5901 6.99996 39.3501 7.72996L39.3301 8.74996C39.3301 8.74996 39.5201 9.88996 41.1801 9.68996"
                            stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M35.0703 2.81006L38.2003 5.63006C38.2003 5.63006 38.7703 6.19006 39.9003 5.87006"
                            stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                            d="M36 17.5C37.66 17.5 39 16.16 39 14.5C39 12.84 37.66 11.5 36 11.5C34.34 11.5 33 12.84 33 14.5C33 16.16 34.34 17.5 36 17.5Z"
                            stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                            d="M36 16C36.83 16 37.5 15.33 37.5 14.5C37.5 13.67 36.83 13 36 13C35.17 13 34.5 13.67 34.5 14.5C34.5 15.33 35.17 16 36 16Z"
                            stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                            d="M11 17.5C12.66 17.5 14 16.16 14 14.5C14 12.84 12.66 11.5 11 11.5C9.34 11.5 8 12.84 8 14.5C8 16.16 9.34 17.5 11 17.5Z"
                            stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                            d="M11 16C11.83 16 12.5 15.33 12.5 14.5C12.5 13.67 11.83 13 11 13C10.17 13 9.5 13.67 9.5 14.5C9.5 15.33 10.17 16 11 16Z"
                            stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    Hatchback
                </div>

                <div class="fUcaoU">
                    <svg width="47" height="20" viewBox="0 0 47 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32.4302 14.5C25.8402 14.5 18.2502 14.5 11.6602 14.5" stroke="#6D6D6D"
                            stroke-miterlimit="10">
                        </path>
                        <path
                            d="M15.6502 7.14998H37.8802C37.8802 7.14998 39.0702 7.14998 39.7002 6.29998C39.7002 6.29998 38.0202 4.08998 35.8402 3.86998H22.7202C22.7202 3.86998 19.5302 3.77998 14.6602 7.15998H15.6502V7.14998Z"
                            stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M24.0801 7.16L24.5301 3.87H25.6501L25.5801 7.15H33.1401L32.3401 3.87" stroke="#6D6D6D"
                            stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                            d="M1.76953 11.06L3.44953 10.8C3.75953 10.76 4.00953 10.54 4.13953 10.25C4.22953 10.04 4.31953 9.83998 4.40953 9.61998C4.40953 9.59998 4.42953 9.57998 4.42953 9.55998C4.42953 9.52998 4.40953 9.50998 4.38953 9.49998C4.24953 9.31998 4.10953 9.15998 3.96953 8.97998"
                            stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                            d="M43.3999 7.06006L42.2199 7.47006C41.9199 7.57006 41.7799 7.95006 41.9099 8.25006L42.2799 9.06006C42.3799 9.29006 42.5899 9.44006 42.8199 9.45006L43.9499 9.54006"
                            stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                            d="M5.66897 14.5H3.1493C2.81934 14.5 2.3694 14.5 2.11943 14.22C1.95945 14.03 1.92946 13.73 1.86946 13.49C1.80947 13.25 1.73948 13.02 1.65949 12.78C1.16955 11.31 1.87946 9.70002 3.18929 9.02002C6.54885 7.27002 10.6583 6.96002 11.8682 6.91002C18.2473 2.45002 22.8867 2.50002 22.8867 2.50002H36.225C38.9946 2.79002 41.6243 4.94002 42.8241 6.05002C43.2441 6.44002 43.534 6.97002 43.664 7.56002C43.854 8.52002 43.984 9.51002 44.3539 10.39C44.4339 10.55 44.4639 10.68 44.4739 10.87C44.4739 11.07 44.5039 11.25 44.5039 11.45C44.5039 11.83 44.5039 12.22 44.4239 12.59C44.2339 13.49 43.474 14.1 42.6242 14.17L38.4247 14.48H38.3047"
                            stroke="#6D6D6D" stroke-miterlimit="10"></path>
                        <path
                            d="M35.4395 17.5C37.0995 17.5 38.4395 16.16 38.4395 14.5C38.4395 12.84 37.0995 11.5 35.4395 11.5C33.7795 11.5 32.4395 12.84 32.4395 14.5C32.4395 16.16 33.7795 17.5 35.4395 17.5Z"
                            stroke="#6D6D6D" stroke-miterlimit="10"></path>
                        <path
                            d="M35.4102 15.98C36.2402 15.98 36.9102 15.31 36.9102 14.48C36.9102 13.65 36.2402 12.98 35.4102 12.98C34.5802 12.98 33.9102 13.65 33.9102 14.48C33.9102 15.31 34.5802 15.98 35.4102 15.98Z"
                            stroke="#6D6D6D" stroke-miterlimit="10"></path>
                        <path
                            d="M8.66992 17.48C10.3299 17.48 11.6699 16.14 11.6699 14.48C11.6699 12.82 10.3299 11.48 8.66992 11.48C7.00992 11.48 5.66992 12.82 5.66992 14.48C5.66992 16.14 7.00992 17.48 8.66992 17.48Z"
                            stroke="#6D6D6D" stroke-miterlimit="10"></path>
                        <path
                            d="M8.63867 15.95C9.46867 15.95 10.1387 15.28 10.1387 14.45C10.1387 13.62 9.46867 12.95 8.63867 12.95C7.80867 12.95 7.13867 13.62 7.13867 14.45C7.13867 15.28 7.80867 15.95 8.63867 15.95Z"
                            stroke="#6D6D6D" stroke-miterlimit="10"></path>
                    </svg>
                    Wagon
                </div>

                <div class="fUcaoU">
                    <svg width="46" height="20" viewBox="0 0 46 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.8324 15.2699C22.9124 15.4699 18.0324 15.6799 11.1124 15.4899H10.9824" stroke="#6D6D6D"
                            stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                            d="M14.1133 6.84986C14.1133 6.84986 18.7533 3.94986 19.6233 3.66986C20.4933 3.38986 21.9233 3.44986 23.7633 3.44986L28.7033 3.57986L29.2633 5.69986C29.2633 5.69986 28.4733 6.32986 28.2333 6.45986C27.8033 6.69986 26.9233 6.83986 26.3833 6.87986C25.8433 6.91986 16.4033 7.61986 14.1133 6.84986Z"
                            stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                            d="M1.36133 10.1299L2.36133 10.1999C3.88133 10.2499 4.34133 9.7199 4.69133 8.2099L2.99658 7.99988"
                            stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M43.9824 7.61987L42.4824 7.63987L42.5324 10.8499L44.1524 10.9899" stroke="#6D6D6D"
                            stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                            d="M7.49219 18.4999C9.42219 18.4999 10.9922 16.9299 10.9922 14.9999C10.9922 13.0699 9.42219 11.4999 7.49219 11.4999C5.56219 11.4999 3.99219 13.0699 3.99219 14.9999C3.99219 16.9299 5.56219 18.4999 7.49219 18.4999Z"
                            stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                            d="M7.46289 16.4698C8.29289 16.4698 8.96289 15.7998 8.96289 14.9698C8.96289 14.1398 8.29289 13.4698 7.46289 13.4698C6.63289 13.4698 5.96289 14.1398 5.96289 14.9698C5.96289 15.7998 6.63289 16.4698 7.46289 16.4698V16.4698Z"
                            stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                            d="M4.01161 15.5002H3.77165L1.43195 14.9727C0.962013 14.7799 0.652054 13.877 0.582063 13.3089C0.532069 12.9031 0.504635 12.67 0.502073 12.3349C0.499512 11.9998 0.647669 10.3549 1.49756 9.99985C1.49756 9.99985 2.49181 7.50581 4.70152 7.16087C6.91124 6.81594 12.0306 6.27824 12.0306 6.27824C12.0306 6.27824 17.7998 2.35204 18.3397 2.06797C18.8897 1.79405 19.5996 1.54042 20.5395 1.53028C21.4793 1.52013 27.7985 1.40853 30.5481 1.6926L31.2981 6.20722L44.0764 6.36955L44.2963 10.9998C45.5562 10.9491 45.5362 12.5987 45.4762 13.3697C45.4162 14.1408 45.0762 15.0234 43.1965 15.135C40.7568 15.2973 40.4069 15.3075 38.9171 15.3481H38.8171"
                            stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                            d="M35.3184 18.4999C37.2484 18.4999 38.8184 16.9299 38.8184 14.9999C38.8184 13.0699 37.2484 11.4999 35.3184 11.4999C33.3884 11.4999 31.8184 13.0699 31.8184 14.9999C31.8184 16.9299 33.3884 18.4999 35.3184 18.4999Z"
                            stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                            d="M35.293 16.4698C36.123 16.4698 36.793 15.7998 36.793 14.9698C36.793 14.1398 36.123 13.4698 35.293 13.4698C34.463 13.4698 33.793 14.1398 33.793 14.9698C33.793 15.7998 34.463 16.4698 35.293 16.4698Z"
                            stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M22.8115 3.66992L22.5215 6.85992" stroke="#6D6D6D" stroke-linecap="round"
                            stroke-linejoin="round"></path>
                    </svg>
                    Truck
                </div>

                <div class="fUcaoU">
                    <svg width="47" height="20" viewBox="0 0 47 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="47" height="20" fill="#E5E5E5"></rect>
                        <rect width="15227" height="5237" transform="translate(-9547 -533)" fill="#FAFAFA"></rect>
                        <g filter="url(#filter0_d_2513_36644)">
                            <rect x="-198" y="-108" width="673.004" height="168" rx="16" fill="white"></rect>
                            <rect x="-15.5" y="-15.5" width="112.004" height="51" rx="7.5" fill="white"></rect>
                            <path d="M10.8125 16.5003C15.2025 16.5203 28.1725 16.4903 32.9625 16.4703" stroke="#6D6D6D"
                                stroke-linecap="round" stroke-linejoin="round"></path>
                            <path
                                d="M38.823 15.5691L39.073 15.529L43.763 15.0487C44.513 14.9687 44.803 13.7479 44.913 13.1676C44.983 12.7873 45.043 12.3471 44.973 11.9668C44.903 11.5866 44.593 11.3064 44.333 10.9962C44.333 10.9962 44.373 7.02377 43.723 6.17324C43.723 6.17324 41.663 3.3615 40.833 2.69108L41.503 1.58039C39.293 1.53036 37.073 1.51035 34.853 1.50034C31.213 1.50034 27.523 1.47033 23.893 1.80053C21.433 2.03067 18.853 2.16075 16.533 3.17138C14.923 3.87181 13.253 4.8124 11.893 5.91308C10.593 6.96373 10.083 7.31395 9.903 7.36398C9.583 7.46404 5.943 7.67417 4.763 7.92432C3.673 8.16447 2.093 8.44465 1.693 9.44527C0.923003 11.3765 0.403003 14.1882 2.333 15.7091C2.953 16.1994 4.163 16.4896 5.193 16.4996"
                                stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path
                                d="M1.24219 11.7003C1.24219 11.7003 1.87219 11.8903 3.29219 11.6803L3.77219 9.50033L1.84219 9.34033"
                                stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path
                                d="M12.0139 7.84035C12.7239 7.28035 13.7139 6.54035 14.9739 5.78035C15.1139 5.69035 16.9339 4.80035 18.3839 4.22035C20.5439 3.36035 23.7539 3.16035 26.0439 3.09035C30.1139 2.96035 33.5139 3.12035 37.5839 2.98035C37.5839 2.98035 38.7939 3.12035 39.2939 4.01035L40.4139 5.94035C40.1539 6.49035 39.5139 7.11035 38.5839 7.15035C38.0739 7.17035 37.3539 7.23035 36.8439 7.26035C35.2239 7.35035 33.5839 7.44035 31.9539 7.53035C28.7339 7.69035 25.4939 7.69035 22.2739 7.89035C21.0439 7.96035 19.8039 8.01035 18.5739 8.05035C16.4139 8.12035 14.1139 8.30035 12.0039 7.85035H12.0139V7.84035Z"
                                stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M23.1719 7.84031L23.4619 3.44031" stroke="#6D6D6D" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                            <path d="M33.2324 3.24036L33.7624 7.30036" stroke="#6D6D6D" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                            <path
                                d="M44.0419 7.07031C44.0419 7.07031 42.6019 7.92031 42.7219 9.08031L42.7419 11.3103L44.592 11.2803"
                                stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path
                                d="M8.00391 18.4703C9.66391 18.4703 11.0039 17.1303 11.0039 15.4703C11.0039 13.8103 9.66391 12.4703 8.00391 12.4703C6.34391 12.4703 5.00391 13.8103 5.00391 15.4703C5.00391 17.1303 6.34391 18.4703 8.00391 18.4703Z"
                                stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path
                                d="M7.97266 16.9403C8.80266 16.9403 9.47266 16.2703 9.47266 15.4403C9.47266 14.6103 8.80266 13.9403 7.97266 13.9403C7.14266 13.9403 6.47266 14.6103 6.47266 15.4403C6.47266 16.2703 7.14266 16.9403 7.97266 16.9403V16.9403Z"
                                stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path
                                d="M35.8125 18.5004C37.4725 18.5004 38.8125 17.1604 38.8125 15.5004C38.8125 13.8404 37.4725 12.5004 35.8125 12.5004C34.1525 12.5004 32.8125 13.8404 32.8125 15.5004C32.8125 17.1604 34.1525 18.5004 35.8125 18.5004Z"
                                stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path
                                d="M35.7832 16.9703C36.6132 16.9703 37.2832 16.3003 37.2832 15.4703C37.2832 14.6403 36.6132 13.9703 35.7832 13.9703C34.9532 13.9703 34.2832 14.6403 34.2832 15.4703C34.2832 16.3003 34.9532 16.9703 35.7832 16.9703Z"
                                stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                            <rect x="-15.5" y="-15.5" width="112.004" height="51" rx="7.5" stroke="#DDDDDD"></rect>
                        </g>
                        <defs>
                            <filter id="filter0_d_2513_36644" x="-230" y="-120" width="737.004" height="232"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                <feOffset dy="20"></feOffset>
                                <feGaussianBlur stdDeviation="16"></feGaussianBlur>
                                <feColorMatrix type="matrix"
                                    values="0 0 0 0 0.233333 0 0 0 0 0.101111 0 0 0 0 0.101111 0 0 0 0.15 0">
                                </feColorMatrix>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2513_36644">
                                </feBlend>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2513_36644"
                                    result="shape">
                                </feBlend>
                            </filter>
                        </defs>
                    </svg>
                    Van
                </div>

                <div class="fUcaoU">
                    <svg width="46" height="20" viewBox="0 0 46 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="46" height="20" fill="#E5E5E5"></rect>
                        <rect width="15227" height="5237" transform="translate(-9389 -533)" fill="#FAFAFA"></rect>
                        <g filter="url(#filter0_d_2513_36644)">
                            <rect x="-40" y="-108" width="673.004" height="168" rx="16" fill="white"></rect>
                            <rect x="-15.5" y="-15.5" width="133" height="51" rx="7.5" fill="white"></rect>
                            <path d="M34 14.5C33.94 14.5 15.33 14.98 15 14.99" stroke="#6D6D6D" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                            <path
                                d="M9.00024 15.2698C9.00024 15.2698 8.8617 15.3499 4.76074 15.5C4.65071 15.5 4.41066 15.5 4.1506 15.3899C3.84052 15.2398 3.60047 14.9496 3.45043 14.5592C3.21038 13.9488 2.99033 13.1281 3.00033 12.5076C3.00033 11.8971 3.36041 11.5368 3.56046 11.0164L4.07058 9.67531C4.1706 9.40509 4.23062 9.03479 4.43066 8.83463V8.81462C4.47067 8.76458 4.54069 8.70453 4.62071 8.68451C7.41136 7.72374 10.222 6.95312 13.1527 6.60284C13.1527 6.60284 18.4839 2.52956 25.4956 2.52956C25.4956 2.52956 31.427 2.05918 38.3286 4.87144L40.089 5.05159C40.4891 5.09162 40.8492 5.37184 41.0092 5.77217L41.9194 8.02398C42.0795 8.41429 42.2795 8.78459 42.5696 9.08484C42.7796 9.30501 43.0097 9.64529 42.9997 10.0556L42.9197 12.1473C42.9097 12.4275 42.8396 12.6877 42.7096 12.9379C42.4295 13.4784 41.9194 13.8787 41.3493 13.9988L40.169 14.259H40.009"
                                stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path
                                d="M15.8301 7.50998C15.8301 7.50998 18.4101 5.28998 21.5401 4.63998C21.5401 4.63998 25.7601 3.96998 28.9201 4.18998C28.9201 4.18998 32.8601 4.38998 35.2501 5.52998L34.8301 6.64998L15.8301 7.51998V7.50998Z"
                                stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M26.4012 4.32996L26.0312 6.97996" stroke="#6D6D6D" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                            <path
                                d="M4.47094 9.18002L8.08094 9.02002C8.08094 9.02002 7.70094 10.7 6.53094 10.74L3.96094 10.79"
                                stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M41.001 6.41003H38.791L38.291 7.91003H41.421" stroke="#6D6D6D" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                            <path
                                d="M37 17.5C38.66 17.5 40 16.16 40 14.5C40 12.84 38.66 11.5 37 11.5C35.34 11.5 34 12.84 34 14.5C34 16.16 35.34 17.5 37 17.5Z"
                                stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path
                                d="M12 17.5C13.66 17.5 15 16.16 15 14.5C15 12.84 13.66 11.5 12 11.5C10.34 11.5 9 12.84 9 14.5C9 16.16 10.34 17.5 12 17.5Z"
                                stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path
                                d="M12 16C12.83 16 13.5 15.33 13.5 14.5C13.5 13.67 12.83 13 12 13C11.17 13 10.5 13.67 10.5 14.5C10.5 15.33 11.17 16 12 16Z"
                                stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path
                                d="M37 16C37.83 16 38.5 15.33 38.5 14.5C38.5 13.67 37.83 13 37 13C36.17 13 35.5 13.67 35.5 14.5C35.5 15.33 36.17 16 37 16Z"
                                stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                            <rect x="-15.5" y="-15.5" width="133" height="51" rx="7.5" stroke="#DDDDDD"></rect>
                        </g>
                        <defs>
                            <filter id="filter0_d_2513_36644" x="-72" y="-120" width="737.004" height="232"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                <feOffset dy="20"></feOffset>
                                <feGaussianBlur stdDeviation="16"></feGaussianBlur>
                                <feColorMatrix type="matrix"
                                    values="0 0 0 0 0.233333 0 0 0 0 0.101111 0 0 0 0 0.101111 0 0 0 0.15 0">
                                </feColorMatrix>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2513_36644">
                                </feBlend>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2513_36644"
                                    result="shape">
                                </feBlend>
                            </filter>
                        </defs>
                    </svg>
                    Coupe
                </div>

                <div class="fUcaoU">
                    <svg width="47" height="20" viewBox="0 0 47 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M38.1348 14.5015C38.3347 14.5015 38.4647 14.5015 38.6547 14.4815C39.1846 14.4615 39.9845 14.4015 43.1041 13.9415C43.514 13.8815 43.874 13.6715 44.134 13.3515L44.2439 13.2115C44.4139 13.0015 44.5039 12.7415 44.5039 12.4815V10.6215C44.5039 10.5015 44.4539 10.3815 44.3739 10.2815C43.894 9.71149 43.534 9.05149 43.3141 8.33149L43.0541 7.48149C42.9441 7.13149 42.6542 6.88149 42.2942 6.83149L39.7246 6.47149C38.9847 6.37149 38.5447 6.25149 37.7948 6.17149C37.2049 6.11149 36.625 6.08149 36.0351 6.10149C34.8752 6.13149 33.6954 6.31149 32.6255 6.76149C32.4555 6.83149 32.2956 6.91149 32.1356 7.00149C31.4457 7.37149 30.8058 7.66149 30.0259 7.78149C28.766 7.98149 27.5762 8.04149 26.3464 8.10149C24.4566 8.20149 23.4468 8.17149 21.557 8.24149C20.0772 8.30149 18.6174 8.26149 17.1376 8.28149C16.4377 8.29149 15.7278 8.22149 15.0479 8.21149L15.7178 7.71149C16.4277 7.24149 16.6677 7.10149 17.4176 6.63149C18.5774 5.91149 19.7173 5.24149 20.8271 4.62149C20.8671 4.53149 21.1771 3.89149 20.9171 3.63149C20.8171 3.53149 20.6471 3.49149 20.5072 3.50149C20.1572 3.53149 13.3581 7.11149 13.3581 7.11149C7.31895 7.56149 4.68931 8.52149 3.74944 8.97149C3.51947 9.08149 3.2495 9.36149 3.09952 9.57149C2.92955 9.83149 2.72957 10.0615 2.5296 10.2915C2.38962 10.4515 2.24964 10.6115 2.09966 10.7515C1.96968 10.8815 1.8197 11.0015 1.72971 11.1715C1.50974 11.5715 1.45975 12.1415 1.53973 12.5815C1.64972 13.1715 2.10966 13.7415 2.45961 14.1115C2.70958 14.3615 3.03953 14.4915 3.38948 14.4915C3.77943 14.4915 5.42412 14.5215 7.00391 14.4915"
                            stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M13.0039 14H13.1301C24.532 14 28.4717 14 32.0039 14" stroke="#6D6D6D"
                            stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                            d="M35.0039 16.5C36.6639 16.5 38.0039 15.16 38.0039 13.5C38.0039 11.84 36.6639 10.5 35.0039 10.5C33.3439 10.5 32.0039 11.84 32.0039 13.5C32.0039 15.16 33.3439 16.5 35.0039 16.5Z"
                            stroke="#6D6D6D" stroke-miterlimit="10"></path>
                        <path
                            d="M35.0039 15C35.8339 15 36.5039 14.33 36.5039 13.5C36.5039 12.67 35.8339 12 35.0039 12C34.1739 12 33.5039 12.67 33.5039 13.5C33.5039 14.33 34.1739 15 35.0039 15Z"
                            stroke="#6D6D6D" stroke-miterlimit="10"></path>
                        <path
                            d="M10.0039 16.5C11.6639 16.5 13.0039 15.16 13.0039 13.5C13.0039 11.84 11.6639 10.5 10.0039 10.5C8.34391 10.5 7.00391 11.84 7.00391 13.5C7.00391 15.16 8.34391 16.5 10.0039 16.5Z"
                            stroke="#6D6D6D" stroke-miterlimit="10"></path>
                        <path
                            d="M10.0039 15C10.8339 15 11.5039 14.33 11.5039 13.5C11.5039 12.67 10.8339 12 10.0039 12C9.17391 12 8.50391 12.67 8.50391 13.5C8.50391 14.33 9.17391 15 10.0039 15Z"
                            stroke="#6D6D6D" stroke-miterlimit="10"></path>
                        <path
                            d="M3.25297 9.46002L6.86297 9.15002C6.86297 9.15002 5.91297 9.63002 5.03297 10.86C5.03297 10.86 3.27297 11.08 1.79297 11.68"
                            stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M42.8339 8.10514L40.5039 8C40.5039 8 40.8339 10.25 43.7839 10.25" stroke="#6D6D6D"
                            stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                            d="M33.7637 6.15003C33.7637 6.15003 34.1237 4.45003 33.9137 3.53003C33.9137 3.53003 36.0537 4.48003 38.3137 5.91003"
                            stroke="#6D6D6D" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    Convertible
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
const isOpen = computed(() => activeMenu.value === 'BodyType')  

function toggleDropdown() {
  if (isOpen.value) {
    closeMenu()
  } else {
    openMenu('BodyType')
  }
}
</script>
  
<style scoped>
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

.menu-sub-dropdown {
    z-index: 105;
    border-radius: .475rem;
    background-color: #fff;
    position: absolute;
}
</style>
  