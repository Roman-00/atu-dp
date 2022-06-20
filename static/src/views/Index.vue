<script setup>
import LoginForm from '@/components/Auth/LoginForm.vue';
</script>

<template>
    <div class="auth">
        <img src="@/assets/images/auth-previews.jpg" alt="Auth images">

        <LoginForm />
    </div>
</template>

<style lang="scss" scoped>
.auth {
    min-height: 100vh;
    padding: 30px;

    img {
        display: block;
        max-width: 250px;
        margin: 0 auto 20px;
    }
}
</style>
