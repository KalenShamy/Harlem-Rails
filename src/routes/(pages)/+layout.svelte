<script lang="ts">
    import { onMount } from "svelte";

    onMount(() => {
        const updateNav = () => {
            if (window.scrollY > 90) {
                document.getElementsByTagName('nav')[0].classList.add('scrolled');
                document.getElementsByTagName('nav')[0].classList.add('scrolled2');
            } else {
                document.getElementsByTagName('nav')[0].classList.remove('scrolled');
                document.getElementsByTagName('nav')[0].classList.remove('scrolled2');
            }
        }

        window.addEventListener("scroll", updateNav);
        updateNav();
    });
</script>

<header>
    <a href="./">
        <h1>Harlem Rails</h1>
        <h3>The CSS FIRST Robotics Team</h3>
    </a>
    <nav>
        <h1>Harlem Rails</h1>
        <div class="links">
            <a href="../">Home</a>
            <a href="../#sponsors">Sponsors</a>
            <a href="../#contact">Contact</a>
            <a href="../team">Team</a>
            <a href="../outreach">Outreach</a>
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
    </nav>
    <div class="rails">
        <div id="rail1"></div>
        <div id="rail2"></div>
        <div id="tracks">
            {#each Array(50) as _, i}
                <div class="track" style="left: {i * 40 + 20}px"></div>
            {/each}
        </div>
    </div>
</header>
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