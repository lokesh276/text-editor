import { useEffect, useState } from "react"

function Useeffect() {
    const [count,setCount] = useState(0)
    useEffect(() => {
        console.log('useeffect hi aa ', count)
        
        return () => {
            console.log('useeffect lo aa ', count)
        }
    }, [count])
    
    const counter = () => {
       setCount(count + 1)
     }
  return (
      <div>
          <p>{count}</p>
      <button  className="px-2 py-1 bg-[black] text-white" onClick={counter}>dec</button>
    </div>
  );
}

export default Useeffect;


// useffect in application is used for controlling side effects.it is used to render a particular side effect, when you are fetching the api in the page then you do rendering as result  you are not able to load the data when it renders first so with the use of use-effect you can perform side effect and rendeer the data at first time you loads.
// when the depemdency array changes useefect hook desytroy itself.and it will create new value