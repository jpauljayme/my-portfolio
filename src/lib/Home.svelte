<script lang="ts">
    import book from "../assets/Group_Book.png";
</script>

<div class="container">
    <header class="header">
        <h1 class="header__title">
            <span>The Pages of</span>
            <span>John Paul</span>
            <span>Regner</span>
        </h1>
        <nav>Menu</nav>
    </header>
    <div class="main">
        <img alt="My simple book artwork" src={book} />
    </div>
    <footer>More</footer>
</div>

<style>
    .container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-template-areas:
            "header header header"
            "main main main"
            "footer footer footer";
    }

    .header {
        grid-area: header;
        display: flex;
        justify-content: space-between;
    }

    .header__title{
        display: flex;
        flex-direction: column;
    }



    .main {
        grid-area: main;
    }
</style>
