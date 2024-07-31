<script>
  import Logo from '../../components/Header/logo.svelte'
  import Typeface from '../../components/Header/typeface.svelte'
</script>

<footer>

  <div>
    <Logo/>
    <!-- <Typeface/> -->
  </div>

</footer>

<style>
  footer {
    background: #07223C;
    height: 50vh;
    min-height: 400px;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  footer div {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }



  :global(footer .logo) {
    width: 400px;

  }

  :global(footer path) {
    fill: var(--teal2);
/*    filter: blur(100px);*/
  }
</style>
