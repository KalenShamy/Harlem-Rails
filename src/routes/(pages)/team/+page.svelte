<svelte:head>
    <link rel="stylesheet" href="css/team.css">
</svelte:head>

<script lang="ts">
    const team = {
        students: [
            {
                name: "Farhan Arshad",
                image: "images/team/Farhan_Arshad.png"
            },
            {
                name: "Emelia Boyer",
                image: "images/team/Emelia_Boyer.png"
            },
            {
                name: "Gabriel Brazil",
                image: "images/team/Gabriel_Brazil.png"
            },
            {
                name: "Saul Chambers",
                image: "images/team/Saul_Chambers.png"
            },
            {
                name: "Piper Cohen",
                image: "images/team/Piper_Cohen.png"
            },
            {
                name: "Lila Dorsett",
                image: "images/team/Lila_Dorsett.png"
            },
            {
                name: "Evan Dyke",
                image: "images/team/Evan_Dyke.png"
            },
            {
                name: "Brianna Eugenio",
                image: "images/team/Brianna_Eugenio.png"
            },
            {
                name: "Jonah Fields",
                image: "images/team/Jonah_Fields.png"
            },
            {
                name: "Sam Figuera",
                image: "images/team/Sam_Figuera.png"
            },
            {
                name: "Roxana Harris",
                image: "images/team/Roxana_Harris.png"
            },
            {
                name: "Jesus Hernandez",
                image: "images/team/Jesus_Hernandez.png"
            },
            {
                name: "Jose Hernandez",
                image: "images/team/Jose_Hernandez.png"
            },
            {
                name: "Ezra Ju",
                image: "images/team/Ezra_Ju.png"
            },
            {
                name: "Tristan Letourneau",
                image: "images/team/Tristan_Letourneau.png"
            },
            {
                name: "Enzo Martinez",
                image: "images/team/Enzo_Martinez.png"
            },
            {
                name: "Guadalupe Mejia",
                image: "images/team/Guadalupe_Mejia.png"
            },
            {
                name: "Julius Morgan",
                image: "images/team/Julius_Morgan.png"
            },
            {
                name: "Anthony Oh",
                image: "images/team/Anthony_Oh.png"
            },
            {
                name: "Seiji Onuma",
                image: "images/team/Seiji_Onuma.png"
            },
            {
                name: "Jackson Park",
                image: "images/team/Jackson_Park.png"
            },
            {
                name: "Storm Peterson",
                image: "images/team/Storm_Peterson.png"
            },
            {
                name: "Thahera Rahman",
                image: "images/team/Thahera_Rahman.png"
            },
            {
                name: "Lisa Reinaudi-Monzier",
                image: "images/team/Lisa_Reinaudi-Monzier.png"
            },
            {
                name: "Ezra Roseman",
                image: "images/team/Ezra_Roseman.png"
            },
            {
                name: "Jade Sanchez",
                image: "images/team/Jade_Sanchez.png"
            },
            {
                name: "Kalen Shamy",
                image: "images/team/Kalen_Shamy.png"
            },
            {
                name: "Theodore Sia",
                image: "images/team/Theodore_Sia.png"
            },
            {
                name: "Marcus Singer",
                image: "images/team/Marcus_Singer.png"
            },
            {
                name: "Andrew Song",
                image: "images/team/Andrew_Song.png"
            },
            {
                name: "Dorian St Plice",
                image: "images/team/Dorian_St_Plice.png"
            },
            {
                name: "Miles Thurnherr",
                image: "images/team/Miles_Thurnherr.png"
            },
            {
                name: "Aurelia Wiggins",
                image: "images/team/Aurelia_Wiggins.png"
            },
            {
                name: "David Yanowitch",
                image: "images/team/David_Yanowitch.png"
            },
            {
                name: "Xuyin Zhong",
                image: "images/team/Xuyin_Zhong.png"
            },
        ],
        mentors: [
            {
                name: "Reuben Bridges",
                image: "images/team/Reuben_Bridges.png"
            },
            {
                name: "Graeme Ferguson",
                image: "images/team/Graeme_Ferguson.png"
            },
            {
                name: "Mohith Manohar",
                image: "images/team/Mohith_Manohar.png"
            },
            {
                name: "Olivia O'Driscoll",
                image: "images/team/Olivia_O'Driscoll.png"
            },
            {
                name: "Joel Roderiguez",
                image: "images/team/Joel_Roderiguez.png"
            },
            {
                name: "Bob Stark",
                image: "images/team/Bob_Stark.png"
            },
            {
                name: "Emily Yin",
                image: "images/team/Emily_Yin.png"
            },
            {
                name: "Yuheng Zhang",
                image: "images/team/Yuheng_Zhang.png"
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