import styled, { css } from 'styled-components';

export const ButtonContainer = styled.div`
    width: calc(100% - 25px);
    display: grid;
    grid-auto-columns: auto;
    grid-auto-flow: column;
    align-self: center;
    align-content: center;
    flex-shrink: 0;
    border-radius: 18px;
    border: 1px solid #C5C5C5;
    background-color: #E9E9E9;
`;

export const InnerButton = styled.div<{ active: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #555555;
    border-radius: 15px;
    margin: 1px;
    font-size: 11px;
    cursor: pointer;
    padding: 0 ${25 / 2}px;
    ${({ active }) =>
    active &&
    css`
            font-weight: 700;
            background-color: #FBFBFB;
        `}
`;

export const LargeInnerButton = styled(InnerButton)`
    height: ${26 + 2 * 2}px;
`;