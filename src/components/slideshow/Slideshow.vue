<template>
    <div class="slideshow">
        <div class="slideshow__wrapper">
            <slot></slot>
        </div>
        <div class="slideshow__toggle slideshow--back" @click="select(-1)">
            <div class="slideshow__angle"></div>
        </div>
        <div class="slideshow__toggle slideshow--next" @click="select(1)">
            <div class="slideshow__angle"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import SlideshowItem from './SlideshowItem.vue';

@Component({
    components: {
        SlideshowItem
    }
})
export default class Slideshow extends Vue {
    private index = 0;
    private timer: any;
    private slides: any = [];

    @Prop({ default: 5000 }) rate!: number;

    mounted() {
        this.slides = this.$children;
        this.setComponentInterval();
    }

    setComponentInterval() {
        this.timer = setInterval(() => this.select(1), this.rate);
    }

    resetInterval() {
        clearInterval(this.timer);
        this.setComponentInterval();
    }

    activateIndex(itemIndex: number) {
        this.resetInterval();
        this.slides[itemIndex].active = true;
    }

    deactivateIndex(itemIndex: number) {
        this.resetInterval();
        this.slides[itemIndex].active = false;
    }

    select(event: number) {
        this.deactivateIndex(this.index);
        this.index += event;
        if (event === -1 && this.index === -1) {
            this.index = this.slides.length - 1;
        } else if (event === 1 && this.index === this.slides.length) {
            this.index = 0;
        }
        this.activateIndex(this.index);
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/mixins';

.slideshow {
    position: relative;
    top: 0;
    height: 570px;
    width: 100%;
    text-align: center;
    min-height: auto;
    color: #fff;
    z-index: 20;

    &__toggle {
        cursor: pointer;
        background: rgba(0, 0, 0, 0.5);
        width: 40px;
        height: 40px;
        position: absolute;
        display: block;
        z-index: 1000;
        top: 50%;
        transform: matrix(1, 0, 0, 1, 20, -20);
        left: 0px;

        &::before {
            font-family: revicons;
            font-size: 15px;
            color: #fff;
            display: block;
            line-height: 40px;
            text-align: center;
        }
    }

    &__toggle:hover &__angle {
        border-color: gray;
        border-width: 3px;
    }

    &__angle {
        display: inline-block;
        position: absolute;
        width: 10px;
        height: 10px;
        background: transparent;
        border-top: 2px solid #bfbfbf;
        border-left: 2px solid #bfbfbf;
        transition: all 250ms ease-in-out;
        text-decoration: none;
        color: transparent;
        top: 50%;
        transform: rotate(-45deg);
        left: 0;
        margin: auto;
        right: 0;
    }

    &--back {
        top: 50%;
        transform: matrix(1, 0, 0, 1, 20, -20);
        left: 0px;
    }

    &--next {
        top: 50%;
        transform: matrix(1, 0, 0, 1, -60, -20);
        left: 100%;
    }

    &--back &__angle {
        transform: translateY(-50%) rotate(-45deg);
    }

    &--next &__angle {
        transform: translateY(-50%) rotate(135deg);
    }

    &__wrapper {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
    }

    &--active {
        opacity: 1;
        z-index: 100;
        visibility: visible;
    }

    &--active &__image {
        transform: scale(1);
    }

    @include responsive('tablet-wide', max) {
        &__image {
            max-width: 173%;
            width: 140%;

            width: 200%;
            max-width: none;
            text-align: center;
            margin: auto;
            left: -50%;
            right: -50%;
        }
    }
}
</style>
