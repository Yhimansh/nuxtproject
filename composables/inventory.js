
export function useInventoryApi() {
    // const invValue = allInventoryData();
    const invValue = ref([]);
  let currentPage = 1;
  const fetchInventory = async (page, pageLimit) => {
    const url = "http://localhost/yugoxm/v7crm/modules/CustomerPortal/api.php";
    var formdata = new FormData();
    formdata.append("_operation", "FetchRecords");
    formdata.append("module", "Vehicles");
    formdata.append("moduleLabel", "Vehicles");
    formdata.append("appKey", "4d293a95aa430bc2960e263bc1ccb203");
    formdata.append("userRole", "1");
    formdata.append("orgId", "28375");
    formdata.append("pageLimit", pageLimit);
    formdata.append("page", page);

    const { data } = await useFetch(url, {
      method: "post",
      body: formdata,
    });
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
    // fetchInventory(1, 20);
  });
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = (e) => {
    const currentScroll = window.scrollY;
    // console.log(currentScroll)
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const bottom = documentHeight - windowHeight;
    // if (currentScroll + windowHeight >= bottom) {}
    if (currentScroll >= bottom) {
      currentPage++;
      console.log("currentpage", currentPage);
      const page = currentPage;
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
  };
}
