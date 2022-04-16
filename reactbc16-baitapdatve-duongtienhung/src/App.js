import logo from "./logo.svg";
import "./App.css";
import BookingTicket from "./BookingTicket/BookingTicket";
//Component App sẽ là nơi chứa toàn bộ giao diện của ứng dụng
function App() {
  return (
    <div className="App">
      <BookingTicket/>
    </div>
  );
}

export default App;
