import { Config } from '@stencil/core';
import builtins from 'rollup-plugin-node-builtins';

export const config: Config = {
  namespace: 'stencil-socketio',
  plugins : [
    builtins()
  ],
  nodeResolve: {
    browser: true,
    preferBuiltins: true
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
