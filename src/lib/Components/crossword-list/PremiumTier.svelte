<script>
    import { goto } from "$app/navigation";
    import { createEventDispatcher } from "svelte";
	import { slide } from "svelte/transition";

    import { premiumTierCW } from "$lib";
	import SubscribeModal from "../SubscribeModal.svelte";
	import AlertModal from "../AlertModal.svelte";


    let t_premium_crosswords = "Premium Cross - Words"
    let t_cross_word = "cross-word"
    let t_play = "Play"
    let t_cross_word_not_found = "Cross Word not found!"
   

    let dispatch = createEventDispatcher()

    let proUser = false
    let registered = true

    let showSubscribeModal = false
    let searchTerm = ''
    let searchedElem
    let crossWordNotFound = false

    const toggleSubscribeModal = () => showSubscribeModal = !showSubscribeModal

    const toggleAlert = () => crossWordNotFound = !crossWordNotFound


    const handleCWclicked = (cw) => {
        resetSearchedElemStyle()

        if(!proUser) {
            toggleSubscribeModal()
            return;
        }
        dispatch('onCWclicked',cw)
    }

    const scrollToCrossword = () => {
        // Format search term to match the ID
        const id = `${searchTerm}`;
        searchedElem = document.getElementById(id);

        if (searchedElem) {
            searchedElem.scrollIntoView({ behavior:"instant", block: "center" });
            searchedElem.classList.add('active')

        } else {
            toggleAlert()
            searchTerm = ''
        }
    }

    const resetSearchedElemStyle = () => {
        if(searchedElem){
            searchedElem.classList.remove('active')
        }
    }
 
    const handleSearch = () => {
        resetSearchedElemStyle()
        if(searchTerm){
            scrollToCrossword()
        }
    }
    const navigateSubscribePage = () => {
        goto('/subscribtion')
    }

</script>


<main>
    {#if showSubscribeModal}
        <SubscribeModal on:click={toggleSubscribeModal} on:cancel={toggleSubscribeModal} on:subscribe={navigateSubscribePage}/>
    {/if}

    {#if crossWordNotFound}
        <AlertModal message={t_cross_word_not_found} on:click={toggleAlert} on:ok={toggleAlert}/>
    {/if}

    <div class="premium-tier">
        <p class="tier-title">
            <img class="badge" src="/premium-badge.svg" alt="">
            {t_premium_crosswords}
        </p>
        <div class="search-container">
            <label class="search-label" for="search">{t_cross_word}-</label>
            <input id='search' class="search" bind:value={searchTerm} type="number">
            <button on:click={handleSearch} class="search-btn">Search</button>
        </div>
    
        <div class="premium-crosswords cw-container">
            {#each premiumTierCW as cw,i}
                <div id="{i+1}" on:click={()=>handleCWclicked(cw)} on:keydown class="a-cross-word {cw.status}"  role="button" tabindex="0">
                    <small class="status-name">{cw.status}</small>
                    <img class="crossword-img" src={cw.img} alt="">
                    <p class="cw-name">#{cw.name}</p>
                </div>
            {/each} 
        </div>
    </div>
</main>


<style>
    main{
        max-width: 1100px;
        margin: 0 auto;
    }
    
    .search-container{
        display: flex;
        gap: 10px;
        margin: 0 auto;
        align-items: center;
        max-width: 300px;
    }
    .search-label{
        white-space: nowrap;
    }
    .search-btn{
        background-color:#77B1D5;
        color: white;
        border-radius: 10px;
        padding: 2px 10px;
    }
    .search{
        border: 1px solid gray;
        border-radius: 10px;
        margin: 10px auto;
        display: block;
        width: 100%;

    }
     .tier-title{
        text-align: center;
        width: fit-content;
        margin: 0 auto;
        padding: 2px 20px;
        display: flex;
        align-items: center;
        gap: 10px;
        border: 2px solid #77B1D5;
        border-radius: 40px;
    }
    .cw-container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr ;
        max-height: 70vh;
        overflow-y: scroll;
        gap: 10px;
        margin-top: 10px;
    }
    .badge{
        width: 20px;
    }
    .crossword-img{
        width: 100%;
        max-width: 200px;
        margin: 0 auto;
        background-color: white;
    }
    .cw-name{
        font-size: 12px;
        text-align: center;
    }

    .a-cross-word{
        border-radius: 10px;
        padding: 6px;
        transition: all 0.1s linear;
    }
    .status-name{
        display: block ;
        margin: 5px 0px;
        color: rgb(90, 74, 74);
        text-align: center;
        font-size: 10px;
        text-transform: capitalize;
    }
    .new{
        background-color: rgba(255, 217, 0, 0.562);
    }
    .continue{
        background-color: rgb(223, 213, 213);
    }
    .completed{
        background-color: rgb(130, 231, 130);
    }

    .active{
        border: 4px solid black;
    }
  
    .a-cross-word:hover{
        background-color: #77B1D5;
    }
  
    .premium-tier{
        margin-top: 20px;
    }


    @media(min-width:576px){
        .cw-name{
            font-size: 14px;
        }
        .status-name{
            font-size: 12px;
        }
    }
   
    @media(min-width:786px){
        .cw-container{
            grid-template-columns:repeat(4,1fr) ;
            gap: 20px;
        }
        .crossword-img{
            max-width: 100%;
        }
        .cw-name{
            font-size: 16px;
            margin: 10px 0;
        }
    }
</style>