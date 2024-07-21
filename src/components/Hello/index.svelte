<script>
  import { onMount } from 'svelte'
  import Hello from './hello.svelte'

  onMount(() => {

  })
</script>

<div id="hello">
  <Hello/>
</div>

<style>
  
  #hello {
    height: 100vh;
    width: 100%;
    background: #000;
  }

</style>
