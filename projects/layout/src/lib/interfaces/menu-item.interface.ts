export interface MenuGroup {
  name: string;
  items: MenuItem[];
}

export interface MenuItem {

  id?: string;

  label: string;

  icon?: string;

  route?: string;

  group?: string;

  externalLink?: string;

  badge?: {
    text?: string;
    color?: string;
  };

  children?: MenuItem[];

  roles?: string[];

  disabled?: boolean;

  expanded?: boolean;

  tooltip?: string;

}

