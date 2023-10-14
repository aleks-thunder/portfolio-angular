import { Component, Input } from '@angular/core';

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
  @Input() src: string = '';
  @Input() width: string = '0';
  @Input() height: string = '0';
  @Input() isRounded: boolean = false;

  imgSrc: string = '';
  imgExtension: string = '';
  imgStyle: string = '';

  private image!: HTMLImageElement;

  ngOnInit() {
    this.loadImage();
  }

  ngOnDestroy() {
    if (this.image) {
      this.image.removeEventListener('load', () => {});
    }
  }

  private loadImage() {
    const supportedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    this.image = new Image();

    const tryLoadingExtension = (index: number) => {
      if (index < supportedExtensions.length) {
        const extension = supportedExtensions[index];
        this.image.src = `assets/images/${this.src}${extension}`;

        this.image.addEventListener('load', () => {
          this.imgExtension = extension;
          this.imgSrc = this.image.src;
        });
        this.image.addEventListener('error', () => {
          console.log('Image not found.');
        });
      }
    };

    tryLoadingExtension(0);
    this.imgStyle = this.isRounded ? 'rounded-image' : '';
  }
}
