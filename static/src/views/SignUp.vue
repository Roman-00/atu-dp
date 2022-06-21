<script setup>
import AuthSignUpForm from '@/components/Auth/SignUp.vue';
</script>

<template>
    <div class="sign-up">
        <img src="@/assets/images/auth-previews.jpg" alt="Images SignUp">

        <AuthSignUpForm />
    </div>
</template>

<style lang="scss" scoped>
.sign-up {
    position: relative;
    min-height: 100vh;
    padding: 30px 20px;

    img {
        display: block;
        max-width: 280px;
        margin: 0 auto;
    }
}
</style>
