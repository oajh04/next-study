import React , {FC} from 'react'
import * as S from './styles';
import {GoMail, GoOrganization, GoLink, GoLocation} from 'react-icons/go'

export const UserProfile = ({userData}) => {
    const user = userData;

    return (
        <>
            <S.UserProfileBox>
                <S.UserProfileImageWrapper>
                    <S.UserProfileImage src={user.avatar_url} alt={`${user.name} 프로필 이미지`} />
                </S.UserProfileImageWrapper>

                <S.UserProfileUserName>{user.name}</S.UserProfileUserName>
                <S.UserProfileLogin>{user.login}</S.UserProfileLogin>
                <S.UserProfileBio>{user.bio}</S.UserProfileBio>

                <S.UserProfileInfo>
                    <GoOrganization size={16} color="6e737d" />
                    <span>{user.company}</span>
                </S.UserProfileInfo>

                <S.UserProfileInfo>
                    <GoLocation size={16} color="6e737d" />
                    <span>{user.location}</span>
                </S.UserProfileInfo>

                <S.UserProfileInfo>
                    <GoMail size={16} color="6e737d" />
                    <span>{user.email}</span>
                </S.UserProfileInfo>

                <S.UserProfileInfo>
                    <GoLink size={16} color="6e737d" />
                    <span>{user.blog}</span>
                </S.UserProfileInfo>
            </S.UserProfileBox>
        </>
    )
}