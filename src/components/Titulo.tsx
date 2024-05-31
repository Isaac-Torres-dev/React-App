function Titulo() {
    const nombreComponent = 'Table 1'
    if (nombreComponent) {
      return <h1>Rate Table Component {nombreComponent}</h1>
    }
    return <h1>Rate Table Component TableDefault</h1>
  }
  
  export default Titulo;