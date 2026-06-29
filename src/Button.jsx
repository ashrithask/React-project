import { useDispatch } from 'react-redux'
import { addMoney, removeMoney } from './store'

export default function Button() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(addMoney(5000))}>
        Add 1000
      </button>
      <button onClick={() => dispatch(removeMoney(5000))}>
        Remove 1000
      </button>
    </div>
  )
}