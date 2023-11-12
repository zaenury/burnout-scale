declare module '@burnout-scale/website' {
  export interface Env {
    environment: string
    hostname: string
    teacherNumber: string
    apiBaseUrlPublic: string
    firebase: {
      apiKey: string
      authDomain: string
      databaseURL: string
      projectId: string
      storageBucket: string
      messagingSenderId: string
      appId: string
    }
    copywrite: {
      title: string
      sitename: string
      keywords: string
      description: string
    }
    googleAnalytics: {
      measurementId: string
    }
  }

  export interface ConfigEnvironment {
    env: Env
  }
}
