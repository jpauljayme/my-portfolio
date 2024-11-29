<script>
  import Layout from "./Layout.svelte";
  import { setupRoutes } from "./routes.svelte.js";
  import Home from './routes/HomeRoute.svelte'
  
  let currentComponent = $state(Home);

  setupRoutes((component) => (currentComponent = component));
</script>

<Layout {currentComponent} />
