<script setup>
// eslint-disable-next-line no-undef
defineProps({
    schedule: {
        type: Array,
        default: () => {},
    },
});
</script>

<template>
    <ul class="schedule-list">
        <li
            v-for="item in schedule"
            :key="item.id"
            class="schedule-list__item"
        >
            <div class="schedule-list__item-time">
                {{ item.time }}
            </div>
            <div class="schedule-list__item-block">
                <h3 class="schedule-list__item-block-title">
                    {{ item.title }}
                </h3>
                <span class="schedule-list__item-block-locations">
                    <img
                        src="@/assets/icons/locations.svg"
                        alt="Место проведения"
                        class="schedule-list__item-block-locations-images"
                    />
                    {{ item.location }}
                </span>
            </div>
        </li>
    </ul>
</template>

<style scoped lang="scss">
.schedule-list {
    margin: 0;
    padding: 0;
    list-style: none;

    &__item {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    &__item-time {
        position: relative;
        width: 100%;
        max-width: 30%;
        font-size: 14px;
        font-weight: $font-semi-bold;
        line-height: 22px;
        color: $gray;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            width: 1px;
            background: $gray;
        }
    }

    &__item-block {
        width: 100%;
        max-width: 70%;
        margin-left: 10px;
        padding: 12px;
        border-radius: $radius-medium;
        background: $gray-400;
    }

    &__item-block-title {
        margin-bottom: 10px;
        font-size: 12px;
        font-weight: $font-semi-bold;
        line-height: 20px;
        color: $text-color;
    }

    &__item-block-locations {
        display: flex;
        align-items: center;
        font-size: 10px;
        font-weight: $font-semi-bold;
        line-height: 18px;
        color: $text-color;
    }

    &__item-block-locations-images {
        margin-right: 10px;
    }
}
</style>
