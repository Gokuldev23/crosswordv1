<script>
    import '../app.css'
    import Footer from "$lib/Components/Footer.svelte";
    import Navbar from "$lib/Components/Navbar.svelte";

</script>


<main>
    <Navbar/>
    <slot/>
    <Footer/>
</main>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


    main{
        min-height: 100vh;
        min-height: 100dvh;
        font-family: "Poppins", sans-serif;
        font-optical-sizing: auto;
        background-color: #77B1D4;
    }
</style>