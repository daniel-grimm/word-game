import styled from "styled-components"
import { theme } from "./theme"

export const MainLayout = styled.main`
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 100vh - 8px;
    align-items: center;
    flex-direction: column;
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid;
    border-color: ${theme.white};
    width: 70%;
    height: 70%;
    max-width: 1000px;
    max-height: 700px;
    min-width: 300px;
    min-height: 100px;
`