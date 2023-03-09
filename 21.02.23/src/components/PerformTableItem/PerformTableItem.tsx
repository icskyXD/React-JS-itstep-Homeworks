import { FC } from "react";
import { IStore } from "../../types";

const PerformTableItem: FC<IStore> = (props) => {
    
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.openTime}</td>
            <td>{props.closeTime}</td>
            <td>{props.DeliveryWay}</td>
            <td>{props.Special? "yes" : "no"}</td>
        </tr>
    );
};

export default PerformTableItem;