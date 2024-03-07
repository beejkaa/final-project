import Header from './Header.js';
import Nav from './Nav.js';
import Intro from './Intro.js';
import Main from './Main.js';
import Form from './Form.js';
import Footer from './Footer.js';
import Alert from './Alert.js';
import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";

function App() {
  return (
    
    <>
    <AlertProvider>
    <Header></Header>
    <Nav></Nav>
    <Intro></Intro>
    <Form></Form>
    <Footer></Footer>
    <Alert></Alert>
    </AlertProvider>
    </>  
  );
}

export default App;
