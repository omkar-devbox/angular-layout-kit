import { Directive, inject, Input, TemplateRef, ViewContainerRef, effect } from '@angular/core';
import { ResponsiveService } from '../services/responsive.service';

@Directive({
  selector: '[ltResponsiveHide]',
  standalone: true
})
export class ResponsiveHideDirective {
  private readonly templateRef = inject(TemplateRef);
  private readonly viewContainer = inject(ViewContainerRef);
  private readonly responsive = inject(ResponsiveService);

  @Input('ltResponsiveHide') hideType: 'mobile' | 'desktop' = 'mobile';

  constructor() {
    effect(() => {
      const isMobile = this.responsive.isMobile();
      const shouldHide = (this.hideType === 'mobile' && isMobile) || 
                         (this.hideType === 'desktop' && !isMobile);
      
      if (shouldHide) {
        this.viewContainer.clear();
      } else {
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    });
  }
}
