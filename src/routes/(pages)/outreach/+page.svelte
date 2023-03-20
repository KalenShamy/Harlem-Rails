<svelte:head>
    <link rel="stylesheet" href="css/outreach.css">
</svelte:head>

<script lang="ts">
    import { onMount } from "svelte";

    const events = [
        {
            "title": "Pi Day Bake Sale",
            "date": "03-14-2023",
            "description": "As a celebration of Pi Day, we had a bake sale outside of Columbia Secondary School to help raise money for Harlem Rails! We sold cookies, cupcakes, brownies, and more delicious treats!",
            "image": "PiDayBakeSale.webp",
        },
    ]
</script>

<section class="img_text">
    <h2>What is Outreach?</h2>
    <div>
        <img src="images/robot_action.webp" alt="">
        <p>
            Most FIRST robotics teams will participate in some form of outreach. It’s most often an act of spreading the message of STEM. As FIRST is founded upon the concept of having students critically think and apply STEM concepts. Outreach is a very broad term, as the term can be applied to an Instagram page just as easily as a robotics event. Even though there are multiple forms of outreach, Harlem Rails attempts to help the STEM community in any way possible.
        </p>
    </div>
</section>
<section>
    <h2>Events</h2>
    <div class="events">
        {#each events as event}
            <div class="event">
                <h3>{event.title}</h3>
                <p>{event.date.replaceAll("-", "/")}</p>
                <img src="images/events/{event.image}" alt=""/>
                <p>{event.description}</p>
            </div>
        {/each}
        <div class="event">
            <h3>More Coming Soon!</h3>
                <p>00/00/0000</p>
                <div></div>
                <p>We are always looking for new ways to help the STEM community grow. If you have any ideas, please contact us!</p>
        </div>
    </div>
</section>