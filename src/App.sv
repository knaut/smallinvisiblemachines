<script>
  import Typeface from './svgs/typeface.svelte'
  import Logo from './svgs/logo.svelte'
</script>
<div>
  <div id="main">

    <div id="content">
      <div id="logo">
        <Logo/>
      </div>
      <div id="title">
        <h1>Small Invisible Machines</h1>
        <Typeface/>
      </div>

      <div id="cta">
        <a href="mailto:daniel@smallinvisiblemachines.com">Contact</a>
        <a href="/resume.docx">Resume</a>
      </div>

    </div>

  </div>
</div>
<style>
  :global(body) {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }

  #main {
    background-image: -webkit-gradient(radial, center center, 0, center center, 220, from(#ECF6F7), to(#8D9AA6));
    background-image: -webkit-radial-gradient(#ECF6F7, #8D9AA6);
    background-image: radial-gradient(#ECF6F7, #8D9AA6);

    height: 100vh;
    display: flex;

    align-items: center;
  }

  #content {
    position: relative;
    top: -75px;
    margin: 0 auto;
  }

  #logo {
    display: flex;
    justify-content: center;
  }

  #title {
    width: 100%;
    font-size: 72px;

    display: flex;
    justify-content: center;
    margin-bottom: 55px;
  }

  #title h1 {
    display: none;
  }

  #cta {
    display: flex;
    justify-content: space-around;
  }

  #cta a,
  #cta a:link,
  #cta a:hover,
  #cta a:active,
  #cta a:visited {
    font-family: Arial Black;
    font-size: 28px;

    text-transform: uppercase;
    text-decoration: none;
    color: #455059;
    letter-spacing: 3px;
  }

  #cta a:hover {
    color: #8D9AA6;
  }

  :global(#title svg path) {
    fill: #455059;
  }

  :global(#logo svg) {
    width: 420px;
    margin-bottom: 50px;
  }

  :global(#logo svg path) {
    fill: #455059;
  }

</style>
