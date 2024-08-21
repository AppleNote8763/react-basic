import React from 'react'
import './Example2.css';

interface Props {
    tableType: boolean;
    count: string;
    name: string;
    state?: string;
    attendance?: boolean;
}

function EmployeeInformation({ tableType, count, name, state, attendance }: Props) {

    if (tableType && state) {
        return(
            <div className='th'>
                <div className='td'>{count}</div>
                <div className='td'>{name}</div>
                <div className='td'>{state}</div>
            </div>
        )
    }
    if (!tableType) {
        return (
            <div className='tr'>
                    <div className='td'>{count}</div>
                    <div className='td'>{name}</div>
                    <div className='td' style={{color: attendance === true ? 'blue': 'red'}}>●</div>
            </div>
        )
    }
    return null;
}

export default function Example2prototype() {

    const employeeTop = {
        tableType: true,
        count: '사번',
        name: '이름',
        state: '출근상태'
    }

    const employee1 = {
        tableType: false,
        count: '202401',
        name: '홍길동',
        attendance: false
    }

    const employee2 = {
        tableType: false,
        count: '202404',
        name: '이영희',
        attendance: true
    }

    const employee3 = {
        tableType: false,
        count: '202403',
        name: '김철수',
        attendance: true
    }

    const employee4 = {
        tableType: false,
        count: '202404',
        name: '이름',
        attendance: false
    }

    return (
        <div className='table'>
            <EmployeeInformation {...employeeTop}/>
            <EmployeeInformation {...employee1}/>
            <EmployeeInformation {...employee2}/>
            <EmployeeInformation {...employee3}/>
            <EmployeeInformation {...employee4}/>
        </div>
    )
}
