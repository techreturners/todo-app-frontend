import React from 'react';
import { render } from '@testing-library/react';

import Task from './Task';

describe('Task component', () => {
    test(`
        Given the required props,
        When the component is rendered,
        Then it should render the task text    
    `, () => {
        const exampleText = 'This is a test task';

        const requiredProps = {
            task: {
                taskDescription: exampleText,
                completed: false
            }
        }

        const { getByText } = render(<Task { ...requiredProps }/>)
        expect(getByText(exampleText)).toBeTruthy();
    })

    test(`
        Given the required props,
        When the component is rendered,
        Then it should not render a delete button    
    `, () => {
        const requiredProps = {
            task: {
                taskDescription: 'This is a test task',
                completed: true
            }
        }

        const { getAllByRole } = render(<Task { ...requiredProps }/>)
        expect(getAllByRole('button').find(button => button.textContent === 'DELETE')).toBeTruthy();
    })

    test(`
        Given the required props for an incomplete task,
        When the component is rendered,
        Then it should render a done button    
    `, () => {
        const incompleteTask = {
            task: {
                taskDescription: 'This is a test task',
                completed: false
            }
        }

        const { getAllByRole } = render(<Task { ...incompleteTask }/>)
        expect(getAllByRole('button').find(button => button.textContent === 'DONE')).toBeTruthy();
    })

    test(`
        Given the required props for a complete task,
        When the component is rendered,
        Then it should not render a done button    
    `, () => {
        const completeTask = {
            task: {
                taskDescription: 'This is a test task',
                completed: true
            }
        }

        const { getAllByRole } = render(<Task { ...completeTask }/>)
        expect(getAllByRole('button').find(button => button.textContent === 'DONE')).toBeFalsy();
    })
})
