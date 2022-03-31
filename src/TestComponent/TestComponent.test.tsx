import { fireEvent, render, waitFor } from '@testing-library/react';

import TestComponent from "./index";

test('should update override', async (): Promise<void> => {
  const { findByTestId, findByText } = render(
    <TestComponent />
  );

  const overrideSelectCountryComponent = await findByTestId(
    'override-select-country'
  );

  await waitFor((): any =>
    expect(overrideSelectCountryComponent).not.toBeNull()
  );

  const selectCountry =
    overrideSelectCountryComponent.firstElementChild as Element;

  fireEvent.mouseDown(selectCountry);

  const option = await findByText('Guam');

  fireEvent.click(option);
});
