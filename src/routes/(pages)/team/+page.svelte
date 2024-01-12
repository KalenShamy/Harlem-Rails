<svelte:head>
    <link rel="stylesheet" href="css/team.css">
</svelte:head>

<script lang="ts">
    const team = {
        students: [
            {
                name: "Redwan Ali",
                image: "images/team/Redwan_Ali.webp",
                group: "Electronics"
            },
            {
                name: "Farhan Arshad",
                image: "images/team/Farhan_Arshad.webp",
                group: "Coding"
            },
            {
                name: "Aahron Berazate",
                image: "images/team/Aahron_Berazate.webp",
                group: "CAD Design"
            },
            {
                name: "Gabriel Brazil",
                image: "images/team/Gabriel_Brazil.webp",
                group: "CAD Design"
            },
            {
                name: "Edmund Chamberlain",
                image: "images/team/Edmund_Chamberlain.webp",
                group: "CAD Design"
            },
            {
                name: "Saul Chambers",
                image: "images/team/Saul_Chambers.webp",
                group: "Electronics"
            },
            {
                name: "Kadmiel Clydemiclat",
                image: "images/team/Kadmiel_Clydemiclat.webp",
                group: "Electronics"
            },
            {
                name: "Piper Cohen",
                image: "images/team/Piper_Cohen.webp",
                group: "Electronics"
            },
            {
                name: "Grace Columbia",
                image: "images/team/Grace_Columbia.webp",
                group: "Coding"
            },
            {
                name: "Lila Dorsett",
                image: "images/team/Lila_Dorsett.webp",
                group: "Machining"
            },
            {
                name: "Evan Dyke",
                image: "images/team/Evan_Dyke.webp",
                group: "Electronics"
            },
            {
                name: "Brianna Eugenio",
                image: "images/team/Brianna_Eugenio.webp",
                group: "Electronics"
            },
            {
                name: "David Gelpi",
                image: "images/team/David_Gelpi.webp",
                group: "Coding"
            },
            {
                name: "Fernando Herrera",
                image: "images/team/Fernando_Herrera",
                group: "Machining"
            },
            {
                name: "Ezra Ju",
                image: "images/team/Ezra_Ju.webp",
                group: "Coding"
            },
            {
                name: "Thomas Manning",
                image: "images/team/Thomas_Manning.webp",
                group: "Machining"
            },
            {
                name: "Eva Marmolejos",
                image: "images/team/Eva_Marmolejos.webp",
                group: "Coding"
            },
            /*{ MIGHT JOIN IN DECEMBER???
                name: "Enzo Martinez",
                image: "images/team/Enzo_Martinez.webp",
                group: ""
            },*/
            {
                name: "Alexander Milenkovic",
                image: "images/team/Alexander_Milenkovic.webp",
                group: "CAD Design"
            },
            {
                name: "Elias Navarro",
                image: "images/team/Elias_Navarro.webp",
                group: "Machining"
            },
            {
                name: "Audrey Ng",
                image: "images/team/Audrey_Ng.webp",
                group: "Machining"
            },
            {
                name: "Seiji Onuma",
                image: "images/team/Seiji_Onuma.webp",
                group: "Machining Lead",
                red: true
            },
            {
                name: "Jackson Park",
                image: "images/team/Jackson_Park.webp",
                group: "Machining"
            },
            {
                name: "Bella Peoples",
                image: "images/team/Bella_Peoples.webp",
                group: "Coding"
            },
            {
                name: "Storm Peterson",
                image: "images/team/Storm_Peterson.webp",
                group: "Machining"
            },
            {
                name: "Thahera Rahman",
                image: "images/team/Thahera_Rahman.webp",
                group: "Machining"
            },
            {
                name: "Lisa Reinaudi-Monzier",
                image: "images/team/Lisa_Reinaudi-Monzier.webp",
                group: "Electronics"
            },
            {
                name: "Arianny Rodriguez",
                image: "images/team/Arianny_Rodriguez.webp",
                group: "Machining"
            },
            {
                name: "Lewis Rosario",
                image: "images/team/Lewis_Rosario.webp",
                group: "Coding"
            },
            {
                name: "Ezra Roseman",
                image: "images/team/Ezra_Roseman.webp",
                group: "Machining"
            },
            {
                name: "Sabiq Saif",
                image: "images/team/Sabiq_Saif.webp",
                group: "Coding"
            },
            {
                name: "Kalen Shamy",
                image: "images/team/Kalen_Shamy.webp",
                group: "Coding"
            },
            {
                name: "Theodore Sia",
                image: "images/team/Theodore_Sia.webp",
                group: "Coding"
            },
            {
                name: "Marcus Singer",
                image: "images/team/Marcus_Singer.webp",
                group: "Electronics"
            },
            {
                name: "Andrew Song",
                image: "images/team/Andrew_Song.webp",
                group: "Coding"
            },
            {
                name: "Dorian St Plice",
                image: "images/team/Dorian_St_Plice.webp",
                group: "Electronics"
            },
            {
                name: "Miles Thurnherr",
                image: "images/team/Miles_Thurnherr.webp",
                group: "CAD Lead",
                red: true
            },
            {
                name: "Aurelia Wiggins",
                image: "images/team/Aurelia_Wiggins.webp",
                group: "CAD Design"
            },
            {
                name: "David Yanowitch",
                image: "images/team/David_Yanowitch.webp",
                group: "CAD Design"
            },
            {
                name: "Xuyin Zhong",
                image: "images/team/Xuyin_Zhong.webp",
                group: "Machining"
            },
        ],
        mentors: [
            {
                name: "Haden Leary",
                image: "images/team/Haden_Leary.webp",
                title: "Machining"
            },
            {
                name: "Joel Rodriguez",
                image: "images/team/Joel_Rodriguez.webp",
                title: "Team Coach",
                red: true
            },
            {
                name: "Oscar Samano",
                image: "images/team/Oscar_Samano.webp",
                title: "CAD Design"
            },
            {
                name: "Bob Stark",
                image: "images/team/Bob_Stark.webp",
                title: "Electronics Lead",
                red: true
            },
            {
                name: "Bao To",
                image: "images/team/Bao_To.webp",
                title: "Coding"
            },
            {
                name: "Emily Yin",
                image: "images/team/Emily_Yin.webp",
                title: "Coding Lead",
                red: true
            }
        ],
        alumni: [
            {
                name: "Emelia Boyer",
                image: "images/team/Emelia_Boyer.webp",
                group: "Machining"
            },
            {
                name: "Tristan Letourneau",
                image: "images/team/Tristan_Letourneau.webp",
                group: "Team Leader",
                red: true
            },
            {
                name: "Jade Sanchez",
                image: "images/team/Jade_Sanchez.webp",
                group: "Machining"
            },
            {
                name: "Lenin Saquipay",
                image: "images/team/Lenin_Saquipay.webp",
                group: "Electronics"
            },
            {
                name: "Eliah Tapia",
                image: "images/team/Eliah_Tapia.webp",
                group: "Coding"
            },
        ]
    }
</script>

<section>
    <h2><span>&gt;</span> Meet the Crew</h2>
    <div class="grid team">
        {#each team.students as student}
            <div>
                <div class="gradient"></div>
                <img src={student.image} alt="">
                <h3>{student.name}</h3>
                {#if student.red}
                    <img class="corner" src="images/red_corner.png" alt="">
                {:else}
                <img class="corner" src="images/corner.png" alt="">
                {/if}
                <h4>{student.group}</h4>
            </div>
        {/each}
    </div>
</section>
<section>
    <h2><span>&gt;</span> Meet our Mentors</h2>
    <div class="grid team">
        {#each team.mentors as mentor}
            <div>
                <div class="gradient"></div>
                <img src={mentor.image} alt="">
                <h3>{mentor.name}</h3>
                {#if mentor.red}
                    <img class="corner" src="images/red_corner.png" alt="">
                {:else}
                <img class="corner" src="images/corner.png" alt="">
                {/if}
                <h4>{mentor.title}</h4>
            </div>
        {/each}
    </div>
</section>
<section>
    <h2><span>&gt;</span> Meet our Alumni</h2>
    <div class="grid team">
        {#each team.alumni as student}
            <div>
                <div class="gradient"></div>
                <img src={student.image} alt="">
                <h3>{student.name}</h3>
                {#if student.red}
                    <img class="corner" src="images/red_corner.png" alt="">
                {:else}
                <img class="corner" src="images/corner.png" alt="">
                {/if}
                <h4>{student.group}</h4>
            </div>
        {/each}
    </div>
</section>