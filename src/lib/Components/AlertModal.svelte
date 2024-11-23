<script>
	import Modal from "./Modal.svelte";
    import { createEventDispatcher } from "svelte";

    export let message = ''
    export let alertBgColor = 'white'
    export let msgTextColor = 'black'

    let dispatch = createEventDispatcher()

    let t_ok = 'OK'

    const handleOnOk = () => {
        dispatch('ok')
    }

</script>


<Modal on:click>
    <div class="alert" style="background-color: {alertBgColor};">
        <p style="color: {msgTextColor};">{message}</p>
        <button on:click={handleOnOk}>{t_ok}</button>
    </div>
</Modal>


<style>
    .alert{
        padding: 10px 16px;
        border-radius: 10px;
        max-width: 400px;
        width: 300px;
        box-sizing: border-box;
    }
    .alert p{
        font-size: 14px;
        font-weight: bold;
        margin: 10px 10px;
        margin-bottom: 28px;
    }
    button{
        background-color: rgba(128, 128, 128, 0.301);
        border-radius: 10px;
        padding: 6px 32px;
        display: block;
        margin-left: auto;
        font-size: 12px;
    }
    @media (min-width:576px){
        .alert{
            max-width: 600px;
            width: 400px;
        }
        .alert p{
            font-size: 18px;
        }
        button{
            font-size: 16px;
        }
    }
</style>
