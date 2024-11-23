<script>
    export let currentComponent;

    import Nav from "./lib/Nav/Nav.svelte";
</script>

<div class="wrapper">
    <Nav />
    <main>
        <svelte:component this={currentComponent} />
    </main>
</div>

<style>
    .wrapper {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, auto);
        display: contents;
    }

    /* Tablets */
    @media (min-width: 550px) {
    }

    /* Laptop */
    @media (min-width: 760px) {
    }

    /* Desktop */
    @media (min-width: 1500px) {
    }
</style>
