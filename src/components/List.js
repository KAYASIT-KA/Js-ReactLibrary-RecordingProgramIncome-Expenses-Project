import PropTypes from 'prop-types';
import './List.css'
import DataContext from './deta/DataContext';

const List =(props)=>{
    const {list, amount} = props
    const status = amount<0 ? "expense":"income" 
    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <li className={status}>{list}<span>{formatNumber((amount).toFixed(2))}</span></li>
    )
}

List.prototype = {
    namelist:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}

export default List