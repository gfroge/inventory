<template>
    <aside class="aside">
        <div class="aside__image-wrap">
            <picture>
                <source srcset="images/aside.webp">
                <img width="208" height="240" src="images/aside.png" alt="aside image">
            </picture>
        </div>
        <div class="aside__info">
            <div class="aside__title">
                <div class="skeleton-loader"></div>
            </div>
            <div class="aside__text">
                <div style="width: 81.57%;" class="aside__line">
                    <div class="skeleton-loader"></div>
                </div>
                <div style="width: 100%;" class="aside__line">
                    <div class="skeleton-loader"></div>
                </div>
                <div style="width: 89.47%;" class="aside__line">
                    <div class="skeleton-loader"></div>
                </div>
                <div style="width: 84.21%;" class="aside__line">
                    <div class="skeleton-loader"></div>
                </div>
                <div style="width: 73.68%;" class="aside__line">
                    <div class="skeleton-loader"></div>
                </div>
                <div style="width: 42.1%;" class="aside__line">
                    <div class="skeleton-loader"></div>
                </div>
            </div>
        </div>
    </aside>
</template>

<script setup lang="ts">
// Данные (текст) можно принимать через пропсы,
// и отрисовывать по v-if skeleton-loader, пока они не получены
</script>

<style scoped lang="scss">
.aside {
    padding: 18px 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @extend %border;

    &__image-wrap {
        img {
            max-width: 100%;
            border-radius: 8px;
        }
    }

    &__info {
        margin: 0 auto;
        max-width:600px;
        width: 100%;
        margin-top: 20px;
    }

    &__title {
        width: 100%;
        height: 26px;
        margin-bottom: 24px;
        .skeleton-loader {
            border-radius: 8px;
        }
    }

    &__line {
        height: 10px;
        margin: 0 auto;
        .skeleton-loader {
            border-radius: 4px;
        }
        margin-bottom: 16px;
        &:last-child{
            margin: 8px auto 6px auto;
        }
    }
}
</style>