import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './comonents/Header';
import Footer from './comonents/Footer';
import HomeScreen from './screens/HomeScreen';
const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
};
//function App() {
//  return (
//    <>
//    <h1>WElcome To MERN app </h1>
//    </>
//  );
//}

export default App;
