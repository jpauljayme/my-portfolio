<script>
    import Project from "../lib/Project.svelte";
</script>

<h1 class="header__title">
    <span>John Paul Jayme</span>
    <br />
    <span>Works</span>
</h1>
<hr>
<section class="projects">
    <h2 class="projects__title">All Projects</h2>
    <ul class="projects__ul">
        <li class="projects__ul--li">
            <a href="#" target="_blank" rel="noopener noreferrer">CEBOOKLUB</a>
            <span>2024</span>
        </li>
        <li class="projects__ul--li" >
            <a
                href="https://the-fig-tree-pk23q.ondigitalocean.app/"
                target="_blank"
                rel="noopener noreferrer">THE FIG TREE</a
            >
            <span>2024</span>
        </li>
        <li class="projects__ul--li">
            <a href="#"> MY CATTITUDES </a>
            <span>2024</span>
        </li>
    </ul>
</section>

<style>
    .header__title {
        margin-bottom: 5em;
    }

    .projects__title{
        margin-bottom: var(--space-l);
    }

    .projects{
        display: grid;
    }

    .projects__ul--li{
        display: flex;
        justify-content: space-between;
       
    }

        /* Laptop */
        @media (min-width: 760px) {
        .projects {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>
