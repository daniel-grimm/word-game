import styled from 'styled-components'

export const Box = styled.div<{ color: string }>`
    display: flex;
    align-items: center;
    justify-contents: center;
    height: 30px;
    width: 30px;
    background-color: ${(props) => props.color};

`