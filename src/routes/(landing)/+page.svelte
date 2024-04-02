<svelte:head>
    <link rel="stylesheet" href="css/index.css">
</svelte:head>

<script lang="ts">
    let form = {
        name: "",
        email: "",
        message: ""
    }

    let success: boolean | undefined = undefined;

    let formObject: HTMLFormElement;
    let formCompleted: HTMLDivElement;

    let inputsValid = false;

    const checkInputs = () => {
        let valid = true
        for (const key in form) {
            if (form[key] === "") {
                valid = false
                break
            }
        }
        if (!/^(?:[a-z0-9!#$%&'*+.=?^_`{|}~-]+|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+")@[a-zA-Z0-9-]{1,256}\.[a-zA-Z0-9-]{2,6}$/gi.test(form.email)) {
            valid = false;
        }
        inputsValid = valid;
    }

    async function submit() {
        if (!inputsValid) return;

        const formData = new FormData(formObject);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

		/*fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                success = true;
            } else {
                console.log(response);
                success = false;
            }
        })
        .catch(error => {
            console.log(error);
            success = false;
        })
        while (success === undefined) {
            await sleep(50);
        }*/
        success = true;
        formObject.style.transform = "translateX(100vw)";
        formCompleted.style.width = "100%";
	};

    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
</script>

<section>
    <h2><span>&gt;</span> Who are we?</h2>
    <p>
        The Harlem Rails is a team of passionate young scholars at Columbia Secondary School.
        We build robots to compete in the FIRST Robotics Competition (FRC) every year, learning
        time-management, communication, and teamwork.
    </p>
</section>
<section>
    <h2><span>&gt;</span> What is FIRST?</h2>
    <p>
        FIRST is an international non-profit youth organization that operates FRC. FIRST’s mission
        is to educate young students to realize their power to build a better future through
        technology. Each season of FRC, teams are given only six weeks to design, manufacture,
        assemble, program, and test a robot to compete in a new game. If a team performs well
        enough at regional competitions, they move on to the World Championship, where they compete
        against the best of the best.
    </p>
</section>
<section>
    <h2><span>&gt;</span> Our 2023 Robot</h2>
    <div class="robot">
        <div>
            <h3>Meet Nakji!</h3>
            <img src="images/robots/2023.webp" alt="Our 2023 Season FRC Robot">
        </div>
        <p>
            We built Nakji for the 2023 Season FRC game, CHARGED UP. CHARGED UP required a robot that
            could pick up cones and cubes and place them in a grid to score points. This was our
            rookie season and we participated in the NYC Regional Week 6, placing 32nd of 50 teams.
            We won rookie inspiration award and look forward to using what we learned to do even
            better in 2024!
        </p>
    </div>
</section>
<section>
    <h2><span>&gt;</span> Our Sponsors</h2>
    <div class="sponsors">
        <div class="blue">
            <img src="images/sponsors/Columbia.webp" alt="Columbia University Logo">
            <div>
                <h3>Columbia University</h3>
                <p>We greatly appreciate Columbia’s support, that provided us with mentors and an engineering lab.</p>
                <h4>Blue Sponsor</h4>
            </div>
        </div>
        <div class="silver">
            <img src="images/sponsors/GHF.webp" alt="GHF Logo">
            <div>
                <h3>Gene Haas Foundation</h3>
                <p>With the help of the Gene Haas Foundation's support, look forward to building a swerve drivetrain to compete in 2025 and future seasons.</p>
                <h4>Silver Sponsor</h4>
            </div>
        </div>
    </div>
</section>
<section>
    <h2><span>&gt;</span> Outreach Events</h2>
    <div class="outreach">
        <!--<div class="silver">
            <img src="images/outreach/Event.webp" alt="Event">
            <div>
                <h3>Event Title</h3>
                <p>On 02/31/24, we will be at LOCATION, showcasing our robot from the 2024 season to AUDIENCE.</p>
                <h4>Upcoming...</h4>
            </div>
        </div>-->
        <div class="blue" style="height: auto;">
            <div>
                <h3 style="margin: 20px;color: var(--dark-main);">None yet... check back again soon!</h3>
            </div>
        </div>
</section>
<section id="contact">
    <h2><span>&gt;</span> Contact Us</h2>
    <form method="POST" bind:this={formObject}>
        <input type="hidden" name="access_key" value="be4e03a9-5da0-49c7-8a95-ac7bce7c18f3">
        <input type="hidden" name="subject" value="Harlem Rails Contact Form Submission">

        <label for="name">Your Name</label>
        <input name="name" id="name" type="text" bind:value={form.name} on:input={checkInputs} required>

        <label for="email">Your Email</label>
        <input name="email" id="email" type="email" bind:value={form.email} on:input={checkInputs} required>

        <label for="message">Message</label>
        <textarea name="message" id="message" rows=6 bind:value={form.message} on:input={checkInputs} required/>

        <button type="button" disabled={!inputsValid} on:click={submit}>Send</button>
    </form>
    <div class="formCompleted" bind:this={formCompleted}>
        <div class="message">
            {#if success}
                <h1>Your message has been delivered</h1>
                <h3>We will get back to you soon!</h3>
            {:else}
                <h1>Oops, something went wrong</h1>
                <h3>Please try again later</h3>
            {/if}
            <img src="favicon.png" alt="">
        </div>
    </div>
</section>