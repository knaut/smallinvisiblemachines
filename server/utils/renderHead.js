import HeadConfig from '../../configureHead.js';

export default function renderHead( html, preloadedState ) {
  return `
    <!doctype ${ HeadConfig.lang ? 'lang="' + HeadConfig.lang + '"' : ''}>
    <html>
      <head>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-44595138-3"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-44595138-3');
        </script>

        <title>${ HeadConfig.title }</title>
        ${ HeadConfig.charset ? '<meta charset="' + HeadConfig.charset + '">' : ''}
        ${ HeadConfig.description ? '<meta name="description" content="' + HeadConfig.description + '">' : ''}
        ${ HeadConfig.keywords ? '<meta name="keywords" content="' + HeadConfig.keywords + '">' : ''}
        ${ HeadConfig.viewport ? '<meta name="viewport" content="' + HeadConfig.viewport + '">' : ''}
        ${ HeadConfig.extStylesheets ? '<link rel="stylesheet" type="text/css" href="' + HeadConfig.extStylesheets + '">' : ''}
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon">
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon">
        <link href="https://fonts.googleapis.com/css?family=Taviraj|Open+Sans|Oswald:200,300,400,500,600,700" rel="stylesheet">
      </head>
      <body>
        <div id="page-top" data-spy="scroll" data-target=".navbar-collapse">${ html }</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script type="text/javascript" src="/js/jquery-2.2.2.min.js"></script>
        <script type="text/javascript" src="/js/jquery.easing.min.js"></script> 
        <script type="text/javascript" src="/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="/js/slick.min.js"></script>
        <script type="text/javascript" src="/js/simple.parallax.js"></script>
        <script type="text/javascript" src="/js/jquery.countTo.js"></script> 
        
        <script src="/js/zip.min.js"></script>
        <script src="/js/screenfull.min.js"></script>
        <script src="/js/epub.js"></script>
        <script src="/js/reader.js"></script>

        <script type="text/javascript" src="/assets/bundle.js"></script>
      </body>
    </html>
  `
}