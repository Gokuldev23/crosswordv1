<script>
    import { createEventDispatcher } from "svelte";
    import Modal from "./Modal.svelte";

    let dispatch = createEventDispatcher()

    let t_cancel = "cancel"
    let t_subscribe = "Subscribe"

    const handleCancel = () => {
        dispatch('cancel')
    }

    const handleSubscribe = () => {
        dispatch('subscribe')
    }
</script>


<main>
    <Modal on:click>
        <div class="modal">
            <div class="modal-cw">
                <img class="crossword-img" src="/premium-image.png" alt=""> <!--default cross-word img placeholder-->
                <ul class="benefits">
                    <li>Unlock 700+ Crosswords!</li>
                    <li>Continue from where you left</li>
                    <li>Much more..</li>
                </ul>
                <div class="play-cancel-btns">
                    <button on:click={handleCancel} class="cancel-btn">{t_cancel}</button>
                    <button on:click={handleSubscribe} class="sub-btn">{t_subscribe}</button>
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
 
    .modal .crossword-img{
        width: 100%;
        margin: 0 auto;
        background-color: white;
        max-width: 200px;
    }
    .benefits{
        list-style:circle;
         background-color: #77b1d571;
        padding: 5px 10px;
        list-style-position: inside;
        border-radius: 10px;
        color: rgb(49, 44, 44);
        font-weight: bold;
    }
    .benefits li{
        margin-bottom: 5px;
    }
    .play-cancel-btns{
        display: flex;
        align-items: center;
        justify-content:space-between;
        margin-top: 20px;
    }
    .sub-btn,.cancel-btn{
        padding: 4px 12px;
        border-radius: 20px;
        border: 1px solid rgba(0, 0, 0, 0.493);
    }
    .sub-btn{
        background-color: #77b1d5e7;
    }
</style>