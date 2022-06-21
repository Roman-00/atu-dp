<template>
    <div
        class="user-modal-wrapper"
    >
        <div
            class="user-modal-content"
        >
            <div class="user-modal-header">
                <span class="user-modal-header__text">
                    Роман Васин
                </span>
            </div>

            <div class="user-modal-body">
                <slot/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.user-modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background: rgba($black-primary, 0.6);
    z-index: 99;
}

.user-modal-content {
    position: relative;
    width: 100%;
    max-height: 450px;
    height: 100%;
    padding: 12px 20px;
    border-radius: $radius-large $radius-large;
    background: $white;
}

.user-modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__text {
        font-size: 16px;
        font-weight: $font-semi-bold;
        line-height: 24px;
        color: $text-color;
    }

    &__close {
        @include reset-button;

        position: relative;
        display: block;
        width: 24px;
        height: 24px;
        background: url('../../assets/icons/close.svg') no-repeat center center / cover;

        &::before {
            content: '';
            position: absolute;
            top: -8px;
            left: -8px;
            right: 0;
            bottom: 0;
            padding: 20px;
            transform: translate(0, 0);
        }
    }
}
</style>
