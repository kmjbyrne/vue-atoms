# Vue Snapatoms

Part of the frontend Snapatoms project. This is the Vue component pack.

## Installation

`npm install @snapatoms/vue`

That's it!

## Component Overview

### Slideshow

Import the slide, and let the slots take care of your content:

#### Script

```javascript

<script>
import { Slideshow } from "@snapatoms/vue";
import { SlideshowItem } from "@snapatoms/vue";

export default {
  name: "App",
  components: {
    Slideshow,
    SlideshowItem,
  },
};
</script>

```

#### Template

```html
<template>
    <div id="app">
        <Slideshow>
            <SlideshowItem>Test</SlideshowItem>
            <SlideshowItem>Test 1</SlideshowItem>
            <SlideshowItem>Test 2</SlideshowItem>
            <SlideshowItem>Test 3</SlideshowItem>
        </Slideshow>
    </div>
</template>
```

#### Styles

```scss
<style>
    @import "~/@snapatoms/vue";

    ...

</style>
```

## Development

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
