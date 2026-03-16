export class ThemeModel {
  name: string;
  isDark: boolean;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };

  constructor(name: string, isDark = false, colors?: any) {
    this.name = name;
    this.isDark = isDark;
    this.colors = colors || {
      primary: '#3f51b5',
      secondary: '#ff4081',
      background: isDark ? '#303030' : '#fafafa',
      text: isDark ? '#ffffff' : '#000000'
    };
  }
}
