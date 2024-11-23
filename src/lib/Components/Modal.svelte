<script>
	import { fly } from "svelte/transition";

</script>


<div transition:fly class="overlay"  role="button" tabindex="0" on:click|stopPropagation|self on:keydown>
    <div class="dialog">
        <slot/>
    </div>
</div>

<style>
    .overlay{
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.466);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }

</style>