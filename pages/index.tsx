import React, {useState} from 'react';
import Link from 'next/link';

const index = () => {
  const [nickName, setNickName] = useState<string>("");

  return (
    <div>
      username
      <input
        value={nickName}
        onChange={(e) => setNickName(e.target.value)} 
      />
      <p>{nickName}검색하기</p>
      <Link href={`/github/${nickName}`} >
        <a>검색하기</a>
      </Link>
    </div>
  )
}



export default index;