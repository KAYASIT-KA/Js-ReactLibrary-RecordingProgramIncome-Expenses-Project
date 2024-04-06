import { useContext } from "react";
import DataContext from "./deta/DataContext";
import './RepoetComponents.css'

const ReportComponents = () => {
    const {income, expenes} = useContext(DataContext)
    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return(
        <div>
            <div>
                <h3>ยอดคงเหลือ : ฿{formatNumber((income-expenes).toFixed(2))}</h3>
            </div>
            <div className="reportcotainer">
                <div>
                    <h4>รายรับ</h4>
                    <p className="reportin">฿{formatNumber((income).toFixed(2))}</p>
                </div>
                <div>
                    <h4>รายจ่าย</h4>
                    <p className="reportex">฿{formatNumber((expenes).toFixed(2))}</p>
                </div>
            </div>
        </div>
    )
}

export default ReportComponents