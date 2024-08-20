import React from 'react'
import './Example2.css';

interface Props {
    tableType: boolean;
    count?: number;
    name?: string;
    attendance?: boolean;
}

function EmployeeInformation({ tableType, count, name, attendance }: Props) {

    if (tableType === true) {
        return(
            <div className='th'>
                <div className='td'>사번</div>
                <div className='td'>이름</div>
                <div className='td'>출근상태</div>
            </div>
        )
    }
    return (
        <div className='tr'>
                <div className='td'>{count}</div>
                <div className='td'>{name}</div>
                <div className='td' style={{color: attendance === true ? 'red': 'blue'}}>●</div>
        </div>
    )
}

export default function Example2() {

    const informationTop = {
        tableType: true,
    }

    const information1 = {
        tableType: false,
        count: 202401,
        name: '홍길동',
        attendance: true
    }

    const information2 = {
        tableType: false,
        count: 202404,
        name: '이영희',
        attendance: false
    }

    const information3 = {
        tableType: false,
        count: 202403,
        name: '김철수',
        attendance: false
    }

    const information4 = {
        tableType: false,
        count: 202404,
        name: '이름',
        attendance: true
    }

    return (
        <div className='table'>
            <EmployeeInformation {...informationTop}/>
            <EmployeeInformation {...information1}/>
            <EmployeeInformation {...information2}/>
            <EmployeeInformation {...information3}/>
            <EmployeeInformation {...information4}/>
        </div>
    )
}
