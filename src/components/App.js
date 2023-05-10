import { useEffect, useState } from 'react';
import Editor from './Editor';
import EditorsContainer from './EditorsContainer';
import useLocalStorage from '../hooks/useLocalStorage';
import PageView from './PageView';

function App() {

  const [ html, setHtml ]     = useLocalStorage( 'html', '' ) 
  const [ css, setCss ]       = useLocalStorage( 'css', '' ) 
  const [ js, setJs ]         = useLocalStorage( 'js', '' ) 

  const [ srcDoc, setSrcDoc ] = useState( '' )

  useEffect( () => {

    const timeout = setTimeout( () => {

      setSrcDoc( `<html>${ html }</html> <style>${ css }</style> <script>${ js }</script>` )

    }, 250)
   
    return () => clearTimeout( timeout )

  },[ html, css, js ] )
  
  

  return (
    <>
      <EditorsContainer className='pane top-pane' display="flex" gap="1vw">

        <Editor language='xml' title='HTML' value={ html } onChange={ setHtml }/>
        <Editor language='css' title='CSS' value={ css } onChange={ setCss }/>
        <Editor language='javascript' title='JS' value={ js } onChange={ setJs }/>

      </EditorsContainer >

      <PageView srcDoc={ srcDoc }/>
    </>
   
  );
}

export default App;
