

<header>
    <a href="./">
        <h1>Harlem Rails</h1>
        <h3>The CSS FIRST Robotics Team</h3>
    </a>
    <nav>
        <a href="./">Home</a>
        <a href="./#sponsors">Sponsors</a>
        <a href="./#contact">Contact</a>
        <a href="./team">Team</a>
        <a href="./outreach">Outreach</a>
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