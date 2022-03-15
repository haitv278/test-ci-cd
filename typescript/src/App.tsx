import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getUser } from './api';
import { IUser } from './models';

interface DemoComponentProps2 {
  year: string;
  month?: Date | string;
}

interface DemoComponentProps {
  helloText: string;
  currentTime?: Date | string;
}

const DemoComponent: React.FC<DemoComponentProps> = ({helloText, currentTime }) => {
  return (
    <>
      <h1>{helloText}</h1>
      {
        currentTime && 
        <p>Bay gio la {typeof currentTime === "string" ? currentTime : currentTime?.toString()}</p>
    }
    </>
  );
}

const App: React.FC = () => {
  var dynamicObj1: DemoComponentProps & DemoComponentProps2 = {
    helloText: "abc",
    year: "2022"
  };

  var dynamicObj2: {
    [key: string | number]: number | string,
  } = {
    "1": 1,
    "2": 2
  };
  
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    getData();
    console.log(dynamicObj2["1"]);
    console.log(dynamicObj2["2"]);
  }, []);

  const getData = async () => {
    const response = await getUser();
    const data = response.data;
    setUsers(data);
  }
  return (
    <div className="App">
      <DemoComponent helloText='chao moi nguoi' 
      // currentTime={new Date()}
      // currentTime={"14/3/2022"}
      />
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(u => {
              return (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.name}</td>
                  <td>{u.username}</td>
                  <td>{u.email}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
