import List from './List'
import './Transaction.css'

const Transaction = (props)=>{
    const {list} = props
    return (
        <div>
            <div>
                <h4>รายการที่บันทึก</h4>
            </div>
            <ul className = "list">
            {list.map((element)=>{
                return <List {...element} key = {element.id}/>
            })}
            </ul>
        </div>
    )
}

export default Transaction