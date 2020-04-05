<template>
    <div id="app">
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
        <Slideshow>
            <SlideshowItem>Test</SlideshowItem>
            <SlideshowItem>Test 2 </SlideshowItem>
            <SlideshowItem>Test 3</SlideshowItem>
            <SlideshowItem>Test 4</SlideshowItem>
        </Slideshow>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import Slideshow from './components/slideshow/Slideshow.vue';
import SlideshowItem from './components/slideshow/SlideshowItem.vue';

@Component({
    components: {
        HelloWorld,
        Slideshow,
        SlideshowItem
    }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
