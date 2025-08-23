import React from 'react'

export default function Table() {
    return (
        <table className="table w-full">
            <thead>
                <tr>
                    <th>Order</th>
                    <th>Customer</th>
                    <th>Status</th>
                    <th className="text-right">Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>#1021</td>
                    <td>Emma</td>
                    <td><span className="badge badge-sm badge-info">Processing</span></td>
                    <td className="text-right">$129.00</td>
                </tr>
                <tr>
                    <td>#1020</td>
                    <td>Liam</td>
                    <td><span className="badge badge-sm badge-success">Completed</span></td>
                    <td className="text-right">$59.00</td>
                </tr>
                <tr>
                    <td>#1019</td>
                    <td>Olivia</td>
                    <td><span className="badge badge-sm badge-warning">Pending</span></td>
                    <td className="text-right">$39.00</td>
                </tr>
            </tbody>
        </table>
    )
}
