<script>

    let t_errMsg = "Oops ! 😵 Route not found !"

</script>

<main>
    <p>{t_errMsg}</p>
    <a href="/">Go back to Home</a>
    <img src="/not-found.png" alt="">
</main>

<style>
    main{
        height: 100dvh;
        background-color: black;
    }
    img{
        width: 100%;
        max-width: 500px;
        display: block;
        margin: 0 auto;
    }
    a{

        display: block;
        background-color: white;
        width: fit-content;
        margin: 0 auto;
        padding: 2px 10px;
        border-radius: 10px;
        text-align: center;
    }
    p{
        text-align: center;
        font-size: 36px;
        font-weight: bold;
        padding-top: 30px;
        color: whitesmoke;
    }
</style>