Package.describe({
  name: 'mdg:tooltips',
  version: '0.2.5',
  summary: 'Basic tooltip wrapper for elements',
  git: 'https://github.com/meteor/chromatic',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use([
    'ecmascript',
    'less',
    'underscore',
    'mdg:borealis@0.2.5',
    'mdg:chromatic-api@0.2.4'
  ], 'client');
  api.addFiles([
    'jquery.qtip.js',
    'jquery.qtip.import.less',
    'WithTooltip.jsx',
    'WithTooltip.less',
    'TooltipStyleguide.jsx'], 'client');
  api.export('WithTooltip', 'client');
});
