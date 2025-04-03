import React, { useState , useRef} from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);

  const b = useRef(0)
  console.log(b.current)

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    setTimeout(() => {
      console.log({ name, email, password });
      setName('');
      setEmail('');
      setPassword('');
      setLoader(false);
    }, 5000);
  };


  return (
    <>
    <div className='boxer'>
    <div className='format'>
        
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="name"
          placeholder="Enter Name"
          required
          minLength={6}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br />
        <input
          type="email"
          className="email"
          placeholder="Enter Email"
          required
          minLength={10}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />
        <input
          type="password"
          className="password"
          placeholder="Enter Password"
          required
          minLength={10}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />
        <button type='submit' disabled={loader}>
        Submit
        </button>
      </form>
    
      </div>
    <div className='boxes'>{loader && <p className='big'>Loading.....</p>}</div>
    </div>

    <div>
      <button onClick={() => {
b.current = b.current + 1
      }}>Increment</button>
    </div>
    </>
  );
};

export default Register;
