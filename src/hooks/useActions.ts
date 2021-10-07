import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { acitonCreators } from '../state';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(acitonCreators, dispatch);
};
