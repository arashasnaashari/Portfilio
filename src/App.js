import React from "react";
import Container from "./home/Container";
import Project from "./projectBlogChalenge/Project";
import Chalenge from "./projectBlogChalenge/Chalenge";
import Blog from "./projectBlogChalenge/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Container} />
        <Route path="/project" exact component={Project} />
        <Route path="/chalenge" exact component={Chalenge} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
