<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
import { TweenMax, TimelineMax } from "gsap";
import * as d3 from 'd3';
import * as topojson from "topojson-client";
import * as planetary from 'planetary.js';
import * as ScrollMagic from 'scrollmagic';
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

export default {
    name: 'HelloWorld',
    props: {
        msg: String,
    },
    mounted() {
        ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
        console.log(`rdapp - mounted - scrollmagic`, new ScrollMagic.Controller());
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
