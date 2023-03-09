import { FC } from "react"
import { IStore } from "../../types"
import PerformTableItem from "../PerformTableItem/PerformTableItem"
import "./PerformTable.css"

interface IStoreInterf {
    stores: IStore[]
}

const PerformTable: FC<IStoreInterf> = ({stores}) => {

    return (
        <div>
            <h1>Shops</h1>
            <table>
            <thead>
                <tr>
                    <th>Shop Name</th>
                    <th>Open Time</th>
                    <th>Close Time</th>
                    <th>Delivery Time</th>
                    <th>Special?</th>
                </tr>
            </thead>
            <tbody>
                {stores.map(store => <PerformTableItem key={store.id}  {...store} />)}
            </tbody>
        </table>
        </div>
    )
}

export default PerformTable;