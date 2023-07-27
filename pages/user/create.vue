<template>
    <div class="mt-5 container">
        <h1>
            Student Create Page
        </h1>
        <div class="card">
            <div class="card-header">
                <h4>
                    Add Student
                    <NuxtLink to="/user" class="btn btn-danger float-end">Back</NuxtLink>
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

// const url = "http://localhost/AjayVishan/test/test.php";
const url = "http://localhost/ajayyugox/testcrm74/modules/NuxtPortal/process.php";
const form = reactive({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    mode: "createLead",
});

const isLoading = ref(false);
async function onSubmit() {
    // console.log(JSON.stringify(form))
    if (isLoading.value) return;
    isLoading.value = true;
    const { data } = await useFetch(url, {
        method: "post",
        body: JSON.stringify(form),
    });
    console.log(data);
    isLoading.value = false;
    navigateTo("/user");

}

</script>