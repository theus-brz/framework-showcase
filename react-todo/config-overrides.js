module.exports = function override(config) {
  config.optimization.runtimeChunk = false;
  config.output.filename = 'static/js/main.js';
  config.plugins[5].options.filename = 'static/css/main.css';
  config.optimization.splitChunks = {
    cacheGroups: {
      default: false,
    },
  };
  const scopePluginIndex = config.resolve.plugins.findIndex(
    ({ constructor }) => constructor && constructor.name === 'ModuleScopePlugin',
  );

  config.resolve.plugins.splice(scopePluginIndex, 1);
  return config;
};
