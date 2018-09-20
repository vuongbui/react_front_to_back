import React, {Component} from 'react';
import update from 'immutability-helper';

class Vuong extends Component {
    render () {
        const state1 = [{id: 1, name: "Vuong"}, {id: 2, name: "Mai"}]
        const state2 = update(state1, {$push: [{id: 3, name: "Sam"}]})
        const state3 = update(state2, {$apply: () => state2.filter(item => item !== 2)})
        console.log(state3)
        return (
            <div>{typeof state3}</div>
        )
    }
}

export default Vuong;