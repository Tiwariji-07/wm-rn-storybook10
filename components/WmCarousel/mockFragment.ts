class MockFragment {
  App: any;
  Variables: any;
  Actions: any;
  Widgets: any;
  app: any;
  appConfig: any;
  watcher: any;
  theme: any;
  name: string;

  constructor() {
    this.name = 'Main';
    this.app = {
      notify: () => {},
      appLocale: 'en',
      activePageName: 'Main',
      subscribe: () => {},
      unsubscribe: () => {},
      isSkeletonEnabled: () => false
    };
    
    this.appConfig = {
      theme: {
        $new: () => ({
          getStyle: () => ({})
        })
      }
    };

    this.App = {
      isSkeletonEnabled: () => false,
      handleUrl: (url: string) => url,
      activePageName: 'Main',
      subscribe: () => {},
      unsubscribe: () => {},
    };

    this.Variables = {};
    this.Actions = {};
    this.Widgets = {};

    this.watcher = {
      subscribe: () => {},
      unsubscribe: () => {},
    };

    this.theme = {
      $new: (name: string, styles: any) => ({
        ...this.theme,
        getStyle: () => styles,
        mergeStyle: (base: any, custom: any) => ({ ...base, ...custom }),
      }),
      getStyle: () => ({}),
      mergeStyle: (base: any, custom: any) => ({ ...base, ...custom }),
    };
  }

  notify(eventName: string, data?: any) {
    console.log('Event notified:', eventName, data);
  }

  invokeCallback(callbackName: string, data?: any) {
    console.log('Callback invoked:', callbackName, data);
  }

  handleUrl(url: string) {
    return url;
  }

  subscribe(eventName: string, callback: Function) {
    // Mock subscription
  }

  unsubscribe(eventName: string) {
    // Mock unsubscription
  }

  toJSON() {
    const { app, appConfig, App, Variables, Actions, Widgets, watcher, theme } = this;
    return { app, appConfig, App, Variables, Actions, Widgets, watcher, theme };
  }
}

export const mockFragment = new MockFragment();
