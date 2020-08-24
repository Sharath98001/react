console.log('App.js is running!')


const app={
    title:'Indecision App',
    subtitle:'Put your life in hands of a computer',
    options : []
}

const onFormSubmit= (e)=>{
   e.preventDefault()
   
   const option = e.target.elements.option.value

   if(option)
   {
       app.options.push(option)
       e.target.elements.option.value=''
       render()
   }
}

const onRemoveAll = ()=>{
    app.options=[]
    render()
}

const onMakeDecision=()=>{
    const randomNum = Math.floor(Math.random()*app.options.length)

    alert(app.options[randomNum])
}

const approot = document.getElementById('app')

const render = ()=>{
    const template= (
        <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        {(app.options.length > 0 )? <p>Here are your Options</p> : 'No options'}
        <p>{app.options.length}</p>
        <button disabled={app.options.length===0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={onRemoveAll}>Remove All</button>
        <ol>
           {
               app.options.map((option)=><li key={option}>{option}</li>)
           }
        </ol>
    
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
        </form>
        </div>
    )

    ReactDOM.render(template,approot)

}

render()
