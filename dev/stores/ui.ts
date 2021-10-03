import { types } from 'mobx-state-tree'
import { persist } from 'mst-persist'

export enum THEMES  {
  LIGHT = 0,
  DARK = 1,
}

export type Theme = THEMES
export const UI = types
  .model('UI', {
    theme: types.optional(types.number, 0),
  })
  .actions((self) => ({
    toggleTheme() {
      self.theme = Number(!self.theme)
    },
    setTheme(theme: Theme) {
      self.theme = theme
    },
  }))
  .views((self) => ({
    get isDarkTheme() {
      return Boolean(self.theme)
    },
  }))

const isDarkThemePreferred = window.matchMedia('(prefers-color-scheme: dark)')
  .matches

export const uiStore = UI.create({
  theme: isDarkThemePreferred ? THEMES.DARK : THEMES.LIGHT,
})

persist('ki_ui', uiStore).then(() =>
  console.log('uiStore has been hydrated')
)
