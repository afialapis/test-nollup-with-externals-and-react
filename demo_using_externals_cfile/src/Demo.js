import React  from 'react'

const Demo = () => {
  

  return (  

    <div>
      <h1>test-nollup-with-externals-and-react</h1>
      
      <div>
        Demo is running successfully! 
      </div>
      <div>
        We are using <i>rollup-plugin-node-externals</i>. React is not included in our bundle.
      </div>
      <div>
        All bundled ok using <b>Nollup CLI</b>.
      </div>      
    </div>

  )
}

export {Demo}