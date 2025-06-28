import React from 'react';
import { marked } from 'marked';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      text: '# Welcome\n## This is my Markdown Previewer\n### Anything you write in the `textarea` above will be previewed into this `p`\n\n~~~javascript\n// this is multi-line code:\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == "```" && lastLine == "```") {\n    return multiLineCode;\n  }\n}\n~~~\n\n1. First item\n2. Second item\n3. Third item\n4. Fourth item\n\n> "Insert A Quote Here"\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n**also you can bold** and add [links](https://www.freecodecamp.org)',
      html:''
    }
    this.parse = this.parse.bind(this);
    this.firstParse = this.firstParse.bind(this);
  }
  componentDidMount(){
    this.firstParse()
  }
  firstParse(){
    marked.setOptions({
      breaks: true
    })
    let markdown = marked.parse(this.state.text);
    this.setState({
      html: markdown
    })
  }
  parse(event){
    marked.setOptions({
      breaks: true
    })
    let markdown = marked.parse(event.target.value);
    this.setState({
      text: event.target.value,
      html: markdown
    })
  }
  render(){
    return(
      <div className="container">
        <textarea className="form-control form-control-lg textarea" onChange={this.parse} id="editor" value={this.state.text} rows="6"></textarea>
        <div className="card">
          <div className="card-body">
             <p dangerouslySetInnerHTML={{ __html: this.state.html }} id="preview"></p>
          </div>
        </div>
      </div>
    );
  }
}

export default App