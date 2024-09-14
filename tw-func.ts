

// Idea: Maybe these should just be lines of CSS instead of some other abtract thing. Could make the "tw" function easier to implement
type TWFlexDirection = "column" | "row";
type TWFlex = "flex" | `flex-direction-${TWFlexDirection}`;

type TWComposer = TWFlex;

type TWScreen = [
  "sm" | "md",
  TWComposer[]
];

type TWTopLevel = TWComposer | TWScreen;

function tw(...composers: (TWTopLevel[] | TWTopLevel)[]) {

}

function flex(direction: TWFlexDirection): TWFlex[] {
  return ['flex', `flex-direction-${direction}`];
}

function breakAt(size: "sm" | "md", ...composers: TWComposer[][]): TWScreen {
  return [size, composers.flat()];
}

// Creates a CSS block matching child nodes
function children(directness: "direct" | "all", ...composers: TWComposer[][]): TWChildren {
  
}

tw(breakAt("sm", flex(true ? 'column' : 'row')))

// This should be doable?
function rdsTyp(typography: "body" | "label", size: 12 | 14 | 16) {
  return [
    "font-size: 12px",
    "font-weight: 500",
  ]
}

tw(breakAt("sm", rdsTyp("body", 12)))

// Consider doing it Runtime like StyledComponents
// Maybe some convenient way to do compile time manually?