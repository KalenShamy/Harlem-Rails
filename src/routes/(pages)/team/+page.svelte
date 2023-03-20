<svelte:head>
    <link rel="stylesheet" href="css/team.css">
</svelte:head>

<script lang="ts">
    const team = {
        students: [
            {
                name: "Farhan Arshad",
                image: "images/team/Farhan_Arshad.webp"
            },
            {
                name: "Emelia Boyer",
                image: "images/team/Emelia_Boyer.webp"
            },
            {
                name: "Gabriel Brazil",
                image: "images/team/Gabriel_Brazil.webp"
            },
            {
                name: "Saul Chambers",
                image: "images/team/Saul_Chambers.webp"
            },
            {
                name: "Piper Cohen",
                image: "images/team/Piper_Cohen.webp"
            },
            {
                name: "Lila Dorsett",
                image: "images/team/Lila_Dorsett.webp"
            },
            {
                name: "Evan Dyke",
                image: "images/team/Evan_Dyke.webp"
            },
            {
                name: "Brianna Eugenio",
                image: "images/team/Brianna_Eugenio.webp"
            },
            {
                name: "Jonah Fields",
                image: "images/team/Jonah_Fields.webp"
            },
            {
                name: "Sam Figuera",
                image: "images/team/Sam_Figuera.webp"
            },
            {
                name: "Roxana Harris",
                image: "images/team/Roxana_Harris.webp"
            },
            {
                name: "Jesus Hernandez",
                image: "images/team/Jesus_Hernandez.webp"
            },
            {
                name: "Jose Hernandez",
                image: "images/team/Jose_Hernandez.webp"
            },
            {
                name: "Ezra Ju",
                image: "images/team/Ezra_Ju.webp"
            },
            {
                name: "Tristan Letourneau",
                image: "images/team/Tristan_Letourneau.webp"
            },
            {
                name: "Enzo Martinez",
                image: "images/team/Enzo_Martinez.webp"
            },
            {
                name: "Guadalupe Mejia",
                image: "images/team/Guadalupe_Mejia.webp"
            },
            {
                name: "Julius Morgan",
                image: "images/team/Julius_Morgan.webp"
            },
            {
                name: "Anthony Oh",
                image: "images/team/Anthony_Oh.webp"
            },
            {
                name: "Seiji Onuma",
                image: "images/team/Seiji_Onuma.webp"
            },
            {
                name: "Jackson Park",
                image: "images/team/Jackson_Park.webp"
            },
            {
                name: "Storm Peterson",
                image: "images/team/Storm_Peterson.webp"
            },
            {
                name: "Thahera Rahman",
                image: "images/team/Thahera_Rahman.webp"
            },
            {
                name: "Lisa Reinaudi-Monzier",
                image: "images/team/Lisa_Reinaudi-Monzier.webp"
            },
            {
                name: "Ezra Roseman",
                image: "images/team/Ezra_Roseman.webp"
            },
            {
                name: "Jade Sanchez",
                image: "images/team/Jade_Sanchez.webp"
            },
            {
                name: "Kalen Shamy",
                image: "images/team/Kalen_Shamy.webp"
            },
            {
                name: "Theodore Sia",
                image: "images/team/Theodore_Sia.webp"
            },
            {
                name: "Marcus Singer",
                image: "images/team/Marcus_Singer.webp"
            },
            {
                name: "Andrew Song",
                image: "images/team/Andrew_Song.webp"
            },
            {
                name: "Dorian St Plice",
                image: "images/team/Dorian_St_Plice.webp"
            },
            {
                name: "Miles Thurnherr",
                image: "images/team/Miles_Thurnherr.webp"
            },
            {
                name: "Aurelia Wiggins",
                image: "images/team/Aurelia_Wiggins.webp"
            },
            {
                name: "David Yanowitch",
                image: "images/team/David_Yanowitch.webp"
            },
            {
                name: "Xuyin Zhong",
                image: "images/team/Xuyin_Zhong.webp"
            },
        ],
        mentors: [
            {
                name: "Reuben Bridges",
                image: "images/team/Reuben_Bridges.webp"
            },
            {
                name: "Graeme Ferguson",
                image: "images/team/Graeme_Ferguson.webp"
            },
            {
                name: "Mohith Manohar",
                image: "images/team/Mohith_Manohar.webp"
            },
            {
                name: "Olivia O'Driscoll",
                image: "images/team/Olivia_O'Driscoll.webp"
            },
            {
                name: "Joel Roderiguez",
                image: "images/team/Joel_Roderiguez.webp"
            },
            {
                name: "Bob Stark",
                image: "images/team/Bob_Stark.webp"
            },
            {
                name: "Emily Yin",
                image: "images/team/Emily_Yin.webp"
            },
            {
                name: "Yuheng Zhang",
                image: "images/team/Yuheng_Zhang.webp"
            }
        ]
    }
</script>

<section>
    <h2>Meet the Students</h2>
    <div class="grid team">
        {#each team.students as student}
            <div>
                <img src={student.image} alt="">
                <h3>{student.name}</h3>
            </div>
        {/each}
    </div>
</section>
<section>
    <h2>Meet the Mentors</h2>
    <div class="grid team">
        {#each team.mentors as student}
            <div>
                <img src={student.image} alt="">
                <h3>{student.name}</h3>
            </div>
        {/each}
    </div>
</section>