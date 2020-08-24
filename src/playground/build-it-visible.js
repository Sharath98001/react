class Visibility extends React.Component{
    constructor(props){
       super(props)
       this.handleToggle = this.handleToggle.bind(this)
       this.state ={
           visibility: false
       }
    }
    handleToggle(){
       this.setState((prevState)=>{
          return{ 
              visibility : !prevState.visibility
          }
       })
    }
    render(){
        return (
            <div>
              <h1>Visibility</h1>
              <button onClick={this.handleToggle}>{this.state.visibility ? 'hide details' : 'show details' }</button>
              {
                  this.state.visibility && <p>This is some text</p>
              }
            </div>
        )
    }
}

ReactDOM.render(<Visibility />,document.getElementById('app'))

// let visibility = false

// const toggle =()=>{
//      visibility= !visibility
//     render()
// }

// const root = document.getElementById('app')

// const render =()=>{
//     const template = (
//         <div>
//            <h1>Visibility Toggle</h1>
//            <button onClick={toggle}>{visibility? 'hide details':'show details'}</button>
//             {
//                 visibility && <p>This is some text</p>
//             }
//         </div>
//     )

//     ReactDOM.render(template,root)
// }

// render()