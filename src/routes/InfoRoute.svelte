<script>
    import Stack from "../lib/Stack.svelte";
    import Contacts from '../lib/Contacts.svelte';
</script>

<header>
    <h1 class="header__title">
        <span>The pages of</span>
        <br />
        <span>John Paul Jayme</span>
    </h1>
    <div class="header__description">
        <p>FullStack, Data Engineering</p>
        <p>
            It took a while for me to get here. But so is the solar system,
            or the seeds I planted to grow into arrays of green spectacles.
        </p>
    </div>
</header>

<Stack />

<section class="info__experience">
    <h2>Experience</h2>
    <div class="experience__list">
        <h3>2023</h3>
        <p>
            <span>TDCX </span>
            <span>Data Engineer</span>
        </p>
        <h3>2021 - 22</h3>
        <p>
            <span>IBM</span>
            <span>Software Engineer</span>
        </p>
        <h3>2020 - 21</h3>
        <p>
            <span>IdeaRobin</span>
            <span>Software Engineer</span>
        </p>
        <h3>2019 - 20</h3>
        <p>
            <span>Accenture</span>
            <span>Software Engineer</span>
        </p>
    </div>
</section>
<Contacts />
<style>
    .info__experience {
        min-height: 100vh;
    }

    .header__title{
        margin-bottom: 5rem;
    }

    .experience__list {
        display: grid;
        gap: var(--space-m);
        grid-template-columns: minmax(0, 1fr) minmax(0, 2.16fr);
        align-items: center;
    }
</style>
