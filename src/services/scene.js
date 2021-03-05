import { TweenMax, TimelineMax, Linear } from 'gsap';
import * as ScrollMagic from 'scrollmagic';
import * as d3 from 'd3';

import Globe from './globe';

class Scene {
    constructor() {
        this.controller = new ScrollMagic.Controller();
    }
    init() {
        this.controller.addScene([
            this.intro(),
            this.autodidact(),
            this.globe(),
            this.photo(),
            this.node(),
            this.design(),
            this.camarts(),
            this.camartsShowcase(),
            this.markly(),
            this.vary(),
        ]);
    }
    intro() {
        const tween = new TimelineMax().add([
            TweenMax.fromTo(
                '#heading',
                1,
                { zIndex: 1, z: 1 },
                { yPercent: -23.6, autoAlpha: 0, ease: Linear.easeNone }
            ),
            TweenMax.fromTo(
                '#subheading',
                1,
                { zIndex: 1 },
                { yPercent: -14.5, autoAlpha: 0, ease: Linear.easeNone }
            ),
            TweenMax.to('#slice-left', 1, { yPercent: -38.2, autoAlpha: 0, ease: Linear.easeNone }),
            TweenMax.to('#slice-right', 1, {
                yPercent: -61.8,
                autoAlpha: 0,
                ease: Linear.easeNone,
            }),
        ]);

        return new ScrollMagic.Scene({
            duration: '61.8%',
        }).setTween(tween);
    }
    autodidact() {
        const tween = new TimelineMax().add([
            TweenMax.set('#content', { y: -200 }),
            TweenMax.fromTo(
                '#text-become-autodidact',
                1,
                { y: 200 },
                { y: 0, ease: Linear.easeNone }
            ),
            TweenMax.to('#text-become-autodidact', 0.5, { autoAlpha: 0, ease: Linear.easeNone }),
            TweenMax.fromTo('#text-learn-from', 1, { y: 200 }, { y: 0, ease: Linear.easeNone }),
            TweenMax.to('#text-learn-from', 0.5, { autoAlpha: 0, ease: Linear.easeNone }),
            TweenMax.fromTo('#traveling', 1, { y: 200 }, { y: 380, ease: Linear.easeNone }),
            TweenMax.fromTo(
                '#traveling',
                0.5,
                { autoAlpha: 0 },
                { autoAlpha: 1, ease: Linear.easeNone }
            ),
        ]);

        return new ScrollMagic.Scene({
            triggerElement: '#content',
            duration: '61.8%',
            offset: 500,
        }).setTween(tween);
    }
    globe() {
        const blur = d3.scale
            .linear()
            .domain([375, 2560])
            .range([3, 6]);
        const tween = new TimelineMax().add([
            TweenMax.fromTo(
                '#globe-container',
                0.8,
                { '-webkit-filter': `blur(${blur(window.innerWidth)}px)` },
                { '-webkit-filter': 'blur(0)', ease: Linear.easeNone }
            ),
            TweenMax.fromTo(
                '#globe',
                1,
                { scale: Math.max(800, window.innerWidth) / window.globe.diameter },
                { scale: 1, y: 220, ease: Linear.easeNone }
            ),
        ]);

        return new ScrollMagic.Scene({
            triggerElement: '#content',
            duration: '50%',
            offset: 380,
        }).setTween(tween);
    }
    photo() {
        const tween = new TimelineMax().add([
            TweenMax.to('#group', 1, {
                rotationX: 6,
                rotationY: 0,
                rotationZ: 4.5,
                ease: Linear.easeNone,
            }),
            TweenMax.fromTo(
                '#photo-a',
                1,
                { '-webkit-filter': 'blur(0)' },
                {
                    '-webkit-filter': `blur(3px)`,
                    scale: 1.3,
                    xPercent: -38.2,
                    yPercent: -38.2,
                    ease: Linear.easeIn,
                }
            ),
            TweenMax.to('#photo-b', 1, { xPercent: -18.2, yPercent: -18.2, ease: Linear.easeIn }),
            TweenMax.fromTo(
                '#photo-c',
                1,
                { '-webkit-filter': 'blur(0)' },
                {
                    '-webkit-filter': `blur(6px)`,
                    scale: 1.6,
                    xPercent: -61.8,
                    yPercent: -61.8,
                    ease: Linear.easeIn,
                }
            ),
            TweenMax.to('#photo-d', 1, { xPercent: -1.8, yPercent: -1.8, ease: Linear.easeIn }),
            TweenMax.fromTo(
                '#photo-e',
                1,
                { '-webkit-filter': 'blur(0)' },
                {
                    '-webkit-filter': `blur(8px)`,
                    scale: 1.8,
                    xPercent: -88.8,
                    yPercent: -88.8,
                    ease: Linear.easeIn,
                }
            ),
            TweenMax.fromTo(
                '#photo-f',
                1,
                { '-webkit-filter': 'blur(0)' },
                {
                    '-webkit-filter': `blur(6px)`,
                    scale: 1.6,
                    xPercent: -61.8,
                    yPercent: -61.8,
                    ease: Linear.easeIn,
                }
            ),
            TweenMax.fromTo(
                '#photo-g',
                1,
                { '-webkit-filter': 'blur(0)' },
                {
                    '-webkit-filter': `blur(3px)`,
                    xPercent: -38.2,
                    yPercent: -38.2,
                    ease: Linear.easeIn,
                }
            ),
            TweenMax.fromTo(
                '#photo-h',
                1,
                { '-webkit-filter': 'blur(0)' },
                {
                    '-webkit-filter': `blur(2px)`,
                    xPercent: -21.8,
                    yPercent: -21.8,
                    ease: Linear.easeIn,
                }
            ),
        ]);

        return new ScrollMagic.Scene({
            triggerElement: '#photography',
            triggerHook: 0.1,
            duration: '100%',
        }).setTween(tween);
    }
    node() {
        const tween = new TimelineMax().add([
            TweenMax.fromTo(
                '#nodes path',
                1,
                { 'stroke-dashoffset': 1200 },
                { 'stroke-dashoffset': 0, ease: Linear.easeIn }
            ),
        ]);

        return new ScrollMagic.Scene({
            triggerElement: '#nodes',
            triggerHook: 0.5,
            duration: '80%',
        }).setTween(tween);
    }
    design() {
        const tween = new TimelineMax().add([
            TweenMax.to('#text-design', 1, { yPercent: -30, autoAlpha: 0, ease: Linear.easeNone }),
            TweenMax.fromTo(
                '#text-dot-connecting',
                1,
                { yPercent: 30, autoAlpha: 0 },
                { yPercent: 0, autoAlpha: 1, ease: Linear.easeNone }
            ),
        ]);

        return new ScrollMagic.Scene({
            triggerElement: '#design',
            triggerHook: 0.5,
            duration: '38.2%',
        }).setTween(tween);
    }
    camarts() {
        const tween = new TimelineMax().add([
            TweenMax.fromTo('#text-camarts', 1, { y: '-50vh' }, { y: 0, ease: Linear.easeNone }),
            TweenMax.fromTo(
                '#backdrop',
                1,
                { height: 0 },
                { height: '100%', ease: Linear.easeNone }
            ),
        ]);

        return new ScrollMagic.Scene({
            triggerElement: '#camarts',
            triggerHook: 1,
            duration: '100%',
        }).setTween(tween);
    }
    camartsShowcase() {
        return new ScrollMagic.Scene({
            triggerElement: '#camarts',
            triggerHook: 0.1,
            duration: '100%',
        }).setClassToggle('#camarts', 'active');
    }
    markly() {
        const tween = new TimelineMax().add([
            TweenMax.to('#markly-showcase-a', 1, { yPercent: -10, ease: Linear.easeNone }),
            TweenMax.to('#markly-showcase-b', 1, { yPercent: -30, ease: Linear.easeNone }),
        ]);

        return new ScrollMagic.Scene({
            triggerElement: '#markly',
            triggerHook: 0.1,
            duration: '100%',
        }).setTween(tween);
    }
    vary() {
        const tween = new TimelineMax().add([
            TweenMax.from('#vary-showcase-a', 1, { xPercent: 10, ease: Linear.easeNone }),
            TweenMax.from('#vary-showcase-b', 1, { xPercent: 30, ease: Linear.easeNone }),
            TweenMax.from('#vary-showcase-c', 1, { xPercent: 60, ease: Linear.easeNone }),
        ]);

        return new ScrollMagic.Scene({
            triggerElement: '#vary',
            triggerHook: 0.9,
            duration: '100%',
        }).setTween(tween);
    }
}

export default Scene;
