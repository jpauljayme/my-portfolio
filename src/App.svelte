<script lang="ts">
    import Header from "./lib/Header/Header.svelte";

    let toggle : boolean = $state(false);
</script>

<div class="wrapper">
  <button class="menu" onclick={() => toggle = !toggle}
    aria-expanded={toggle}
    >
    <span class="menu__text {toggle? 'toggle-nav' : ''}">Menu</span>
  </button>
  <nav class="overlay {toggle? 'toggle' : ''}">
    <div>
      <a href="/" class="writing-m">
        <span>The pages of John</span>
        <br>
        <span>Paul Jayme</span>
      </a>
    </div>
    <div>
      <ul class="overlay__sections">
        <li>
          <a class="writing-m" href="/">Works</a>
        </li>
        <li>
          <a class="writing-m" href="/">
            Info
          </a>
        </li>
        <li>
          <a class="writing-m" href="/">
            Contacts
          </a>
        </li>
      </ul>
    </div>
    <div class="overlay__copy writing-m">
      © 2024
    </div>
  </nav>

  <Header />
  <section class="about">
    <h2>About</h2>
    <h3>
      Creating intentional web experience for myself and the unlikely, curious
      world
    </h3>
  </section>
  <section class="projects">
    <h2 class="projects__title">
      Projects
    </h2>
    <ul class="projects__ul">
      <li>
        <a href="http://157.245.144.28/cebooklub-rewind" target="_blank">CEBOOKLUB</a>
      </li>
      <li>
        <a href="#">THE FIG TREE</a>
      </li>
      <li>
        <a href="#">
          MY CATTITUDES
        </a>
      </li>
    </ul>
  </section>
  <section class="stack">
    <h2>Tech Stack</h2>
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
  <section class="contacts">
    <ul class="contacts__ul">
      <li class="contacts__ul-li">
        <a href="https://www.linkedin.com/in/dev-jprjayme"
          target="_blank"
        >Linkedin</a>
      </li>
      <li class="contacts__ul-li">
        <a href="mailto:jp.r.jayme@gmail.com">Email</a>
      </li>
      <li class="contacts__ul-li">
        <a href="https://t.me/srzlyjp">Telegram</a>
      </li>
    </ul>
  </section>
</div>

<style>
  .wrapper {
    /* display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    gap: var(--space-m); */
    display: contents;
  }

  .writing-m{
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    text-align: right;
    color: white;
  }

  .overlay{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    visibility: hidden;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    z-index: 5;
    color: white;
    transition: pacity 0.3s ease;
    padding: var(--space-s);
  }

  .overlay__sections{
    display: flex;
    justify-content: center;
  }

  .overlay__copy{
    position: fixed;
    bottom: var(--space-s);
    right: var(--space-s);
  }

  .menu {
    all: unset;
    font: inherit;
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
    color:black;
  }

  .toggle{
    visibility: visible;
  }

  .toggle-nav{
    color: white;
  }

  .about{
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 2.16fr);
      gap: var(--space-m);
      padding: var(--space-m);
    }

  .projects{
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 2.16fr);
      /* repeat(auto-fill, minmax(min(400px, 100%), 1fr)); */
    gap: var(--space-m);
    padding: var(--space-m);
  }

  .projects__ul{
  }

  .stack{
    display: grid;
    grid-template-columns: 
      repeat(auto-fill, minmax(150px, 1fr));
    gap: var(--space-m);
    padding: var(--space-m);
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
    gap: var(--space-l);
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
}

/* Desktop */
@media (min-width: 1500px) {
    
}
</style>
