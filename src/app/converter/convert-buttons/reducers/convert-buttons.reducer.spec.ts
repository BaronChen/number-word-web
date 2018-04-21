import { reducer, initialState } from './convert-buttons.reducer';
import * as actions from '../actions/convert-buttons.actions';
import { ConversionType } from '../models'

describe('ConvertButtons Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('Convert action', () => {
    it('should return the initial state', () => {
      const action = new actions.Convert();

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('Convert action', () => {
    it('should return the new state with new conversiontype', () => {
      let testConversionType = ConversionType.textToNumber;

      const action = new actions.UpdateConversionType(testConversionType);

      const result = reducer(initialState, action);

      expect(result).not.toBe(initialState);
      expect(result.conversionType).toBe(testConversionType);
    });
  });


});
