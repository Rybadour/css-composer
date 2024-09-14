import { ResponsiveBreakpoint } from "./types";

export const BREAKPOINT_MAP: Record<ResponsiveBreakpoint, string> = {
  sm: "480px",
  md: "680px",
  lg: "1080px",
} as const;