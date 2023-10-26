import { Component, Input } from '@angular/core';
import {
  AlignContent,
  AlignItems,
  FlexDirection,
  FlexProps,
  FlexWrap,
  JustifyContent,
} from './types';

@Component({
  selector: 'flex',
  templateUrl: './flex.component.html',
  styleUrls: [],
})
export class FlexComponent {
  @Input() set flex(flex: string) {
    this.flexProps.flex = flex;
  }
  @Input() set flexWrap(wrap: FlexWrap) {
    this.flexProps.flexWrap = wrap;
  }
  @Input() set flexDirection(direction: FlexDirection) {
    this.flexProps.flexDirection = direction;
  }
  @Input() set justifyContent(justify: JustifyContent) {
    this.flexProps.justifyContent = justify;
  }
  @Input() set alignContent(align: AlignContent) {
    this.flexProps.alignContent = align;
  }
  @Input() set alignItems(align: AlignItems) {
    this.flexProps.alignItems = align;
  }

  // dimensions
  @Input() set width(width: string) {
    this.flexProps.dimensions.width = width;
  }
  @Input() set maxWidth(maxWidth: string) {
    this.flexProps.dimensions.maxHeight = maxWidth;
  }
  @Input() set height(height: string) {
    this.flexProps.dimensions.height = height;
  }
  @Input() set maxHeight(maxHeight: string) {
    this.flexProps.dimensions.maxHeight = maxHeight;
  }

  // spacing
  @Input() set m(m: string) {
    this.flexProps.spacing.m = m;
  }
  @Input() set mx(mx: string) {
    this.flexProps.spacing.mx = mx;
  }
  @Input() set my(my: string) {
    this.flexProps.spacing.my = my;
  }
  @Input() set mt(mt: string) {
    this.flexProps.spacing.mt = mt;
  }
  @Input() set mr(mr: string) {
    this.flexProps.spacing.mr = mr;
  }
  @Input() set mb(mb: string) {
    this.flexProps.spacing.mb = mb;
  }
  @Input() set ml(ml: string) {
    this.flexProps.spacing.ml = ml;
  }

  @Input() set p(p: string) {
    this.flexProps.spacing.p = p;
  }
  @Input() set px(px: string) {
    this.flexProps.spacing.px = px;
  }
  @Input() set py(py: string) {
    this.flexProps.spacing.py = py;
  }
  @Input() set pt(pt: string) {
    this.flexProps.spacing.pt = pt;
  }
  @Input() set pr(pr: string) {
    this.flexProps.spacing.pr = pr;
  }
  @Input() set pb(pb: string) {
    this.flexProps.spacing.pb = pb;
  }
  @Input() set pl(pl: string) {
    this.flexProps.spacing.pl = pl;
  }

  flexProps: FlexProps = {
    flex: '',
    flexWrap: 'no-wrap',
    flexDirection: 'row',
    alignContent: 'normal',
    justifyContent: 'normal',
    alignItems: 'normal',

    dimensions: {
      width: '',
      maxWidth: '',
      height: '',
      maxHeight: '',
    },

    spacing: {
      m: '',
      mx: '',
      my: '',
      mt: '',
      mr: '',
      mb: '',
      ml: '',
      p: '',
      px: '',
      py: '',
      pt: '',
      pr: '',
      pb: '',
      pl: '',
    },
  };
}
