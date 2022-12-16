<template>
    <div class="menu">
        <button class="menu__close">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 1.05L10.95 0L6 4.95L1.05 0L0 1.05L4.95 6L0 10.95L1.05 12L6 7.05L10.95 12L12 10.95L7.05 6L12 1.05Z"
                    fill="white" />
            </svg>
        </button>
        <div class="menu__image-wrap">
            <picture>
                <source srcset="images/aside.webp">
                <img width="130" height="130" src="images/aside.png" alt="item large image">
            </picture>
        </div>
        <div class="menu__info">
            <div class="menu__title">
                <div class="skeleton-loader"></div>
            </div>
            <div class="menu__text">
                <div style="width: 100%;" class="menu__line">
                    <div class="skeleton-loader"></div>
                </div>
                <div style="width: 100%;" class="menu__line">
                    <div class="skeleton-loader"></div>
                </div>
                <div style="width: 100%;" class="menu__line">
                    <div class="skeleton-loader"></div>
                </div>
                <div style="width: 85.31%;" class="menu__line">
                    <div class="skeleton-loader"></div>
                </div>
                <div style="width: 37.91%;" class="menu__line">
                    <div class="skeleton-loader"></div>
                </div>
            </div>
        </div>
        <div class="menu__delete delete">
            <button class="delete__main-btn">Удалить предмет</button>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    id: { type: Number, default: null }
})
</script>

<style scoped lang="scss">
.menu {
    backdrop-filter: blur(6px);
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 47.62%;
    border-left: 1px solid $PRIMARY-BORDER;

    overflow: hidden;
    padding: 20px 15px;
    width: 250px;
    background-color: rgba($color: $SECONDARY-DARK, $alpha: 0.7) ;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    &__close {
        top: 8px;
        right: 8px;
        position: absolute;
        background: none;

        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
    }


    &__image-wrap {
        min-height: 179px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            max-width: 100%;
        }
    }

    &__info {
        width: 100%;
        padding-top: 16px;
        padding-bottom: 24px;
        border-top: 1px solid $PRIMARY-BORDER;
        border-bottom: 1px solid $PRIMARY-BORDER;
    }

    &__title {
        width: 100%;
        height: 30px;
        margin-bottom: 24px;
        border-radius: 8px;
        overflow: hidden;
    }

    &__line {
        height: 10px;
        margin: 0 auto;
        overflow: hidden;
        border-radius: 4px;

        &:not(:last-child) {
            margin-bottom: 16px;
        }
    }

    &__delete {
        position: relative;
        width: 100%;
        height: 39px;
    }
}

.delete {
    &__main-btn {
        font-family: 'SF pro display';
        font-size: 14px;
        font-weight: 400;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        border-radius: 8px;
        background-color: #FA7272;
        transition: all 0.3s ease 0s;

        &:hover {
            box-shadow: 0px 0px 14px 3px rgba($color: $ACCENT, $alpha: 0.5);
        }
    }
}
</style>