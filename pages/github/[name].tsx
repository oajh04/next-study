import styled from '@emotion/styled'
import { UserProfile, RepoContent, RepoCount } from "@/src/components/GithubRepsitories";

const UserContentWrapper = styled.div`
    display: flex;
    padding: 20px;
`

const RepoWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  padding: 0px 16px;
`

const Github = ({user, repos}) => {
  console.log(user)
  console.log(repos)
  if(!user){
    return null;
  }

  return (
    <>
      <UserContentWrapper>
        <UserProfile userData={user}/>
        <RepoWrapper>
          <RepoCount user={user}/>
          <RepoContent user={user} repos={repos} />
        </RepoWrapper>
      </UserContentWrapper>
    </>
  )
}

export const getServerSideProps = async ({query}) => {
  const {name} = query;
  console.log(name)

  try {
    let user;
    let repos

    const userRes = await fetch(`https://api.github.com/users/${name}`);
    if(userRes.status === 200) {
      user=await userRes.json();
    }
    const repoRes = await fetch(`https://api.github.com/users/${name}/repos?sort=updated&page=1&per_page=10`);
    if(repoRes.status === 200){
      repos = await repoRes.json();
    }
    return { props: {user, repos}};
  } catch(e){
    console.log(e);
    return {props: {}};
  }
}

export default Github;