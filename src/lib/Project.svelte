<section class="projects">
    <h2 class="projects__title">Projects</h2>
    <ul class="projects__ul">
        <li>
            <a href="#" target="_blank" rel="noopener noreferrer"
                >CEBOOKLUB</a
            >
        </li>
        <li>
            <a href="https://the-fig-tree-pk23q.ondigitalocean.app/" target="_blank" rel="noopener noreferrer">THE FIG TREE</a>
        </li>
        <li>
            <a href="#"> MY CATTITUDES </a>
        </li>
    </ul>
</section>

<style>
    .projects {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 2.16fr);
        /* repeat(auto-fill, minmax(min(400px, 100%), 1fr)); */
        gap: var(--space-m);
        margin-bottom: 5rem;
    }

    /* Laptop */
    @media (min-width: 760px) {
        .projects {
            grid-template-columns: 1fr;
            margin-bottom: unset;
            grid-template-rows: min-content;
        }
    }
</style>
