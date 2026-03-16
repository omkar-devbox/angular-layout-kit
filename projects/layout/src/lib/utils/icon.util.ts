export class IconUtil {
  static getIconClass(icon: string, provider: 'material' | 'fa' | 'lucide' = 'material'): string {
    switch (provider) {
      case 'material': return `material-icons ${icon}`;
      case 'fa': return `fas fa-${icon}`;
      case 'lucide': return `lucide-${icon}`;
      default: return icon;
    }
  }
}
