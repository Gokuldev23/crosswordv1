<script>
    const handleGoBack = () => {
        history.back()
    }
</script>


<main>
    <h1>Subscrition page</h1>
    <button on:click={handleGoBack}>Go back</button>
</main>

<style>
    main{
        height: 100dvh;
    }
</style>