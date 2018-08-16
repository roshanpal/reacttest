import React, { Component } from 'react';
import _ from 'lodash';

const showVehicles = (props) => {
    return (
        <div>
            {_.map(props.vehicles, (ele, key) => {
                let total = ele.total_no;
                
                if (props.selectedVehicles[props.index] != ele.name){
                    total--;
                }

                return <div key={ele.name} >
                    {ele.name} ({total})
                    <input type="radio" name={'vehicle' + props.index} value={ele.name} onChange={e => props.selectVehicle(props.index, ele.name)}></input>
                </div>
            })}
        </div>
    );
}

export default (props) => {
    return (
        <div style={{ display: "inline-block", margin: 10 }}>
            <select onChange={e => props.selectCity(props.index, e.target.value)}>
                <option value="">Select</option>
                {_.map(props.cities, (ele) => {
                    if (props.selectedCities.includes(ele.name) && props.selectedCities[props.index] != ele.name) return;

                    return <option value={ele.name} key={ele.name}>{ele.name}</option>
                })}
            </select>
            {props.selectedCities[props.index] && showVehicles(props)}
        </div>
    )
}