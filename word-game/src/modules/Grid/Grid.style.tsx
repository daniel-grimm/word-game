import styled from 'styled-components'
import { theme } from '../../theme'

export const UserInput = styled.div`
    display: flex;
    flex-direction: column;
`

export const Guess = styled.input``

export const Submit = styled.button`
    border: none;
    border-radius: 10px;
    background-color: ${theme.green}

`

export const PlayAgain = styled.button`
    border: none;
    border-radius: 10px;
    background-color: ${theme.purple}

`

export const Form = styled.div`
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2px;
`

export const Error = styled.div`
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: center;
`