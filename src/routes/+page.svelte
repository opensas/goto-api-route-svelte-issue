<script lang="ts">
	import { goto } from "$app/navigation";
</script>

<button on:click={() => goto('/api/user')}> goto api route from client: goto('/api/user')</button>

<button on:click={() => goto('/sub')}> goto sub route: goto('/sub')</button>