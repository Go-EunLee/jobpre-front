import React, { useEffect, useState } from 'react';

const App = () => {
  const [message, setMessage] = useState(''); // 서버에서 받을 메시지를 저장할 상태

  useEffect(() => {
    // 컴포넌트가 마운트될 때 Spring 서버로 API 요청을 보냄
    fetch('http://localhost:8080/catch/save') // Spring 서버의 주소로 GET 요청
      .then((response) => response.text()) // 응답을 텍스트 형식으로 받음
      .then((data) => setMessage(data)) // 받은 데이터를 상태에 저장
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // 빈 배열로 설정하여 첫 렌더링 시 한 번만 실행

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Front Complete 11</h1>
      <h1 style={{ fontSize: '48px' }}>{message}</h1> {/* 응답받은 메시지를 크게 출력 */}
    </div>
  );
};

export default App;
