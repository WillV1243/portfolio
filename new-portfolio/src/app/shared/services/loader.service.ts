import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
/* --------------------------------------------------------------------------------- */

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
      this.renderer = rendererFactory.createRenderer(null, null);
  }

  public hideOnImageLoad(): void {
    const images = document.querySelectorAll('img');
    let imagesLoaded = 0;


    for (let i = 0; i < images.length; i++) {
      images[i].addEventListener('load', () => {
        imagesLoaded++;

        if (imagesLoaded + 1 === images.length) {
          this.hide();
        }
      })
    }
  }

  private hide() {
    setTimeout(() => {
      let loader = this.renderer.selectRootElement('#loader');
      this.renderer.addClass(loader, 'hidden');
    }, 1000);
  }
}
