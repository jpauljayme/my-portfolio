<script lang="ts">
  import blender from './assets/book.webp';
</script>

<div class="wrapper">
  <div class="menu">
    <span class="menu__text">Menu</span>
  </div>
  <header class="header">
    <h1 class="header__title col">
      <span>The pages of</span>
      <br>
      <span>John Paul Jayme</span>
    </h1>
    <ul class="header__links">
      <li>Web</li>
      <li>Design</li>
      <li>Development</li>
      <li>Literature</li>
      <li>Reviews</li>
      <li>Organic</li>
      <li>Volunteering</li>
      <li>Cats and Dogs</li>
    </ul>
    <div class="header__hero">
      <img class="hero__book" alt="My artwork" src={blender} />
    </div>
  </header>
  <section class="about">
    <h2>About</h2>
    <h3>
      Creating intentional web experience for myself and the unlikely, curious
      world
    </h3>
  </section>
  <section class="projects">
    <h2>CEBOOKLUB</h2>
    <h2>THE FIG TREE</h2>
    <h2>JAZEL'S CATTITUDES</h2>
  </section>
  <section class="stack">
    <h2>Tech Stack</h2>
    <ul>
      <li>Java</li>
      <li>Python</li>
      <li>PHP</li>
      <li>Javascript</li>
      <li>CSS</li>
      <li>React</li>
      <li>Angular</li>
      <li>Svelte</li>
      <li>HTML</li>
      <li>HTMX</li>
      <li>Mysql</li>
      <li>Postgres</li>
    </ul>
  </section>
  <section class="contacts">
    <ul class="contacts__ul">
      <li class="contacts__ul-li">
        <span>Linkedin</span>
      </li>
      <li class="contacts__ul-li">
        <span>Email</span>
      </li>
      <li class="contacts__ul-li">
        <span>Telegram</span>
      </li>
    </ul>
  </section>
</div>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    gap: var(--space-m);
  }

  .header {
    display: grid;
    /* grid-template-rows: min-content auto; */
    min-height: 100vh;
    gap: var(--space-m);
    position: relative;
    align-content: start;
    overflow: hidden;
    padding: var(--space-s);
  }

  .menu {
    position: fixed;
    top: var(--space-s);
    right: var(--space-s);
    cursor: pointer;
    z-index: 10;
    /* padding: var(--space-s); */
  }

  .menu__text {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
  }

  .header__hero{
    padding: var(--space-m);
    cursor: grab;
    position: relative;
    aspect-ratio: 1/1;
    transform-style: preserve-3d;
    perspective: 2000px;
  }

  .hero__book{
    animation: rotate 15s linear infinite;
    -moz-animation: rotate 15s linear infinite;
    transform-style: preserve-3d;
    display: block;
    position: absolute; 

    width: 80%;
  }

  @keyframes rotate {
    from {
        transform: rotateY(0deg);
    }
    to {
        transform: rotateY(360deg);
    }
  }

  .about{
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 2.16fr);
      gap: var(--space-m);
    }

  .projects{
    display: grid;
    grid-template-columns: 
      repeat(auto-fill, minmax(min(400px, 100%), 1fr));
    gap: var(--space-m);
  }

  .stack{
    display: grid;
    grid-template-columns: 
      repeat(auto-fill, minmax(150px, 1fr));
    gap: var(--space-m);
  }

  .contacts{
    display: grid;
    min-height: 100vh;
    align-items: center;
    padding: 0 var(--space-s);
  }

  .contacts__ul{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .contacts__ul-li{
    display: flex;
    align-items: center;
    gap: var(--space-l);
  }


  /* Tablets */
@media (min-width: 550px) {
}

/* Laptop */
@media (min-width: 760px) {
    .header{
        grid-template-columns: minmax(0, 2.06fr) minmax(0, 1fr);
    }

    .header__hero{
        top: 50%;
        left: 50%;
        width: 100vh;
        height: 100vh;
        margin: -40vh;
    }
}

/* Desktop */
@media (min-width: 1500px) {
    
}
</style>
