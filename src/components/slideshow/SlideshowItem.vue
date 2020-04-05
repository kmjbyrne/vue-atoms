<template>
    <article class="slideshow-item" v-bind:class="{ 'slideshow-item--active': active }">
        <div class="slideshow-item__inner">
            <div class="slideshow-item__content">
                <slot></slot>
            </div>
        </div>
        <img class="slideshow-item__image" :src="image" />
    </article>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component
export default class Splash extends Vue {
    @Prop({ default: '' }) image!: string;
    public active = false;

    @Watch('active')
    activeChanged() {
        console.log(this.active);
    }
}
</script>

<style lang="scss">
.slideshow-item {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 18;
    visibility: hidden;
    opacity: 0;
    background-color: rgba(255, 255, 255, 0);
    transform: matrix(1, 0, 0, 1, 0, 0);

    background-position: center 0px;
    transition: opacity 1.5s ease, visibility 1.5s;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    text-align: center;
    top: 0;
    visibility: hidden;
    width: 100%;
    z-index: 0;

    &__inner {
        z-index: 30;
        background-color: rgba(0, 0, 0, 0.5);
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        position: absolute;
    }

    &__content {
        padding: 15rem 5rem 5rem 5rem;
        p {
            color: white;
        }
    }

    &__image {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        border: 0;
        display: inline-block;
        vertical-align: baseline;
        background-position: 50%;
        background-size: cover;
        transform: scale(1.15);
        transition: opacity 500ms, transform 10s linear;
    }

    &--active {
        opacity: 1;
        z-index: 100;
        visibility: visible;
    }

    &--active &__image {
        transform: scale(1);
    }
}
</style>
