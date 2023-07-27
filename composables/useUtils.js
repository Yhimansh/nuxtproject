export const allData = () => useState(() => []);
export const allInventoryData = () => useState(() => []);
export const useUtils = () => {
  // const config = useRuntimeConfig();
  // const url = config.API_URL;
  // console.log('dd', config.API_URL);
  const url = "http://localhost/ajayyugox/testcrm74/modules/NuxtPortal/process.php";
  const allStudent = async () => {
    const { data } = await useFetch(url, {
      method: "post",
      body: { mode: "getLeadData" },
    });
    const leadData = JSON.parse(data.value);
    return leadData;
  };

  async function deleteLead(studentid) {
    const { data } = await useFetch(url, {
      method: "post",
      body: { mode: "deleteLead", id: studentid },
    });
    const deleteLeaddata = JSON.parse(data.value);
    return deleteLeaddata;
  }
  async function signUp(value) {
    const { data } = await useFetch(url, {
      method: "post",
      body: value,
    });
    return data.value
    // console.log(data.value)
    // const sighupLeaddata = JSON.parse(data.value);
    // return sighupLeaddata;
  }

    

  return { allStudent, deleteLead, signUp};
};
