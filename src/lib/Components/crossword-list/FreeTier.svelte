<script>
    import { createEventDispatcher } from "svelte";
	import { fly, scale, slide } from "svelte/transition";
    import { freeTierCW } from "$lib";


    let t_free_crosswords = "Free Cross - Words"
    let t_cross_word = "cross-word"

    let dispatch = createEventDispatcher()

    let proUser = false
    let registered = true
    let showCWModal = false

    let expanded = false
    const toggleExpandFreeTier = () => {
        expanded = !expanded
    }

    const handleCWclicked = (cw) => {
        dispatch('onCWclicked',cw)
    }

</script>



<main>
    <div class="free-tier">
        <button on:click={toggleExpandFreeTier} class="tier-title">
            <img class="badge" src="/free-badge.png" alt="">
            {t_free_crosswords}
            <img class="expand-arrow" src="/downArrow.webp" alt="">
        </button>
    
        {#if expanded}
            <div transition:slide={{duration:1000}}>
                <div transition:scale={{start:0.9}}  class="free-crosswords cw-container">
                    {#each freeTierCW as cw,i}
                        <div transition:scale on:click={()=>handleCWclicked(cw)} on:keydown 
                             class="a-cross-word" id="a-cross-word-{i+1}" role="button" tabindex="0" >

                            <img class="crossword-img" src={cw.img} alt="">
                            <p class="cw-name">#{cw.name}</p>
                        </div>
                    {/each} 
                </div>
            </div>
        {/if}
    </div>
</main>

<style>
   
     main{
        max-width: 1200px;
        margin: 0 auto;
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
    .tier-title{
        text-align: center;
    }
    .badge{
        width: 20px;
    }
    .cw-container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr ;
        gap: 10px;
        margin-top: 10px;
    }
    .crossword-img{
        width: 100%;
        max-width: 100px;
        margin: 0 auto;
        background-color: white;
    }
    .cw-name{
        font-size: 14px;
    }
    .a-cross-word{
        background-color: #77b1d557;
        border-radius: 10px;
        padding: 6px;
    }
    .a-cross-word:hover{
        background-color: #77B1D5;
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