<svelte:head>
    <link rel="stylesheet" href="index.css">
</svelte:head>

<script lang="ts">
    let form = {
        name: "",
        email: "",
        message: ""
    }

    let success = false;

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

		fetch('https://api.web3forms.com/submit', {
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
        await sleep(250);
        formObject.style.transform = "translateX(100vw)";
        formCompleted.style.width = "100%";
	};

    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
</script>

<section class="img_text">
    <h2>What is the FIRST Robotics Competition?</h2>
    <div>
        <img src="images/robot_work.jpg" alt="">
        <p>
            The <a href="https://www.firstchampionship.org/" target="_blank">FIRST Robotics Competition</a> (FRC) is an
            international high school robotics competition that involves students in a demanding and competitive real-world
            engineering project. Each year, teams are given six weeks to plan and construct a robot to compete in a
            brand-new FIRST game. FRC supports volunteer mentors who may help lead the students through the design and
            build process. In addition to teaching children valuable life skills, the tournament gives students practical
            experience in engineering, computer programming, and other STEM subjects.
            <a href="https://www.firstinspires.org/robotics/frc" target="_blank" class="OpacityLink">Learn More</a>
        </p>
    </div>
</section>
<section id="sponsors">
    <h2>Meet our Sponsors</h2>
    <p>
        We are grateful for the support of our sponsors. Without them, we would not be able to compete in the FIRST Robotics Competition.
    </p>
    <div class="grid">
        <a href="https://www.bloomberg.com/company/press/bloomberg-supports-teams-first-robotics-competition/" target="_blank" rel="noreferrer">
            <img src="images/Bloomberg.png" alt="">
        </a>
        <a href="https://outreach.engineering.columbia.edu/content/columbias-first-robotics-team" target="_blank" rel="noreferrer">
            <img src="images/Columbia_University.png" alt="">
        </a>
        <a href="https://www.gofundme.com/f/help-the-columbia-secondary-school-robotics-team" target="_blank"><div><h1>You!</h1><h3>(become a sponsor)</h3></div></a>
    </div>
</section>
<section id="contact">
    <h2>Get in Touch</h2>
    <form method="POST" bind:this={formObject}>
        <input type="hidden" name="access_key" value="4bae6462-92d5-455b-b5e3-69cd052a9cc1">
        <input type="hidden" name="subject" value="Harlem Rails Contact Form Submission">

        <label for="name">Name *</label>
        <input name="name" id="name" type="text" bind:value={form.name} on:input={checkInputs} required>

        <label for="email">Email *</label>
        <input name="email" id="email" type="text" bind:value={form.email} on:input={checkInputs} required>

        <label for="message">Message *</label>
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
        </div>
        <div class="rails">
            <div id="rail1"></div>
            <div id="rail2"></div>
            <div id="tracks">
                {#each Array(100) as _, i}
                    <div class="track" style="left: {i * 40 + 20}px"></div>
                {/each}
            </div>
        </div>
    </div>
</section>