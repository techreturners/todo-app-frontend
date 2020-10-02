import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import TaskInput from './TaskInput';

describe('Task Input component', () => {
    test(`
    Given the component is rendered,
    When the text is input in to the input field,
    Then the value of the field should be updated
    `, () => {
        const addTaskFn = jest.fn();
        const exampleTaskText = 'This is an example task';

        const { getByRole } = render(<TaskInput addTask={ addTaskFn }/>)
        userEvent.type(getByRole('textbox'), exampleTaskText)
        expect(getByRole('textbox')).toHaveValue(exampleTaskText);
    })

    test(`
    Given the component is rendered,
    When the add task button is clicked,
    Then the add task function should be called with the task text
    `, () => {
        const addTaskFn = jest.fn();
        const exampleTaskText = 'This is an example task';

        const { getByRole } = render(<TaskInput addTask={ addTaskFn }/>)
        userEvent.type(getByRole('textbox'), exampleTaskText)
        userEvent.click(getByRole('button'))
        expect(addTaskFn).toHaveBeenCalledWith(exampleTaskText);
    })
})