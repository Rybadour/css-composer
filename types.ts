export type FlexDirection = "column" | "row";

export type ResponsiveBreakpoint = "sm" | "md" | "lg";

export type FlexStyle = "display: flex" | `flex-direction: ${FlexDirection}`;
export type AnyStyle = FlexStyle;

export type ChildDirectness = "direct" | "all";

export type StyleBlock = {
  openingLine: string,
  styles: TopLevelStyle[],
};

export function isStyleBlock(style: TopLevelStyle): style is StyleBlock {
  return (style as StyleBlock).hasOwnProperty('openingLine');
}

export type TopLevelStyle = AnyStyle | StyleBlock;