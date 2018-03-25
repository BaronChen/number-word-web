import { reducer, initialState, State } from './text-input.reducer';
import { UpdateText, ClearText } from '../actions/text-input.actions';

describe('TextInput Reducer', () => {

  it('should return the initial state', () => {
    const action = {} as any;

    const result = reducer(initialState, action);

    expect(result).toBe(initialState);
  });

  it('should update text base on action', () => {
    const testText = 'one';
    const action = new UpdateText(testText);
    const result = reducer(initialState, action);

    expect(result).not.toEqual(initialState);
    expect(result.text).toBe(testText);
    
  });

  it('should clear number base on action', () => {
    const testState:State = {text: '1234'};
    const action = new ClearText();
    const result = reducer(testState, action);

    expect(result).not.toEqual(testState);
    expect(result.text).toBe('');
    
  });

});
