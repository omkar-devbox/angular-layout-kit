export abstract class LayoutPluginModel {
  abstract id: string;
  abstract name: string;
  enabled = true;

  constructor(public config: any = {}) {}

  abstract initialize(): void;
  abstract destroy(): void;

  enable(): void {
    this.enabled = true;
  }

  disable(): void {
    this.enabled = false;
  }
}
