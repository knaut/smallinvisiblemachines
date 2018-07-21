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