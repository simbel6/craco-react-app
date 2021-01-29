import { init } from '@rematch/core'
import createLoadingPlugin from '@rematch/loading'
import models from './loader'

const loadingPlugin = createLoadingPlugin({ asNumber: true })

const configureStore = initialState =>
  init({
    plugins: [loadingPlugin],
    models,
    redux: {
      initialState,
    },
  })
export default configureStore
