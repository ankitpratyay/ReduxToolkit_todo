import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addList, removeList } from "./redux/reducer/reducer";
import { AiOutlineDelete } from "react-icons/ai";


const AddItems = () => {
    const [inputList, setInputList] = useState([])
    const dispatch = useDispatch();
    const data = useSelector((store) => store.lists)
    console.log(data)
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addList(inputList))
        setInputList("")
    }
    const handleChange = (e) => {
        setInputList(e.target.value)
    }
    return (
        <div className="container">
            <h3>I am AddItems Component</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter List name" className="input" value={inputList} onChange={handleChange} /><br />
                <button className="button">ADD</button>
            </form>
            <hr style={{ margin: 2 }} className="horizontal" />
            <div>
                {data && data.map((list) => {
                    return (
                        <li className="listItems" key={list.id}>
                            {list.text} <AiOutlineDelete style={{ color: 'red', marginTop: 4 }} className="deletebutton" onClick={() => dispatch(removeList(list.id))} />
                        </li>
                    )
                })}
            </div>
        </div>
    )
}
export default AddItems;