import React, { Component } from 'react';
import './App.css';
import TopNav from './components/TopNav';
import BookList from './components/BookList';
import Cart from './components/Cart';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {

  render() {
    return (
      <div className="App">
        <TopNav />
        <Container>
         <Row>
           <Col>
            <BookList />
          </Col>
           <Col>
            <Cart />
           </Col>
         </Row>
       </Container>
      </div>
    );
  }
}

export default App;
