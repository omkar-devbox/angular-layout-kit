import { Directive, inject, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[ltTooltip]',
  standalone: true
})
export class TooltipDirective {
  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  @Input('ltTooltip') tooltipText = '';
  private tooltipEl?: HTMLElement;

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (!this.tooltipText) return;
    this.showTooltip();
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.hideTooltip();
  }

  private showTooltip(): void {
    this.tooltipEl = this.renderer.createElement('span');
    this.renderer.appendChild(
      this.tooltipEl,
      this.renderer.createText(this.tooltipText)
    );

    this.renderer.addClass(this.tooltipEl, 'lt-tooltip');
    this.renderer.setStyle(this.tooltipEl, 'position', 'absolute');
    this.renderer.setStyle(this.tooltipEl, 'background', '#333');
    this.renderer.setStyle(this.tooltipEl, 'color', '#fff');
    this.renderer.setStyle(this.tooltipEl, 'padding', '4px 8px');
    this.renderer.setStyle(this.tooltipEl, 'border-radius', '4px');
    this.renderer.setStyle(this.tooltipEl, 'font-size', '12px');
    this.renderer.setStyle(this.tooltipEl, 'z-index', '1000');
    this.renderer.setStyle(this.tooltipEl, 'pointer-events', 'none');

    const rect = this.el.nativeElement.getBoundingClientRect();
    this.renderer.setStyle(this.tooltipEl, 'top', `${rect.top + window.scrollY}px`);
    this.renderer.setStyle(this.tooltipEl, 'left', `${rect.right + 10}px`);

    this.renderer.appendChild(document.body, this.tooltipEl);
  }

  private hideTooltip(): void {
    if (this.tooltipEl) {
      this.renderer.removeChild(document.body, this.tooltipEl);
      this.tooltipEl = undefined;
    }
  }
}
