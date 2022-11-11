import React from 'react';
import './ExpenseDate.css'

const ExpenseDate = (props) => {
    // console.log(props)
    // const month = props.date.toLocalString('en-US', { month: 'long' });
    // const year = props.date.getFullYear();
    // const day = props.date.toLocalString('en-US', { date: '2-digit' });

    return (
        <div>
            {/* 
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div> */}

            <div className='expense-date'>
                <h2>{props.date.toLocaleString('en-US')}</h2>
            </div>
        </div>
    );
}

export default ExpenseDate;