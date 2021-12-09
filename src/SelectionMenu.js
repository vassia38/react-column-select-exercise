import React from "react";

class SelectionMenu extends React.Component {
    
    render(){
        let arr = this.props.text, set1 = new Set(), set2 = new Set(), set3 = new Set();
        arr.forEach( (ln) => {
            let elems = ln.split(', ');
            set1.add(elems[0]);
            set2.add(elems[1]);
            set3.add(elems[2]);
        })
        let optionsCreate = (set) => {
            arr = Array.from(set);
            return arr.map(
                (el, i) => {
                    return (<option key={i}>{el}</option>)
                }
            )
        }
        return (
            <div id = {this.props.id}>
                <select name="column 1" id="sel-1">
                    <option>Toate</option>
                    {optionsCreate(set1)}
                </select>
                <select name="column 2" id="sel-2">
                    <option>Toate</option>
                    {optionsCreate(set2)}
                </select>
                <select name="column 3" id="sel-3">
                    <option>Toate</option>
                    {optionsCreate(set3)}
                </select>
            </div>
        )
    }
}

export default SelectionMenu