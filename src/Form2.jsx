import {useState} from "react";

const Form2 = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [check, setCheck] = useState('')

    const submitForm = (e) => {
    e.preventDefualt();
    console.log([
        firstName,
        lastName,
        password,
        email,
        address,
        city,
        state,
        zip,
        check,
    ]);

    console.log({
        'Firstname': firstName,
        'Lastname': lastName,
        'Email': email,
        'Password': password,
        'Address': address,
        'City': city,
        'State': state,
        'Check': check,
    });
    }

  return (
    <div>
      <form className="row g-3 w-50 bg-dark p-5 text-white m-5  border rounded shadow-lg p-3 mb-5 shadow-warning p-3 mb-5  rounded rounded">
        
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <label for="inputPassword4" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="inputPassword4" />
        </div>
        <div className="col-12">
          <label for="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="col-12">
          <label for="inputAddress2" className="form-label">
            Address 2
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div className="col-md-6">
          <label for="inputCity" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-4">
          <label for="inputState" className="form-label">
            State
          </label>
          <select id="inputState" className="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-2">
          <label for="inputZip" className="form-label">
            Zip
          </label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary" >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form2;
