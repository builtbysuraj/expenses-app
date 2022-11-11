import React from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {
    return (
        <Card className='expenses'>
            <h2>Added Expense:</h2>
            {
                props.item.map(
                    expense =>(
                        <ExpenseItem
                            date={expense.date}
                            title={expense.title} //or, "Food"  
                            amount={expense.amount} />
                    )
                )
            }
            {/* <ExpenseItem
                date={props.item[1].date}
                title={props.item[1].title} //or, "Food"  
                amount={props.item[1].amount} />

            <ExpenseItem
                date={props.item[2].date}
                title={props.item[2].title} //or, "Food"  
                amount={props.item[2].amount} />

            <ExpenseItem
                date={props.item[3].date}
                title={props.item[3].title} //or, "Food"  
                amount={props.item[3].amount} /> */}
        </Card>
    )

}

export default Expenses