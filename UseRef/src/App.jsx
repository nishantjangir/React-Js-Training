import { useRef } from 'react';

 function App() {
  let ref = useRef(0);
  let btn = useRef(null);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  const UseReferd = () => {
    btn.current.style.display = 'none';
  }

  return (
    <>
   
    <button onClick={handleClick}>
      Click me!
    </button> <br /> <br />


<button ref={btn} onClick={UseReferd}>Clicked</button>





  </>
  );
}
export default App