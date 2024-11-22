<script lang="ts">
    import book from "../../assets/images/book.webp";
</script>

<header class="header">
    <h1 class="header__title col">
        <span>The pages of</span>
        <br />
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
        <img class="hero__book" alt="My artwork" src={book} />
    </div>
</header>

<style>
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

    .header__hero {
        padding: var(--space-m);
        cursor: grab;
        position: relative;
        aspect-ratio: 1/1;
        transform-style: preserve-3d;
        perspective: 2000px;
        top: 20%;
        left: -5%;

    }

    .hero__book {
        animation: rotate 15s linear infinite;
        -moz-animation: rotate 15s linear infinite;
        transform-style: preserve-3d;
        display: block;
        position: absolute;
        width: 100%;
    }

    @keyframes rotate {
        from {
            transform: rotateY(0deg);
        }
        to {
            transform: rotateY(360deg);
        }
    }

    /* Laptop */
    @media (min-width: 760px) {
        .header {
            grid-template-columns: minmax(0, 2.06fr) minmax(0, 1fr);
        }

        .header__hero {
            top: 50%;
            left: 50%;
            width: 100vh;
            height: 100vh;
            margin: -40vh;
        }
    }
</style>
