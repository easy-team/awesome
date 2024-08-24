import * as React from 'react';
import Counter from '../../src/component/counter';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('the count should be 1 when you click the increase button once', () => {
    // render
    const { getByTestId } = render(<Counter />);
    const increaseButton = getByTestId('increase-button');
    // act
    fireEvent.click(increaseButton);
    // assert
    expect(getByTestId('count-announcement')).toHaveTextContent('1');
});