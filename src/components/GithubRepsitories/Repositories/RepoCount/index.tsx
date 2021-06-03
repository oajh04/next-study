import { userInfo } from 'os';
import * as S from './styles';

export const RepoCount = ({user}) => {

    return (
        <>
            <S.RepoHeader>
                Repositories
                <S.RepoCount>
                    {user.public_repos}
                </S.RepoCount>
            </S.RepoHeader>
        </>
    )
}