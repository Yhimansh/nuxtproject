<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>students List</h4>
                <NuxtLink to="/user/create" class="btn btn-primary float-end">Add Student</NuxtLink>
            </div>
            <div class="card-body">
                <table class="table table-success table-striped">
                    <thead>
                        <tr>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- {{ fetchvalue }} -->
                        <tr v-for="(student, index) in fetchvalue" :key="index">
                            <td>{{ student.firstname }}</td>
                            <td>{{ student.lastname }}</td>
                            <td>{{ student.email }}</td>
                            <td>{{ student.phone }}</td>
                            <td>
                                <NuxtLink :to="`/user/${student.leadid}`" class="btn btn-success btn-sm mx-2">Edit
                                </NuxtLink>
                                <button type="button" @click="deleteStudent(student.leadid)"
                                    class="btn btn-danger btn-sm mx-2">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    middleware: ['auth']
});

const fetchvalue = allData();

const { allStudent, deleteLead } = useUtils();
async function fetchData() {
    const { data } = await allStudent();
    fetchvalue.value = data
}
fetchData();
async function deleteStudent(studentid) {
    const data = await deleteLead(studentid);
    if (data.msg = 'Deleted Successfully') {
        this.fetchData();
    }
}

</script>

