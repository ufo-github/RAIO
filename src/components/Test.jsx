import React, {Component} from 'react';


/* import {PM} from './IM/PM'; */

import {MM} from './IM/MM';


import {CRMS} from './CRM_Search';

// index.jsx

// import moduleName from 'module';
// imp + Tab

import {FUFM} from '../Ant_Components/fold-unfold-menu';

import {NAL}from './NewAppLayout';

class TestItem extends Component {
    render() {
        return (
            <div>
                <a href="#">TestItem</a>
                {/* <ModalName /> */}
                {/* <PM /> */}
                {/* <NAL /> */}
                {/* <FUFM /> */}
                {/* <MM /> */}
                <CRMS />
            </div>
        );
    }
}

export default TestItem;