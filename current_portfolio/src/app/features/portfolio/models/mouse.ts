export class Mouse {
  x: number;
  y: number;

  public updatePosition($event: MouseEvent, el: HTMLElement): void {
    const e = $event;
    const rect = el.getBoundingClientRect();
    const origin = this.getOrigin(rect);

    // Determines mouse position in relation to center point of element
    this.x = e.clientX - origin.x;
    this.y = (e.clientY - origin.y) * -1;
  };

  private getOrigin(rect: DOMRect): { x: number, y: number } {
    // Gets x, y coordinates of center point of element
    const x = Math.floor(rect.left) + Math.floor(rect.width / 2);
    const y = Math.floor(rect.top) + Math.floor(rect.height / 2);

    return { x, y };
  }

}
