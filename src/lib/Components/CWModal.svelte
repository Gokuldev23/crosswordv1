<script>
    import { createEventDispatcher } from "svelte";
	import Modal from "./Modal.svelte";

    export let cwName = ''
    export let cwImg = ''

    let t_play = "Play"
    let t_cancel = "cancel"

    let dispatch = createEventDispatcher()

    const handlePlay = () => {
        dispatch('play')
    }
</script>


<main>
    <Modal on:click>
        <div class="modal">
            <div class="modal-cw">
                <p class="cw-name">{cwName}</p>
                <img class="crossword-img" src={cwImg} alt="">
                <div class="play-cancel-btns">
                    <button on:click class="cancel-btn">{t_cancel}</button>
                    <button on:click={handlePlay} class="play-btn">{t_play}</button>
                </div>
            </div>
        </div>
    </Modal>
</main>

<style>
    .modal{
        background-color: white;
        padding: 4px 20px;
        border-radius: 10px;
    }
    .modal .cw-name{
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        margin: 5px 0   ;
    }
    .modal .crossword-img{
        max-width: 250px;

    }
    .play-cancel-btns{
        display: flex;
        align-items: center;
        justify-content:space-between;
        margin-top: 20px;
    }
    .play-btn,.cancel-btn{
        padding: 4px 12px;
        border-radius: 20px;
        border: 1px solid rgba(0, 0, 0, 0.493);
    }
    .play-btn{
        background-color: #77B1D5;
        color: white;
        font-weight: 500;
        padding: 4px 20px;
    }
</style>