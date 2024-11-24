<script>
    let toggle = $state(false);

    function toggleNav() {
        toggle = !toggle;
    }

    function closeNav() {
        toggle = false;
    }
</script>

<button class="menu" onclick={toggleNav} aria-expanded={toggle}>
    <span class="menu__text {toggle ? 'toggle-nav' : ''}">Menu</span>
</button>
<nav class="overlay {toggle ? 'toggle' : ''}">
    <div>
        <a href="/jprjayme-works" class="writing-m" onclick={closeNav}>
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
                    href="/jprjayme-works/works"
                    onclick={closeNav}>Works</a
                >
            </li>
            <li>
                <a
                    class="writing-m"
                    href="/jprjayme-works/info"
                    onclick={closeNav}
                >
                    Info
                </a>
            </li>
            <li>
                <a
                    class="writing-m"
                    href="/jprjayme-works/contact"
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

    .overlay__copy {
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
        color: black;
    }

    .toggle {
        visibility: visible;
    }

    .toggle-nav {
        color: white;
    }
</style>
