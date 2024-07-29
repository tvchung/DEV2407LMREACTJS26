import logo from './logo.svg';
import './App.css';
import EventDemo1 from './components/EventDemo1';
import EventDemo2 from './components/EventDemo2';
import EventDemo3 from './components/EventDemo3';
import EventDemo4 from './components/EventDemo4';
import FormDemo1 from './components/FormDemo1';
import FormDemo2 from './components/FormDemo2';
import ListRender from './components/ListRender';
import ListObjectRender from './components/ListObjectRender';

function App() {

  // Hàm nhận dữ liệu từ EventDemo3, và xử lý
  const handleReciver = (param)=>{
    alert("App: Xin chào," + param)
  }

  // Submit
  const handleSubmit = (args, val)=>{
    alert(args+ "\n" + val )
  }
  const handleSubmitForm2=(params)=>{
    console.log(params);
  }
  return (
    <div className="container border my-3">
      <header className="">
        <img src="https://devmaster.edu.vn/images/logo.png" alt="Devmaster Academy" />
      </header>
      <EventDemo1 />
      <EventDemo2 />
      <EventDemo3 renderCompany = "Devmaster Academy" onReciver = {handleReciver}/>
      <EventDemo4 onSubmit={handleSubmit}/>
      <hr/>
      <FormDemo1 />
      <FormDemo2 onSubmit ={handleSubmitForm2}/>
      <hr/>
      <ListRender />
      <ListObjectRender />
    </div>
  );
}

export default App;
