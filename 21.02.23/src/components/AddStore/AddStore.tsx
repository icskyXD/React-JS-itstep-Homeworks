const AddStore = () => {
    
    const showData: any = (data: Object, e: any) => {
        e.target.preventDefault()
    } 

    return (
        <div>
            <h2>Add store</h2>
            <form action="" onClick={showData}>
                <label>Name: <input type="text"/></label>
                <label>Open Time: <input type="time"/></label>
                <label>Close Time</label>
                <input type="number"/>
                <label>Delivery distance</label>
                <input type="number"/>
                <label>Special</label>
                <input type="checkbox"/>
                <input type="submit" value="create" />
            </form>
        </div>
    )
}

export default AddStore;