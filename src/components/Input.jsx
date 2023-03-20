import { useSelector, useDispatch } from 'react-redux';
import { changeFactCount } from '../redux/slices/factSlice';

export default function Input() {
  const inputValue = useSelector(state => state.factsCount);
  const dispatch = useDispatch();

  const handleChangeInput = evt => {
    let value = evt.target.value;
    
    if (value > 0 && value < 6) {
      dispatch(changeFactCount(value))
    } else {
      alert('Допустимое значение от 0 до 5');
    }
  }

  return (
    <input 
      type="number" 
      className="w-100 p-2 rounded border"
      value={inputValue}
      onChange={handleChangeInput}
    />
  )
}