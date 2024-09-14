import { breakAt, children, compose, flex } from "./composers";

console.log(compose(
  flex('column'),
  breakAt('sm', 
    flex('row'),
    children('direct', flex('column'))
  )
));