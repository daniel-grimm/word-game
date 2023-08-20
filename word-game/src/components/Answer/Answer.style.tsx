import styled from 'styled-components'

export const Box = styled.div<{ color: string }>`
    height: 30px;
    width: 30px;
    background-color: ${(props) => props.color}
`