<script setup>
// eslint-disable-next-line no-undef
defineProps({
    posts: {
        type: Array,
        default: () => [],
    },
});
</script>

<template>
    <div class="news-block">

        <h2 class="news-block__title">
            Новости
        </h2>

        <ul class="news-block__list">
            <li
                v-for="post in posts"
                :key="post.id"
                class="news-block__list-item"
                @click="$router.push(`/post/${post.id}`)"
            >
                <img
                    v-if="post.images"
                    :src="post.images"
                    :alt="post.title.rendered"
                    class="news-block__list-item-image"
                />
                <div v-else class="news-block__list-item-image-none" />

                <span class="news-block__list-item-label">
                    Новости
                </span>
                <h2 class="news-block__list-item-title">
                    {{ post.title }}
                </h2>

                <div class="news-block__list-item-interface">
                    <span class="news-block__list-item-date">
                        30.05.2022
                    </span>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.news-block {
    margin: 0 20px;
    padding-bottom: 66px;

    &__title {
        margin-bottom: 28px;
        font-size: 18px;
        font-weight: $font-semi-bold;
        line-height: 24px;
        color: $text-color;
    }

    &__list {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    &__list-item {
        width: 100%;
    }

    &__list-item-image {
        width: 100%;
        max-height: 235px;
        border-radius: $radius-large;
        object-fit: cover;
    }

    &__list-item-image-none {
        width: 100%;
        min-height: 235px;
        border-radius: $radius-large;
        background: rgba($gray, 0.2) url('../../assets/images/no-photo.png') no-repeat center;
    }

    &__list-item-label {
        display: block;
        margin: 10px 0;
        font-size: 14px;
        line-height: 22px;
        color: $gray;
    }

    &__list-item-title {
        margin-bottom: 18px;
        font-size: 16px;
        font-weight: $font-semi-bold;
        line-height: 24px;
        color: $text-color;
    }

    &__list-item-interface {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid rgba($black-primary, 0.2);
    }

    &__list-item-date {
        display: block;
        font-size: 12px;
        font-weight: $font-semi-bold;
        line-height: 20px;
        color: $gray;
    }

    &__list-item-favorite {
        @include reset-button;

        width: 24px;
        height: 24px;
        background: url('../../assets/icons/favorites.svg') no-repeat center center / cover;
    }
}
</style>
