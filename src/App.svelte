<script>
  import {onMount} from 'svelte';
  import page from 'page';

  import Home from "./routes/HomeRoute.svelte";
  import Info from "./routes/InfoRoute.svelte";
  import Contacts from "./routes/ContactsRoute.svelte";
  import NotFound from "./routes/NotFoundRoute.svelte";  
  import Works from './routes/WorksRoute.svelte';
  import Layout from './Layout.svelte';
  let currentComponent;

  onMount(() => {
  page('/', () => (currentComponent = Home));
  page('/info', () => currentComponent = Info);
  page('/works', () => currentComponent = Works);
  page('/contact', () => currentComponent = Contacts);
  page('*', () => (currentComponent = NotFound));
  page.start();
  });
</script>

<Layout {currentComponent} />