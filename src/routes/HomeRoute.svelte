<script lang="ts">
    import About from "../lib/About.svelte";
    import Contacts from "../lib/Contacts.svelte";
    import Header from "../lib/Header/Header.svelte";
    import Project from "../lib/Project.svelte";
    import Stack from "../lib/Stack.svelte";
</script>

<div class="wrapper">
  <Header />
  <About />
  <Project />
  <Stack />
  <Contacts />
</div>

<style>
  .wrapper {
    /* display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    gap: var(--space-m); */
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
