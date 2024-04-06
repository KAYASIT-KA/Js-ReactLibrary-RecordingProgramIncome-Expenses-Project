import { useState,useEffect } from 'react' 
import './FormComponents.css'
import { v4 as uuidv4 } from 'uuid';

const FormComponents = (props) => {
    const [list,setlist] = useState("")
    const [amount,setamount] = useState("")
    const [formvalid,setformvalid] = useState(false) 
    const inputlist = (event) => {
        setlist(event.target.value)
    }
    const inputamount = (event) => {
        setamount(event.target.value)
    }
    const savelist = (event) => {
        event.preventDefault()
        const listdata = {
            id:uuidv4(),
            list:list,
            amount:Number(amount)
        }
        props.onAddList(listdata)
        setlist("")
        setamount("")
    }
    useEffect(() => {
        const checkdata = list.trim().length>0 && amount!== 0
        setformvalid(checkdata)
    },[list,amount])
    return(
        <div>
            <form onSubmit = {savelist}>
                <div>
                    <label>รายการ</label>
                    <input type = "text" placeholder = "ระบุรายการ" onChange = {inputlist} value = {list}/>
                </div>
                <div>
                    <label>จำนวนเงิน</label>
                    <input type = "number" placeholder = "ระบุจำนวนเงิน (+ รายรับ & - รายจ่าย)" onChange = {inputamount} value = {amount}/>
                </div>
                <div>
                    <button type = "submit" disabled = {!formvalid}>บันทึก</button>
                </div>
            </form>
        </div>        
    )
}

export default FormComponents