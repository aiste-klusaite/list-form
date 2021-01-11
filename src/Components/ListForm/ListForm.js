import React, { useState } from 'react';
import data from '../../assets/data/data.json';
import Button from '../Button/Button';
import { currencyChange } from '../../assets/functions/currency';
import { dateChange } from '../../assets/functions/date';
import './style.css';

const ListForm = () => {
    const [state, setState] = useState({
        tableData: data
    });

    function compareData(type) {
        return function (a, b) {
            if (a[type] < b[type]) {
                return -1;
            } else if (a[type] > b[type]) {
                return 1;
            } else {
                return 0;
            }  
        };
    }

    function sortTableHandler(type) {
        let tableArray = [...state.tableData];
        tableArray.sort(compareData(type));
        setState({tableData: tableArray});
      }
        
    return (
        <div className="list-form">
            <header>Product</header>
            <div className="list-form__buttons">
                <Button btnType="Success">+ Create New</Button>
                <Button btnType="Danger">Delete</Button>
            </div>
            <div className="list-form__table">
                <table style={{width: '100%'}} cellSpacing="0" cellPadding="0">
                    <thead>
                        <tr>
                            <th />
                            <th>
                                <button 
                                    type="button" 
                                    className="th-button" 
                                    onClick={() => sortTableHandler('id')}
                                >ID</button>
                            </th>
                            <th>
                                <button 
                                    type="button"
                                    className="th-button" 
                                    onClick={() => sortTableHandler('name')}
                                >Product name</button>
                            </th>
                            <th>
                                <button 
                                    type="button" 
                                    className="th-button" 
                                    onClick={() => sortTableHandler('categories')}
                                >Categories</button>
                            </th>
                            <th>
                                <button 
                                    type="button" 
                                    className="th-button" 
                                    onClick={() => sortTableHandler('price')}
                                >Price</button>
                            </th>
                            <th>
                                <button 
                                    type="button" 
                                    className="th-button" 
                                    onClick={() => sortTableHandler('creationDate')}
                                >Creation date</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {state.tableData.map((dataDetails) => {
                        return (
                            <tr key={dataDetails.id}>
                                <td><input type='checkbox'/></td>
                                <td>{dataDetails.id}</td>
                                <td>{dataDetails.name}</td>
                                <td>{dataDetails.categories}</td>
                                <td>{currencyChange(dataDetails.currency, dataDetails.price)}</td>
                                <td>{dateChange(dataDetails.creationDate)}</td>
                            </tr>
                        ); 
                      })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListForm;