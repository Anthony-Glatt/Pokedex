import {
  action,
  makeAutoObservable,
  observable
} from 'mobx';
import { THEME, DARK_THEME_CLASSNAME } from '../constants/themes';

/**
 * @memberof store
 * @class
 */
class ThemeStore {
   theme;

   constructor() {
     makeAutoObservable(this, {
       theme: observable,
       toggleTheme: action,
     });
     const userPreference = window.matchMedia('(prefers-color-scheme: dark)');
     const stringPreference = userPreference ? THEME.dark : THEME.light;
     const initialTheme = window.localStorage.getItem('theme') || stringPreference;
     this.setTheme(initialTheme);
   }

  /** 
   * @function
   * @param {string} theme theme name
   * @throws {InvalidThemeException}
   */
   setTheme(theme) {
    if (Object.keys(THEME).includes(theme)) {
      if (theme === THEME.dark) {
        document.body.classList.add(DARK_THEME_CLASSNAME);
        window.localStorage.setItem('theme', THEME.dark);
      } else {
        document.body.classList.remove(DARK_THEME_CLASSNAME);
        window.localStorage.setItem('theme', THEME.light);
      }
      this.theme = theme;
    } else {
      throw new Error (`Theme: '${theme}' is invalid. Light or Dark are the only options.`);
    }
  }

    /** @function */
    toggleTheme() {
      if (this.theme === 'dark') {
        this.setTheme('light');
      } else {
        this.setTheme('dark');
      }
    }
}

export default ThemeStore;
