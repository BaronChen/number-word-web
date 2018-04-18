import * as fromMyReducers from './';
import { ConversionType } from '../convert-buttons/models';

describe('converter Selectors', () => {

  const testState = {
    numberInput: {
      number: '1234',
      error: 'test_error'
    },
    result: {
      result: 'test_result'
    },
    convertButtons: {
      conversionType: ConversionType.numberToText
    }
  }

  it('Should be able to get numberInput state', () => {
    expect(fromMyReducers.getNumberInputState.projector(testState)).toBe(testState.numberInput);
  });

  it('Should be able to get numberInput number state', () => {
    expect(fromMyReducers.getNumber.projector(testState.numberInput)).toBe(testState.numberInput.number);
  });

  it('Should be able to get numberInput error state', () => {
    expect(fromMyReducers.getNumberInputError.projector(testState.numberInput)).toBe(testState.numberInput.error);
  });

  it('Should be able to get result state', () => {
    expect(fromMyReducers.getResultState.projector(testState)).toBe(testState.result);
  });

  it('Should be able to get result result state', () => {
    expect(fromMyReducers.getResult.projector(testState.result)).toBe(testState.result.result);
  });

  it('Should be able to get convertButtons state', () => {
    expect(fromMyReducers.getConverButtonsState.projector(testState)).toBe(testState.convertButtons);
  });

  it('Should be able to get convertButtons conversionType state', () => {
    expect(fromMyReducers.getConversionType.projector(testState.convertButtons)).toBe(testState.convertButtons.conversionType);
  });

});