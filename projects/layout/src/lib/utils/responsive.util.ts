export class ResponsiveUtil {
  static isMobile(width: number, breakpoint: number = 768): boolean {
    return width <= breakpoint;
  }

  static isTablet(width: number, min: number = 769, max: number = 1024): boolean {
    return width >= min && width <= max;
  }

  static isDesktop(width: number, breakpoint: number = 1025): boolean {
    return width >= breakpoint;
  }
}
