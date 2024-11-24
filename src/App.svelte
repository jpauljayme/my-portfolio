<script>
  import Layout from "./Layout.svelte";
  import { setupRoutes } from "./routes.svelte.js";
  import Home from './routes/HomeRoute.svelte'

  // Define reactive state for the current component
  let currentComponent = $state(Home);

  // Set up routes and pass a function to update the state
  setupRoutes((component) => (currentComponent = component));
</script>

<!-- Pass the reactive currentComponent state to the Layout -->
<Layout {currentComponent} />
