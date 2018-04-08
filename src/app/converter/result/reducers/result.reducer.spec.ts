import { reducer, initialState, State } from './result.reducer';
import { UpdateResult, ClearResult} from '../actions/result.actions';

describe('Result Reducer', () => {

  it('should return the initial state', () => {
    const action = {} as any;

    const result = reducer(initialState, action);

    expect(result).toBe(initialState);
  });

  it('should update result base on action', () => {
    const resultText = 'one';
    const action = new UpdateResult(resultText);
    const result = reducer(initialState, action);

    expect(result).not.toEqual(initialState);
    expect(result.result).toBe(resultText);
    
  });

  it('should clear number base on action', () => {
    const testState:State = {result: '1234'};
    const action = new ClearResult();
    const result = reducer(testState, action);

    expect(result).not.toEqual(testState);
    expect(result.result).toBe('');
    
  });

});
