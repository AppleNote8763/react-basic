import React from 'react'
import './Example2.css';

interface TableRowProps {
    employeeNumber: string;
    employeeName: string;
    workState: boolean;
}

function TableHeder() {
    return(
        <div className='th'>
            <div className='td'>사번</div>
            <div className='td'>이름</div>
            <div className='td'>출근상태</div>
        </div>
    )
}

function TableRow({ employeeNumber, employeeName, workState }: TableRowProps) {

    const color = workState === true ? 'blue': 'red';

    return (
        <div className='tr'>
                <div className='td'>{employeeNumber}</div>
                <div className='td'>{employeeName}</div>
                <div className='td' style={{color: color}}>●</div>
        </div>
    )
}

interface TableDataTrProps {
    type: 'tr';
    employeeNumber: string;
    employeeName: string;
    workState: boolean;
}

interface TableDataThProps {
    type: 'th';
}

function TableData(props: TableDataTrProps | TableDataThProps) {

    const {type} = props

    if (type === 'th') {
        return (
            <div className='th'>
            <div className='td'>사번</div>
            <div className='td'>이름</div>
            <div className='td'>출근상태</div>
        </div>
        )
    }

    const {employeeNumber, employeeName, workState} = props
    const color = workState === true ? 'blue': 'red';

    return (
        
        <div className='tr'>
                <div className='td'>{employeeNumber}</div>
                <div className='td'>{employeeName}</div>
                <div className='td' style={{color: color}}>●</div>
        </div>
    )

}

export default function Example2() {

    const employee1 = {
        employeeNumber: '202401',
        employeeName: '홍길동',
        workState: false
    }

    const employee2 = {
        employeeNumber: '202404',
        employeeName: '이영희',
        workState: true
    }

    const employee3 = {
        employeeNumber: '202403',
        employeeName: '김철수',
        workState: true
    }

    const employee4 = {
        employeeNumber: '202404',
        employeeName: '이름',
        workState: false
    }

    return (
        <div className='table'>
            {/* <TableHeder />
            <TableRow {...employee1} />
            <TableRow {...employee2} />
            <TableRow {...employee3} />
            <TableRow {...employee4} /> */}

            {/* <TableData type='th' />
            <TableData type='tr' {...employee1} />
            <TableData type='tr' {...employee2} />
            <TableData type='tr' {...employee3} />
            <TableData type='tr' {...employee4} /> */}

            <TableHeder />
            {employees.map((employee, index) => <TableRow key={index} {...employee} />)}
        </div>
    )
}

const employees = [
    {
        employeeNumber: '202401',
        employeeName: '홍길동',
        workState: false
    },
    {
        employeeNumber: '202404',
        employeeName: '이영희',
        workState: true
    },
    {
        employeeNumber: '202403',
        employeeName: '김철수',
        workState: true
    },
    {
        employeeNumber: '202404',
        employeeName: '이름',
        workState: false
    }
]