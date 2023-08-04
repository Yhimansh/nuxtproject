<template>
    <div class="menu menu-sub menu-sub-dropdown w-auto p-10 mt-10 shadow" data-kt-menu="true" id="kt-toolbar-filter">

        <div class="d-flex flex-wrap text-center" style="gap: 20px;">
            <div class="d-flex" style="gap: 9px;">
                <p>Year range: </p>
                <input type="text" aria-label="Minimum" class="form-control" maxlength="10" pattern="[0-9]*"
                    inputmode="numeric" placeholder="Min" id="car-min-year">
                <input type="text" aria-label="Maximum" class="form-control" maxlength="10" pattern="[0-9]*"
                    inputmode="numeric" placeholder="Max" id="car-max-year">
            </div>

            <div class="d-flex" style="gap: 9px;">
                <p>Mileage: </p>
                <input type="text" aria-label="Minimum" class="form-control" maxlength="10" pattern="[0-9]*"
                    inputmode="numeric" placeholder="Min" id="minKMValue">
                <input type="text" aria-label="Maximum" class="form-control" maxlength="10" pattern="[0-9]*"
                    inputmode="numeric" placeholder="Max" id="maxKMValue">
            </div>
        </div>

    </div>
</template>
<script setup>
</script>
<style scoped
></style>