<template>
    <div class="mt-5 container">
        <h1>
            Student Edit Page
        </h1>
        <div class="card">
            <div class="card-header">
                <h4>
                    Edit Student
                    <NuxtLink to="/students" class="btn btn-danger float-end">Back</NuxtLink>
                </h4>
            </div>
            <div class="card-body">
                <div v-if="isLoading">
                    <Loading />
                </div>
                <form @submit.prevent="onSubmit">
                    <div class="mb-3">
                        <label>FirstName</label>
                        <input type="text" class="form-control" v-model="form.firstname" />
                        <input type="hidden" class="form-control" v-model="form.id" />
                    </div>
                    <div class="mb-3">
                        <label>LastName</label>
                        <input type="text" class="form-control" v-model="form.lastname" />
                    </div>
                    <div class="mb-3">
                        <label>Email</label>
                        <input type="text" class="form-control" v-model="form.email" />
                    </div>
                    <div class="mb-3">
                        <label>Phone</label>
                        <input type="text" class="form-control" v-model="form.phone" />
                    </div>
                    <div class="mb-3">
                        <button type="submit" class="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </div>

    </div>
</template>
  
<script setup>
const route = useRoute();
const id = computed(() => {
    return route.params.id;
});
const form = reactive({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    id: "",
    mode: "editLead"
});

const url = "http://localhost/ajayyugox/testcrm74/modules/NuxtPortal/process.php";
const { data } = await useFetch(url, {
    method: "post",
    body: { mode: 'getLeadById', leadid: id.value },
});

const leadData = JSON.parse(data.value);
if (leadData) {
    form.firstname = leadData.data.firstname;
    form.lastname = leadData.data.lastname;
    form.email = leadData.data.email;
    form.phone = leadData.data.phone;
    form.id = leadData.data.id;
} else {
    console.error('Error: Invalid response data:', leadData);
    
}

const isLoading = ref(false);
async function onSubmit() {
    
    if (isLoading.value) return;
    isLoading.value = true;
    const { data } = await useFetch(url, {
        method: "post",
        body: JSON.stringify(form),
    });

    isLoading.value = false;
    navigateTo("/user");

}

</script>
