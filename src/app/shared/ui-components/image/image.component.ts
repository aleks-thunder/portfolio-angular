import { Component, Input } from '@angular/core';

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
  @Input() src = '';
  @Input() alt = '';
  @Input() width = '0';
  @Input() height = '0';
  @Input() isRounded = false;
  @Input() cursor = 'default';
  @Input() zoom = false;
  @Input() withBorder = false;

  imgSrc = '';
  imgExtension = '';
  imgStyle = '';
  isZoomed = false;

  private image!: HTMLImageElement;

  ngOnInit() {
    this.loadImage();

    this.imgStyle =
      (this.isRounded ? 'rounded-image ' : '') +
      (this.withBorder ? 'img-border' : '');
  }

  ngOnDestroy() {
    if (this.image) {
      this.image.removeEventListener('load', () => {});
    }
  }

  private loadImage() {
    const supportedExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp'];
    this.image = new Image();
    let extensionIndex = 0;

    this.image.onload = () => {
      this.imgExtension = supportedExtensions[extensionIndex];
      this.imgSrc = this.image.src;
    };

    this.image.onerror = () => {
      extensionIndex++;
      if (extensionIndex < supportedExtensions.length) {
        this.image.src = `assets/images/${this.src}${supportedExtensions[extensionIndex]}`;
      } else {
        // TODO
        this.imgSrc = 'assets/images/default.png';
      }
    };

    this.image.src = `assets/images/${this.src}${supportedExtensions[extensionIndex]}`;
  }
}
