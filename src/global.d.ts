import { InterpolationWithTheme } from "@emotion/core";
import { string } from "prop-types";

declare module 'react' {
  interface Attributes {
    css?: InterpolationWithTheme<any>;
  }
}

declare module "*.png" {
  const value: string;
  export = value;
}

declare module "*.svg" {
  const value: string;
  export = value;
}