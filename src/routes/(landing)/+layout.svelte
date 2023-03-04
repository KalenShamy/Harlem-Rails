<script lang="ts">
    import { onMount } from 'svelte';
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';

    let rails: HTMLDivElement | undefined;
    let rail1: HTMLDivElement | undefined;
    let rail2: HTMLDivElement | undefined;
    let tracks: HTMLDivElement | undefined;

    let count: number | undefined;
    let lastCount: number | undefined;

    onMount(() => {
        const railsTween = tweened(0, { duration: 10, easing: cubicOut });


        railsTween.subscribe((v) => {
            if (v == 1) {
                rails.style.width = `0`;
            } else if (v == 0) {
                rails.style.width = ``;
            }
        });

        //rail1Tween.set(-100);
        //rail2Tween.set(100);
        //tracksTween.set(100);

        function createTracks() {
            if (rail1 && rail2 && tracks && lastCount !== count) {
                tracks.innerHTML = "";
                for (let i = 0; i < count; i++) {
                    const track = document.createElement('div');
                    track.classList.add('track');
                    track.style.left = `${i * 40 + 20}px`;
                    tracks.appendChild(track);
                }
                lastCount = count;
            }
        }

        const moveRails = () => {
            if (!rails) return;
            const scroll = window.scrollY;
            if (scroll < 200 && lastTrack !== 0) {
                // rails appear
                railsTween.set(0);
                lastTrack = 0;
            } else if (scroll >= 200 && lastTrack !== 1) {
                // rails disappear
                railsTween.set(1);
                lastTrack = 1;
            }
        }

        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                if (entry.target === tracks) {
                // Call your function here
                    count = Math.floor(tracks?.getBoundingClientRect().width / 40)+1;
                    createTracks();
                }
            }
        });

        resizeObserver.observe(tracks);

        count = Math.floor(tracks?.getBoundingClientRect().width / 40);
        createTracks();

        let lastTrack = 0;

        window.addEventListener("scroll", moveRails);
    });
</script>

<section class="hero">
    <img src="images/hero_background.jpg" alt="">
    <h1>Harlem Rails</h1>
    <h3>The Columbia Secondary School FIRST Robotics Team</h3>
    <a href="team" class="OpacityLink">Meet the Team</a>
    <div class="rails" bind:this={rails}>
        <div id="rail1" bind:this={rail1}></div>
        <div id="rail2" bind:this={rail2}></div>
        <div id="tracks" bind:this={tracks}></div>
    </div>
</section>
<slot />
<footer>
    <div class="container">
        <p id="copyright">Copyright © 2023 Harlem Rails Robotics - All Rights Reserved.</p>
        <a id="credit" href="https://createdbykalen.com" target="_blank" rel="noreferrer">Created by Kalen</a>
    </div>
    <div class="rails">
        <div id="rail1"></div>
        <div id="rail2"></div>
        <div id="tracks">
            {#each Array(50) as _, i}
                <div class="track" style="left: {i * 40 + 20}px"></div>
            {/each}
        </div>
    </div>
</footer>