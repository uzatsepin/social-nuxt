<template>
    <div>
        <MainSection title="Home" :loading="loading">
            {{ user }}
        </MainSection>
    </div>
</template>

<script setup>
import useAuth from "~/composables/useAuth.js";
const loading = ref(false);
const {useAuthUser} = useAuth()
const user = useAuthUser();
</script>