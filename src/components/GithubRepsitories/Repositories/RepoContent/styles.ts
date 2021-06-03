import styled from '@emotion/styled';

export const RepoWrapper = styled.div`
    width: 100%;
    border-bottom: 1px solid #e1e4e8;
    padding: 24px 0;
    a{
        text-decoration: none;
    }
`

export const RepoDescription = styled.div`
    padding: 12px 0;
    margin: 0;
    font-size: 14px;
`

export const RepoName = styled.h2`
    margin: 0;
    color: #0366d6;
    font-size: 20px;
    display: inline-block;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
`

export const RepoLanguage = styled.div` 
    display: flex;
    margin: 0;
    font-size: 14px;
`

export const RepoCreateAt = styled.div`
    margin-left: 20px;
`