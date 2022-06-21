<template>
    <div class="index-skeleton">
        <div class="index-skeleton-banner">
            <div class="index-skeleton-banner__title" />
            <div class="index-skeleton-banner__text" />
            <div class="index-skeleton-banner__button" />
        </div>

        <div class="index-skeleton__news">
            <div class="index-skeleton__news-title" />

            <div class="index-skeleton__news-list">
                <div class="index-skeleton__news-list-item">
                    <div class="index-skeleton__news-list-item-image" />
                    <div class="index-skeleton__news-list-item-label" />
                    <div class="index-skeleton__news-list-item-title" />
                    <div class="index-skeleton__news-list-item-interface">
                        <div class="index-skeleton__news-list-item-date" />
                        <div class="index-skeleton__news-list-item-favorite"/>
                    </div>
                </div>
                <div class="index-skeleton__news-list-item">
                    <div class="index-skeleton__news-list-item-image" />
                    <div class="index-skeleton__news-list-item-label" />
                    <div class="index-skeleton__news-list-item-title" />
                    <div class="index-skeleton__news-list-item-interface">
                        <div class="index-skeleton__news-list-item-date" />
                        <div class="index-skeleton__news-list-item-favorite"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.index-skeleton {
    margin: 20px 20px 0;
}

.index-skeleton-banner {
    margin-bottom: 28px;
    padding: 12px 16px;
    border-radius: $radius-large;
    background: $light-gray;

    &__title {
        width: 100%;
        height: 44px;
        margin-bottom: 8px;
        border-radius: $radius-large;
        background: rgba($gray, 0.2);
    }

    &__text {
        width: 100%;
        height: 40px;
        margin-bottom: 8px;
        border-radius: $radius-large;
        background: rgba($gray, 0.2);
    }

    &__button {
        width: 100px;
        height: 26px;
        border-radius: $radius-large;
        background: rgba($gray, 0.2);
    }
}

.index-skeleton {
    &__news-title {
        margin-bottom: 28px;
        width: 120px;
        height: 24px;
        border-radius: $radius-medium;
        background: rgba($gray, 0.2);
    }

    &__news-list {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__news-list-item {
        width: 100%;
    }

    &__news-list-item-image {
        width: 100%;
        height: 225px;
        border-radius: $radius-large;
        background: rgba($gray, 0.2);
    }

    &__news-list-item-label {
        margin: 8px 0;
        width: 120px;
        height: 22px;
        border-radius: $radius-medium;
        background: rgba($gray, 0.2);
    }

    &__news-list-item-title {
        width: 100%;
        height: 48px;
        margin-bottom: 18px;
        border-radius: $radius-medium;
        background: rgba($gray, 0.2);
    }

    &__news-list-item-interface {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid rgba($black-primary, 0.2);
    }

    &__news-list-item-date {
        width: 85px;
        height: 20px;
        border-radius: $radius-medium;
        background: rgba($gray, 0.2);
    }

    &__news-list-item-favorite {
        width: 24px;
        height: 24px;
        border-radius: $radius-medium;
        background: rgba($gray, 0.2);
    }
}
</style>
