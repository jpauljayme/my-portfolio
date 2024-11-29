<script>
    let toggle = $state(false);

    function toggleNav() {
        toggle = !toggle;
    }

    function closeNav() {
        toggle = false;
    }
</script>


<div
    class="menu"
    role="button"
    onclick={toggleNav}
    aria-expanded={toggle}
    tabindex="0"
>
    <span class="menu__text {toggle ? 'toggle-nav' : ''}">Menu</span>
</div>
<nav class="overlay {toggle ? 'toggle' : ''}">
    <div>
        <a href="/" class="writing-m" onclick={closeNav}>
            <span>The pages of John</span>
            <br />
            <span>Paul Jayme</span>
        </a>
    </div>
    <div>
        <ul class="overlay__sections">
            <li>
                <a
                    class="writing-m"
                    href="/works"
                    onclick={closeNav}>Works</a
                >
            </li>
            <li>
                <a
                    class="writing-m"
                    href="/info"
                    onclick={closeNav}
                >
                    Info
                </a>
            </li>
            <li>
                <a
                    class="writing-m"
                    href="/contact"
                    onclick={closeNav}
                >
                    Contacts
                </a>
            </li>
        </ul>
    </div>
    <div class="overlay__copy writing-m">© 2024</div>
</nav>

<style>
    .writing-m {
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        text-align: right;
        color: white;
    }

    .overlay {
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

    .overlay__sections {
        display: flex;
        justify-content: center;
    }

    .overlay__sections li {
        min-width: 1em;
    }

    .overlay__copy {
        position: fixed;
        bottom: var(--space-s);
        right: var(--space-s);
    }

    .menu {
        position: fixed;
        right: var(--space-s);
        z-index: 10;
        top: var(--space-s);
        cursor: pointer;
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        text-align: right;
    }

    .menu__text {
        display: inline-block;
        color: black;
        visibility: visible;
    }

    .toggle {
        visibility: visible;
    }

    .toggle-nav {
        color: white;
    }

    /* Laptop */
    @media (min-width: 760px) {
    }
</style>
