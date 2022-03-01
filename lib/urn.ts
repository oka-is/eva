import {NuxtI18nInstance} from "@nuxtjs/i18n"

export class Urn {
  private readonly i18n: NuxtI18nInstance
  private locale: string

  constructor(i18n: NuxtI18nInstance) {
    this.i18n = i18n
    this.locale = i18n.locale

    i18n.onBeforeLanguageSwitch = (was: string, current: string) => {
      this.locale = current
    }
  }

  login(): string {
    return `/${this.locale}`
  }

  spa(): string {
    return `/${this.locale}/spa`
  }

  join(): string {
    return `/${this.locale}/join`
  }

  workspaces(): string {
    return `/${this.locale}/workspaces`
  }

  workspace(id: string): string {
    return `/${this.locale}/workspaces/${id}`
  }
}
