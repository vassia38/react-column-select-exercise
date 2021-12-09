import React from "react";
import OutputTable from "./OutputTable";
import SelectionMenu from "./SelectionMenu";
import raw from './testData.txt'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allText: [],
      filter: {}
    };
  }

  getData = () => {
    let filter = this.state.filter;
    fetch(raw)
        .then(r => r.text() )
        .then(text => {
            let arr = text.split('\r\n');
            console.log(filter);
            console.log('before: ' + arr);

            let filtered = arr.filter( (ln) => {
              let splitLn = ln.split(", "); // length 3
              let c = 0;
              for(let key in filter) {
                if( filter[key] != "" && filter[key] != splitLn[c] )
                  return false;
                ++c;
              }
              return true;
            });
            console.log('after: ' + filtered);
            this.setState({
              allText: filtered.slice(),
              filter: filter
            });
            let selections = document.querySelectorAll('select');
            selections.forEach( (sel) => {
              if(filter[sel.id] == "")
                sel.value = "Toate";
              else
                sel.value = filter[sel.id];
            });
        })
  }
  
  onChangeHandler = (e) => {
    let id = e.target.id, val = e.target.value;
    this.state.filter[id] = val === "Toate" ? "" : val;
    this.getData();
  }

  componentDidMount() {
    let selections = document.querySelectorAll('select');
    selections.forEach( (sel) => {
      sel.onchange = this.onChangeHandler;
      this.state.filter[sel.id] = sel.value === "Toate" ? "" : sel.value;
      console.log(this.state.filter);
    })
    this.getData();
  }

  render() {
    return (
      <div className="App">
        <SelectionMenu id = "selection-menu" text = {this.state.allText} />
        <OutputTable id = "output-table" text = {this.state.allText} />
      </div>
    );
  }
}

export default App;
