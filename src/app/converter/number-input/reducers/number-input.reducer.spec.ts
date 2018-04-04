import { reducer, initialState, State } from './number-input.reducer';
import { UpdateNumber, ClearNumber, SetNumberInputError } from '../actions/number-input.actions';

describe('NumberInput Reducer', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });

    it('should update number base on action', () => {
      const testNumber = '1234';
      const action = new UpdateNumber(testNumber);
      const result = reducer(initialState, action);

      expect(result).not.toEqual(initialState);
      expect(result.number).toBe(testNumber);
      
    });

    it('should clear number base on action', () => {
      const testState:State = {number: '1234', error: ''};
      const action = new ClearNumber();
      const result = reducer(testState, action);

      expect(result).not.toEqual(testState);
      expect(result.number).toBe('');
      
    });

    it('should set number input error base on action', () => {
      const testError = "testError";
      const testState:State = {number: '1234', error: ''};
      const action = new SetNumberInputError(testError);
      const result = reducer(testState, action);

      expect(result).not.toEqual(testState);
      expect(result.error).toBe(testError);
      
    });
});
