import { InterpolationWithTheme } from "@emotion/core";

declare module 'react' {
  interface Attributes {
    css?: InterpolationWithTheme<any>;
  }
}
