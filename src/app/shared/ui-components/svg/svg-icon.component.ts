import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss'],
})
export class SvgIconComponent implements OnInit {
  @Input() svg: string = '';
  @Input() height: string = '24px';
  @Input() width: string = '24px';
  @Input() cursor: string = 'default';

  svgContent$?: Observable<SafeHtml>;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    const svgPath = `assets/svg/${this.svg}.svg`;

    this.svgContent$ = this.http.get(svgPath, { responseType: 'text' }).pipe(
      map((data) => {
        data = data.replace(
          '<svg',
          `<svg height="${this.height}" width="${this.width}" `
        );
        return this.sanitizer.bypassSecurityTrustHtml(data);
      })
    );
  }
}
