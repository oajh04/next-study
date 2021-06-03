import * as S from './styles'
import formatDistance from '@/src/libs/function/formatDistance'

export const RepoContent = ({user, repos}) => {
    console.log(user)
    console.log(repos)

    return (
        <>
            {
                user && repos &&
                repos.map((repo) => (
                    <S.RepoWrapper key={repo.id}>
                        <a target="_blank"
                            rel="noreferrer"
                            href={`http://github.com/${user.login}/${repo.name}`}>
                            <S.RepoName>{repo.name}</S.RepoName>
                        </a>
                        <S.RepoDescription>{repo.description}</S.RepoDescription>
                        <S.RepoLanguage>
                            {repo.language || "none"}
                            <S.RepoCreateAt>
                                {formatDistance(repo.updated_at)}
                            </S.RepoCreateAt>
                        </S.RepoLanguage>
                    </S.RepoWrapper>
                ))
            }
        </>
    )
}