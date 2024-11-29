<section class="stack">
    <h2>Stack</h2>
    <ul class="stack__ul">
        <li><span>Java</span></li>
        <li><span>Python</span></li>
        <li><span>PHP</span></li>
        <li><span>script</span></li>
        <li><span>CSS</span></li>
        <li><span>React</span></li>
        <li><span>Angular</span></li>
        <li><span>Svelte</span></li>
        <li><span>HTML</span></li>
        <li><span>HTMX</span></li>
        <li><span>Mysql</span></li>
        <li><span>Postgresql</span></li>
    </ul>
</section>

<style>
    .stack {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 2.16fr);
        gap: var(--space-m);
        /* padding: var(--space-m); */
        margin-bottom: 5rem;
    }

        /* Laptop */
        @media (min-width: 760px) {
        .stack {
            grid-template-columns: 1fr;
            margin-bottom: unset;
        }
    }
</style>
