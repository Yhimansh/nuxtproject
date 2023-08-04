export function useInventoryApi() {
  // const invValue = allInventoryData();
  const filtersApplied = ref(false)
  const invValue = ref([]);
  const currentPage = ref(1)
  // const router = useRouter();
 
  const fetchInventory = async (page, pageLimit, value) => {
    const url = "http://localhost/yugoxm/v7crm/modules/CustomerPortal/api.php";
    var formdata = new FormData();
    
    if (value) {
      console.log('value', value)
      // currentPage.value = 1;
      // console.log(currentPage.value) 
      formdata.append("searchFilter", value.searchInput);
      formdata.append("minPrice", value.minPrice);
      formdata.append("maxPrice", value.maxPrice);
      formdata.append("province", value.province);
      formdata.append("exteriorColor", value.exteriorColor);
      formdata.append("transmission", value.transmission);
      formdata.append("carseat", value.carseat);
      formdata.append("fuelType", value.fuelType);
      formdata.append("drivetrain", value.drivetrain);
      formdata.append("_operation", "FetchRecords");
      formdata.append("module", "Vehicles");
      formdata.append("moduleLabel", "Vehicles");
      formdata.append("appKey", "4d293a95aa430bc2960e263bc1ccb203");
      formdata.append("userRole", "1");
      formdata.append("orgId", "28375");
      formdata.append("type", "Filter");
    } else {  
      formdata.append("_operation", "FetchRecords");
      formdata.append("module", "Vehicles");
      formdata.append("moduleLabel", "Vehicles");
      formdata.append("appKey", "4d293a95aa430bc2960e263bc1ccb203");
      formdata.append("userRole", "1");
      formdata.append("orgId", "28375");
      formdata.append("pageLimit", pageLimit);
      formdata.append("page", page);
    }
    const { data } = await useFetch(url, {
      method: "post",
      body: formdata,
    });
    // console.log('data', data.value); 
    const invdata = await JSON.parse(data.value);
    const dataArray = Object.values(invdata);
    const filteredDataArray = dataArray.filter((item) => item !== true);
    if (page === 1) {
      invValue.value = filteredDataArray;
    } else {
      invValue.value.push(...filteredDataArray);
    }
  };
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
  watch(invValue.value, () => {
    scrollToTop();
  });
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  onBeforeRouteUpdate(() => {
    if (router.currentRoute.value.path === '/user/inventory') {
       currentPage.value = 1 
    }
  })
  const handleScroll = (e) => {
    if (filtersApplied.value) return 
    const currentScroll = window.scrollY;
    // console.log(currentScroll)
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const bottom = documentHeight - windowHeight;
    // if (currentScroll + windowHeight >= bottom) {}
    if (currentScroll >= bottom) {
      currentPage.value++;
      console.log("currentpage", currentPage.value);
      const page = currentPage.value;
      const pageLimit = 20;
      fetchInventory(page, pageLimit);
    }
  };
  if (process.client) {
    window.addEventListener("scroll", handleScroll);
  }
  return {
    invValue,
    fetchInventory,
    handleScroll,
    filtersApplied,
    currentPage
  };
}
