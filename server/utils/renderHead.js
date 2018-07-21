import HeadConfig from './configureHead.js';

export default function renderHead( html, preloadedState ) {
  return `
    <!doctype ${ HeadConfig.lang ? 'lang="' + HeadConfig.lang + '"' : ''}>
    <html>
      <head>
        <!-- Global site tag (gtag.js) - Google Analytics -->

        <script>
          
        </script>

        <title>${ HeadConfig.title }</title>
        ${ HeadConfig.charset ? '<meta charset="' + HeadConfig.charset + '">' : ''}
        ${ HeadConfig.description ? '<meta name="description" content="' + HeadConfig.description + '">' : ''}
        ${ HeadConfig.keywords ? '<meta name="keywords" content="' + HeadConfig.keywords + '">' : ''}
        ${ HeadConfig.viewport ? '<meta name="viewport" content="' + HeadConfig.viewport + '">' : ''}
        <style type="text/css">
          .spinner-wrap {
            height: 100%;
            position: absolute;
            width: 100%;
            background: #fff;
            z-index: 10;
            opacity: 1;
            transition: 0.5s opacity ease-in-out;
          }
          .spinner-wrap.loaded {
            opacity: 0;
          }
          .spinner-wrap.hidden {
            z-index: -1;
          }
          .spinner {
              -webkit-animation:spin 1s linear infinite;
              -moz-animation:spin 1s linear infinite;
              animation:spin 1s linear infinite;
          }
          @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
          @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
          @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
        </style>
        ${ HeadConfig.extStylesheets ? '<link rel="stylesheet" type="text/css" href="' + HeadConfig.extStylesheets + '">' : ''}
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon">
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon">
        <link href="https://fonts.googleapis.com/css?family=Syncopate:400,700" rel="stylesheet">
      </head>
      <body>
        <div id="page-top" data-spy="scroll" data-target=".navbar-collapse">${ html }</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script type="text/javascript" src="/assets/bundle.js"></script>
      </body>
    </html>
  `
}