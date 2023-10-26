import { Component, Input } from '@angular/core';
import {
  DimensionProps,
  FlexPositionProps,
  FlexProps,
  SpacingProps,
} from './types';

@Component({
  selector: 'flex',
  templateUrl: './flex.component.html',
  styleUrls: [],
})
export class FlexComponent {
  @Input() set flexPosition(flexPosition: FlexPositionProps) {
    this.flexProps.flexPosition = flexPosition;
  }
  @Input() set flex(flex: FlexPositionProps) {
    this.flexProps.flexPosition = flex;
  }
  @Input() set dimensions(dimensions: DimensionProps) {
    this.flexProps.dimensions = dimensions;
  }

  @Input() set spacing(spacing: SpacingProps) {
    this.flexProps.spacing = spacing;
  }

  flexProps: FlexProps = {
    flexPosition: {
      flexDirection: 'row',
      flexWrap: 'no-wrap',
      alignContent: 'normal',
      justifyContent: 'normal',
      alignItems: 'normal',
    },
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
