<script>
	import { fade } from 'svelte/transition'
</script>

<div class="loading" transition:fade>Loading...</div>

<style>
	.loading{
    position: absolute;
    top: 50%;
    text-align: center;
    width: 100%;
	}
</style>

