# Layout

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.0.

## Project Structure

This library is organized into several specialized modules:

### [Components](src/lib/components)
Core UI components for the layout system.
- `left-sidenav`: The main navigation sidebar.
- `right-sidenav`: An auxiliary sidebar for secondary content.
- `top-navbar`: The top header navigation.
- `bottom-nav`: Mobile-friendly bottom navigation.
- `footer`: Project footer component.
- `layout-container`: The wrapper component that orchestrates all layout parts.

### [Configs](src/lib/configs)
Default configuration objects for various layout aspects.
- `default-layout.config.ts`: Main layout dimensions and theme defaults.
- `default-sidenav.config.ts`: Behavior settings for sidenavs.
- `default-theme.config.ts`: Default color schemes.
- `default-responsive.config.ts`: Default breakpoint definitions.

### [Directives](src/lib/directives)
Utility directives to enhance layout behavior.
- `SidenavToggleDirective`: Toggles sidenav visibility.
- `SidenavCollapseDirective`: Controls sidenav collapse state.
- `MenuActiveDirective`: Handles active link highlighting.
- `RolePermissionDirective`: Structural directive for RBAC.
- `TooltipDirective`: Displays contextual tooltips.
- `HoverExpandDirective`: Temporarily expands sidenav on hover.
- `ResponsiveHideDirective`: Hides elements based on viewport size.

### [Interfaces](src/lib/interfaces)
Core types and interfaces for type safety.
- `LayoutConfig`: Main configuration structure.
- `SidenavConfig`: Configuration for sidenav behavior.
- `ResponsiveConfig`: Breakpoint definitions.
- `MenuItem`: Structure for navigation entries.

### [Models](src/lib/models)
Class-based data models with structure and behavior.
- `MenuItemModel`: Representation of a menu item with helper methods.
- `SidenavStateModel`: Tracks and controls sidenav status.
- `LayoutStateModel`: Aggregated state for the entire layout.
- `ThemeModel`: Handles theme details and manipulations.
- `UserRoleModel`: Manages user permissions and access logic.

### [Services](src/lib/services)
Specialized services that manage specific layout domains.
- `LayoutService`: Facade for all layout functionality.
- `SidenavService`: Manages sidenav state and dimensions.
- `StateService`: Holds central layout configurations.
- `ResponsiveService`: Handles viewport detection and logic.
- `ThemeService`: Manages theme application and switching.

### [Tokens](src/lib/tokens)
Angular injection tokens for configurations and plugins.
- `LAYOUT_CONFIG_TOKEN`: Main configuration provider.
- `SIDENAV_CONFIG_TOKEN`: Provider for sidenav-specific overrides.
- `THEME_TOKEN`: Active theme provider.
- `PLUGIN_TOKEN`: Multi-provider for layout extensions.

### [Utils](src/lib/utils)
Helper functions and utility classes.
- `MenuBuilder`: Fluent API for building menu hierarchies.
- `RoleFilterUtil`: Filtering logic based on user roles.
- `ThemeUtil`: Styling and CSS variable helpers.
- `ResponsiveUtil`: Breakpoint checking logic.
- `IconUtil`: Standardization for different icon providers.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the library, run:

```bash
ng build layout
```

This command will compile your project, and the build artifacts will be placed in the `dist/` directory.

### Publishing the Library

Once the project is built, you can publish your library by following these steps:

1. Navigate to the `dist` directory:

   ```bash
   cd dist/layout
   ```

2. Run the `npm publish` command to publish your library to the npm registry:
   ```bash
   npm publish
   ```

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.






