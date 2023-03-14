<script lang="ts">
	import { goto } from "$app/navigation";
</script>

<button on:click={() => goto('/redirect')}> goto page that redirects to external url: goto('/redirect') (debugger error)</button>

<br />

<button on:click={() => window.location.href = '/redirect'}> window.location.href to page that redirect to external url: goto('/redirect') (debugger error)</button>
