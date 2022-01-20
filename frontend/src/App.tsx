import React from 'react';

import GlobalStyle from './styles/global';
import Header from './components/Header/Header';
import Form from './pages/FormUser/FormUser';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Form />
    </div>
  );
}

export default App;






// import React, { useEffect, useState } from 'react';
// import api from './services/api';

// import User from './components/User';

// interface IUser {
//   name: string;
//   email?: string;
// }

// function App() {

//   const [users, setUsers] = useState<IUser[]>([]);

//   useEffect(() => {
//     api.get<IUser[]>('/users').then(resp => {
//       setUsers(resp.data)
//     })
//   }, []);

//   return (
//     <div className="App">
//       { users.map(user => <User key={user.email || 'Não possui e-mail'} user={user} />) }
//     </div>
//   );
// }

// export default App;