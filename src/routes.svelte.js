import page from "page";

import Home from "./routes/HomeRoute.svelte";
import Info from "./routes/InfoRoute.svelte";
import Contacts from "./routes/ContactsRoute.svelte";
import NotFound from "./routes/NotFoundRoute.svelte";
import Works from "./routes/WorksRoute.svelte";

// Routing setup
export function setupRoutes(setComponent) {

    page("/", () => setComponent(Home));
    page("/info", () => setComponent(Info));
    page("/works", () => setComponent(Works));
    page("/contact", () => setComponent(Contacts));
    page("*", () => setComponent(NotFound));

    page.start();
}