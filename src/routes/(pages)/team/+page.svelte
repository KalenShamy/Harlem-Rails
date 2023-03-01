<svelte:head>
    <link rel="stylesheet" href="team.css">
</svelte:head>

<script lang="ts">
    const team = {
        students: [
            {
                name: "Thahera Rahman",
                image: "images/team/first_last.png"
            },
            {
                name: "Emelia Boyer",
                image: "images/team/first_last.png"
            },
            {
                name: "Ezra Ju",
                image: "images/team/first_last.png"
            },
            {
                name: "Tristan Letourneau",
                image: "images/team/first_last.png"
            },
            {
                name: "Guadalupe Mejia",
                image: "images/team/first_last.png"
            },
            {
                name: "Seiji Onuma",
                image: "images/team/first_last.png"
            },
            {
                name: "Miles Thurnherr",
                image: "images/team/first_last.png"
            },
            {
                name: "Enzo Martinez-Knoblo",
                image: "images/team/first_last.png"
            },
            {
                name: "Gabriel Brazil",
                image: "images/team/first_last.png"
            },
            {
                name: "Lisa Reinaudi-Monzier",
                image: "images/team/first_last.png"
            },
            {
                name: "Saul Chambers",
                image: "images/team/first_last.png"
            },
            {
                name: "Kalen Shamy",
                image: "images/team/first_last.png"
            }
        ],
        mentors: [
            {
                name: "Joel Roderiguez",
                image: "images/team/joel_roderiguez.png"
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