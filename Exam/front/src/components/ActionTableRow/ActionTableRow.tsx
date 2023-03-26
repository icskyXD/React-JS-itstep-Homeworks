import { IAction } from "../../types"
import { FC } from "react"

const OperationTableRow: FC<IAction> = (props) => {
    return(
        <tr>
            <td>{props.type}</td>
            <td>{props.name}</td>
            <td>{props.type === "delete" ? "---" : props.product_amount}</td>
            <td>{props.type === "delete" ? "---" : props.summary}</td>
            <td>{props.type === "delete" ? "---" : props.product_amount * props.summary}</td>
            <td>{props.date.toString()}</td>
        </tr>
    )
}

export default OperationTableRow