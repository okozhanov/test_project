import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    // withRouter
} from "react-router-dom";

export default function ProductDetails({location: {state}}) {

  return (
    <div>
      {JSON.stringify(state)}
      <Link to={'/products'}>all products</Link>
    </div>
  );
}