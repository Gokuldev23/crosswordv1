<script>
    import Logo from '../assets/logo.png'
    let t_our_products = "Our Products"
    let t_gramlok = "Gramlok"
    let t_viyavart = "Vidyavart"
    let t_how_to_play = "How to Play?"

    let menuOpen  = false

    const toggleMenu = () => {
        menuOpen = !menuOpen
    }

</script>



<nav class="container">
    <a href="/">
        <img class="logo"  src="/logo.png" alt="">
    </a>
    <!-- <div class="menu-mobile">
        <button on:click={toggleMenu}>
            <img src="/menu-fill@1x.webp" alt="">
        </button>
        {#if menuOpen}
            <ul class="product-list">
                <li><a href="#">How to play?</a></li>
                <li> <a target="blank" href="https://www.gramlok.in">Gramlok</a></li>
                <li><a href="blank"> Vidyavart </a></li>
            </ul>
        {/if}
    </div> -->

    <div class="menu-desktop">
        <a class="help" href="/how-to-play">{t_how_to_play}</a>
        <div class="our-proucts">
            <button on:click={toggleMenu}>
                {t_our_products}
                <img style="rotate: 90deg;" src="/downArrow.webp" alt="">
            </button>
            {#if menuOpen}
                <ul class="product-list">
                    <li> <a target="blank" href="https://www.gramlok.in">{t_gramlok}</a></li>
                    <li><a target="_blank" href="https://www.vidyavart.in" > {t_viyavart} </a></li>
                </ul>
            {/if}
        </div>
    </div>
</nav>


<style>
    a{
        text-decoration: none;
        color: inherit;
    }
    button{
        background-color: transparent;
        outline: none;
        border: none;
    }
    .container{
        display: flex;
        padding: 20px 10px;
        align-items: center;
        justify-content: space-between;
    }
    .logo{
        width: 36px;
        height: auto;
        border-radius: 50%;
        display: block;
        cursor: pointer;
    }
    .menu-mobile{
        width: auto;
        flex-shrink: 0;
        cursor: pointer;
    }
    .menu-desktop{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .menu-desktop button{
        display: flex;
        align-items: center;
        gap: 10px;
        outline: none;
        border: none;
        padding: 5px 10px;
        border-radius: 50px;
        background-color: white;
        color: #419AD1;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.5s ease-in;
    }
    .menu-desktop button:active{
        background-color: blue;
    }
    .help{
        text-decoration: none;
        color: inherit;
    }
    .our-proucts{
        position: relative;
    }
    .product-list{
        list-style: none;
        position: absolute;
        top: 16px;
        right: 0;
        background-color: white;
        padding: 10px 20px;
        border-radius: 10px;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    @media (min-width:567px){
        .menu-mobile{
            display: none;
        }
        .menu-desktop{
            display: flex;
            gap:20px;
            align-items: center;
        }
        .logo{
            width: 48px;
        }
        
    }
</style>