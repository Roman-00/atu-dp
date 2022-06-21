<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import NewsBlock from '@/components/index/NewsBlock.vue';
import Skeleton from '@/components/index/Skeleton.vue';

const store = useStore();
onMounted(() => {
    store.dispatch('getPosts');
});
const posts = computed(() => store.getters.allPosts);
</script>

<template>
    <div
        v-if="posts.length > 0"
        class="index"
    >
        <div class="index-banner">
            <h2 class="index-banner__title">
                Алматинский Технологический
                Университет
            </h2>

            <p class="index-banner__text">
                Для более подробной информации, можно
                посетить наш сайт.
            </p>

            <a href="https://atu.edu.kz/" target="_blank" class="index-banner__link-to-web">
                Посетить
            </a>
        </div>

        <NewsBlock
            :posts="posts"
        />
    </div>

    <Skeleton v-else/>
</template>

<style scoped lang="scss">
.index-banner {
    margin: 20px 20px 28px;
    padding: 12px 16px;
    border-radius: $radius-large;
    background: $light-gray;
    &__title {
        margin-bottom: 8px;
        font-size: 14px;
        font-weight: $font-semi-bold;
        line-height: 22px;
        color: $text-color;
    }
    &__text {
        margin-bottom: 8px;
        font-weight: $font-regular;
        font-size: 12px;
        line-height: 20px;
        color: $gray;
    }
    &__link-to-web {
        display: block;
        width: 100%;
        max-width: 100px;
        padding: 4px 22px;
        font-size: 12px;
        font-weight: $font-regular;
        line-height: 18px;
        text-decoration: none;
        border-radius: $radius-medium;
        background: $blue-primary;
        color: $white;
    }
}
</style>
