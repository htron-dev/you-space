import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import Vue from 'vue'

const componentDirectoryContext = require.context('../components', true, /\.(vue|ts)$/)

const fileNames = componentDirectoryContext.keys()

fileNames.forEach((fileName) => {
  const component = componentDirectoryContext(fileName)

  const componentName = upperFirst(
    camelCase(
      fileName
        .replace(/^\.\//, '')
        .replace(/\.\w+$/, '')
        .replace('index', '')
    )
  )

  Vue.component(
    componentName,
    component.default || component
  )
})
