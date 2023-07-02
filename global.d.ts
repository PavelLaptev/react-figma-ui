import icon32 from './src/components/Icon/icons32.json'
import icon16 from './src/components/Icon/icons32.json'

declare global {
  type Icon32Type = keyof typeof icon32
  type Icon16Type = keyof typeof icon16
}

export {}
