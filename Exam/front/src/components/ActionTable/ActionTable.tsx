import ActionTableRow from "../ActionTableRow/ActionTableRow";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import { fetchActions } from "../../slices/actionsSlice";

const ActionTable = () => {
  const dispatch = useAppDispatch();
  const actions = useAppSelector((state) => state.actions.data);
  
  useEffect(() => {
    dispatch(fetchActions());
  }, []);
  
  return (
    <table>
      <thead>
        <tr>
          <td>Type of Action</td>
          <td>Product Name</td>
          <td>Product Amount</td>
          <td>Product Price</td>
          <td>Overall</td>
          <td>Action Date</td>
        </tr>
      </thead>
      <tbody>
        {actions.map((action) => (
          <ActionTableRow {...action} />
        ))}
      </tbody>
    </table>
  );
};

export default ActionTable;
