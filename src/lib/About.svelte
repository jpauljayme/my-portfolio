<script>

</script>


<section class="about">
    <h2>About</h2>
    <h3>
        Creating intentional web experience for myself and the unlikely, curious
        world
    </h3>
</section>

<style>
    .about {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 2.16fr);
        gap: var(--space-m);
        /* padding: var(--space-m); */
        margin-bottom: 5rem;
    }

    /* Laptop */
    @media (min-width: 760px) {
        .about{
            grid-template-columns: repeat(3,minmax(0, 1fr));
        }
    }
</style>
