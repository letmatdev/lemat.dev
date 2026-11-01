import { defineConfig } from 'oxlint'
import core from 'ultracite/oxlint/core'
import {
  jsPluginSettings,
  selectJsPlugins
} from 'ultracite/oxlint/js-plugins'
import next from 'ultracite/oxlint/next'
import nextJsPlugins from 'ultracite/oxlint/next/js-plugins'
import react from 'ultracite/oxlint/react'
import shadcn from 'ultracite/oxlint/shadcn'

const jsPlugins = selectJsPlugins([
  'react-doctor',
  'tsdoc',
  'sonarjs',
  'github'
])

export default defineConfig({
  env: core.env,
  extends: [core, react, next, nextJsPlugins, shadcn, jsPlugins],
  ignorePatterns: core.ignorePatterns,
  jsPlugins: [...jsPlugins.jsPlugins, ...shadcn.jsPlugins],
  rules: {
    'func-names': 'off',
    'func-style': 'off',
    'react/function-component-definition': 'off',
    'typescript/ban-ts-comment': 'off',
    'typescript/consistent-type-definitions': 'off'
  },
  settings: jsPluginSettings
})
