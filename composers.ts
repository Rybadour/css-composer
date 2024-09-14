import { BREAKPOINT_MAP } from "./defaults";
import { AnyStyle, ChildDirectness, FlexDirection, FlexStyle, isStyleBlock, ResponsiveBreakpoint, StyleBlock, TopLevelStyle } from "./types";

export type ComposeStyle = AnyStyle[] | TopLevelStyle;

export function compose(...styles: ComposeStyle[]): string {
  return innerCompose(0, styles.flat());
}

function innerCompose(indent: number, styles: TopLevelStyle[]): string {
  const tabs = '\t'.repeat(indent);
  let cssCode = '';

  for (let s of styles) {
    if (isStyleBlock(s)) {
      cssCode += ' \n';
      cssCode += tabs + s.openingLine + '\n';
      cssCode += innerCompose(indent + 1, s.styles);
      cssCode += tabs + '}\n';
    } else {
      cssCode += tabs + s + ';\n';
    }
  }

  return cssCode;
}

export function flex(direction: FlexDirection): FlexStyle[] {
  return ['display: flex', `flex-direction: ${direction}`];
}

export function breakAt(size: ResponsiveBreakpoint, ...styles: ComposeStyle[]): StyleBlock {
  return {
    openingLine: `@media screen only and (max-width: ${BREAKPOINT_MAP[size]}) {`,
    styles: styles.flat(),
  };
}

// Creates a CSS block matching child nodes
export function children(directness: ChildDirectness, ...styles: ComposeStyle[]): StyleBlock {
  return {
    openingLine: `.foo ${directness === 'direct' ? '>' : ''} {`,
    styles: styles.flat(),
  };
}

// This should be doable?
function rdsTyp(typography: "body" | "label", size: 12 | 14 | 16) {
  return [
    "font-size: 12px",
    "font-weight: 500",
  ]
}

//tw(breakAt("sm", rdsTyp("body", 12)))

// Consider doing it Runtime like StyledComponents
// Maybe some convenient way to do compile time manually?