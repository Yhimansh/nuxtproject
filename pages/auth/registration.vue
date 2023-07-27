<template>
    <div class="row h-100">
        <div class="col-lg-6 col-12">
            <div class="card">
                <div class="card-body">
                    <h1 class="auth-title">SignUp</h1>
                    <form @submit.prevent="register">
                        <div class="form-group position-relative has-icon-left mb-4">
                            <input type="text" class="form-control form-control-xl" v-model="form.firstname"
                                placeholder="Enter your firstname">
                            <div class="form-control-icon">
                                <i class="bi bi-person"></i>
                            </div>
                        </div>
                        <div class="form-group position-relative has-icon-left mb-4">
                            <input type="text" class="form-control form-control-xl" v-model="form.lastname"
                                placeholder="Enter your lastname">
                            <div class="form-control-icon">
                                <i class="bi bi-person"></i>
                            </div>
                        </div>
                        <div class="form-group position-relative has-icon-left mb-4">
                            <input type="text" class="form-control form-control-xl" v-model="form.email"
                                placeholder="Enter your email">
                            <div class="form-control-icon">
                                <i class="bi bi-envelope"></i>
                            </div>
                        </div>
                        <div class="form-group position-relative has-icon-left mb-4">
                            <input type="text" class="form-control form-control-xl" v-model="form.phone"
                                placeholder="Enter your phone">
                            <div class="form-control-icon">
                                <i class="bi bi-telephone-fill"></i>
                            </div>
                        </div>
                        <div class="form-check form-check-lg d-flex align-items-end">
                            <input class="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label text-gray-600" for="flexCheckDefault">
                                Keep me logged in
                            </label>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block btn-lg shadow-lg mt-5">Log in</button>
                    </form>
                    <div class="text-center mt-5 text-lg fs-5">
                        <p class="text-gray-600">Don't have an account? <a href="/mazer/applications/auth/register"
                                class="font-bold">Sign
                                up</a>.</p>
                        <p><a class="font-bold" href="mazer/applications/auth/forgot-password">Forgot password?</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

const { signUp } = useUtils();

const form = reactive({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    mode: "userSignUp",
});

async function register() {

    const formvalue = JSON.stringify(form);
    const data = await signUp(formvalue);
    console.log(data);
    const auth = useAuth();
    auth.value.isAuthenticated = true;
    return navigateTo('/');

}

// onMounted(() => {
//     if (auth.value.isAuthenticated) {
//         navigateTo('/');
//     }
// });


// if (auth.value.isAuthenticated) {
//     // Do not redirect to registration page
//     return true;
// } else {
//     // Redirect to registration page
//     return navigateTo('/');
// }



</script>
