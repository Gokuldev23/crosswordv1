<script>
	import { goto } from "$app/navigation";
    
	import CWModal from "$lib/Components/CWModal.svelte";
	import Modal from "$lib/Components/Modal.svelte";
	import FreeTier from "$lib/Components/crossword-list/FreeTier.svelte";
	import PremiumTier from "$lib/Components/crossword-list/PremiumTier.svelte";


    let t_play = "Play"
    let t_cancel = "cancel"

    let showCWModal = false

    let clickedCW_name = ''
    let clickedCW_image = ''

    const toggleCWModal = (e) => {
        let cw = e.detail
        showCWModal = !showCWModal
        if(showCWModal){
            clickedCW_image = cw.img 
            clickedCW_name = cw.name
        }
    }

    const navigatePlayArea = () => goto('/playArea')

</script>


<main>
    {#if showCWModal}
        <CWModal cwImg={clickedCW_image} cwName={clickedCW_name} on:click={toggleCWModal} on:play={navigatePlayArea}/>
    {/if}

    <FreeTier on:onCWclicked={toggleCWModal}/>
    <PremiumTier on:onCWclicked={toggleCWModal} />

</main>


<style>
    main{
        min-height: 100dvh;
        background-color: white;
        padding: 20px 10px;
    }
    
</style>