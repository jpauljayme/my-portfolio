<script>
    import About from "../lib/About.svelte";
    import Contacts from "../lib/Contacts.svelte";
    import Header from "../lib/Header/Header.svelte";
    import Project from "../lib/Project.svelte";
    import Stack from "../lib/Stack.svelte";
</script>

<div class="wrapper">
  <Header />
  <About />
  <div class="sections">
    <Project />
    <section class="fields">
      <h2>Field</h2>
      <ul>
        <li><span>Backend</span></li>
      <li><span>Frontend</span></li>
      <li><span>Creative Writing</span></li>
      <li><span>Collaboration</span></li>
      </ul>
    </section>
    <Stack />
  </div>
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

  .sections{
    display: grid;
    grid-template-columns: 1fr;
  }

  .fields{
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 2.16fr);
        gap: var(--space-m);
        margin-bottom: 5rem;
  }

  /* Tablets */
@media (min-width: 550px) {
  
}

/* Laptop */
@media (min-width: 760px) {
  .sections{
    grid-template-columns: repeat(3, 1fr);
  }

  .fields{
    grid-template-columns: 1fr;
    margin-bottom: unset;
    grid-template-rows: min-content;
  }

}

/* Desktop */
@media (min-width: 1500px) {
    
}
</style>
