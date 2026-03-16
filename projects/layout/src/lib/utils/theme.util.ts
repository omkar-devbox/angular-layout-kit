export class ThemeUtil {
  static setCssVariable(name: string, value: string, element: HTMLElement = document.documentElement): void {
    element.style.setProperty(`--${name}`, value);
  }

  static getCssVariable(name: string, element: HTMLElement = document.documentElement): string {
    return getComputedStyle(element).getPropertyValue(`--${name}`).trim();
  }

  static hexToRgb(hex: string): { r: number, g: number, b: number } | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
}
