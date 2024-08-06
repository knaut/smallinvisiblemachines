<script>
  import Logo from '../../components/Header/logo.svelte'
  import Typeface from '../../components/Header/typeface.svelte'
</script>

<footer>

  <div id="footer-center-wrap">
    <div id="footer-logo"><Logo/></div>
    <!-- <div id="footer-typeface"><Typeface/></div> -->


  </div>


  <div id="footer-post">
    <h6>Copyright © {new Date().getFullYear()} Daniel A. Anderson. All rights reserved.</h6>
    <h6>Made with ❤️ from Seattle</h6>
  </div>
</footer>

<style>
  footer {
    background: #07223C url('./line6.png') repeat;
    height: calc(45vh + 100px);
    min-height: 300px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    position: relative;
    border-top: 5px solid var(--teal2);
/*    border-bottom: 5px solid var(--teal2);*/
    box-shadow: inset 0 10px 26px var(--dark4);
  }

  footer div {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  #footer-logo {
    margin-top: -160px;
    width: 200px;
  }

  #footer-typeface {
    width: 350px;
  }



  :global(footer .logo) {
    width: 400px;

  }

  :global(footer path) {
    fill: var(--teal2);
/*    filter: blur(100px);*/
  }


  #footer-post {
    background: var(--dark4);
    width: 100%;
    position: absolute;
    bottom:0;
    padding: 50px;
    box-sizing: border-box;
    text-align: center;
    border-top: 5px solid var(--teal2);
    box-shadow: 0 -2px 16px var(--dark1);


  }

  #footer-post h6 {
    color: var(--teal4);
    font-size: 16px;
    font-weight: lighter;
    margin: 0;
    padding: 0;
    letter-spacing: 1px;
  }

  #footer-post h6:first-child {
    margin-bottom: 25px;
  }

  @media (max-width: 620px) {
    :global(footer .logo) {
      width: 200px;
      margin-top: -35px;
    }
  }

</style>
