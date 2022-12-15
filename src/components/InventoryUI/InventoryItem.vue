<template>
    <div class="inventory-item">
        <div class="inventory-item__image">
            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="6" width="48" height="48" fill="#7FAA65" />
                <g filter="url(#filter0_b_0_87)">
                    <rect x="6" width="48" height="48" fill="#B8D998" fill-opacity="0.35" />
                </g>
                <defs>
                    <filter id="filter0_b_0_87" x="-6" y="-12" width="72" height="72" filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="6" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_87" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_0_87" result="shape" />
                    </filter>
                </defs>
            </svg>
        </div>
        <div class="inventory-item__number">
            5
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.inventory-item {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    transition: all 0.2s ease 0s;
    cursor: pointer;
    &:hover{
        background-color: #2F2F2F;
    }
    &__image {
        width: 54px;
        height: 54px;
        img{
            max-width: 100%;
        }
    }

    &__number {
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: $SECONDARY-DARK;
        width: 16px;
        height: 16px;
        border-top: 1px solid $PRIMARY-BORDER;
        border-left: 1px solid $PRIMARY-BORDER;
        border-radius: 6px 0 0 0;
        display: flex;
        align-items: center;
        justify-content: center;

        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 10px;
        color: rgba($color: #ffffff, $alpha: 0.4);
    }
}
</style>