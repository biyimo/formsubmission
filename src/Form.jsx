import { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [check, setCheck] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    console.log([
        firstName,
        lastName,
        email,
        password,
        address,
        city,
        state,
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
  };

  return (
    <div>
      <form
        className="row g-3 w-50 p-5 m-5 border rounded shadow "
        onSubmit={submitForm}

      >

        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            placeholder="First name"
            aria-label="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            placeholder="Last name"
            aria-label="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="email"
            aria-label="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label
            for="inputPassword4"
            className="form-label"
            placeholder="password"
            aria-label="password"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="col-12">
          <label
            for="inputAddress"
            className="form-label"
            placeholder="address"
            aria-label="address"
          >
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="col-12">
          <label
            for="inputAddress2"
            className="form-label"
            placeholder="address"
          >
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
          <label
            for="inputCity"
            className="form-label"
            placeholder="city"
            aria-label="city"
          >
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <label for="inputState" className="form-label">
            State
          </label>
          <select
            id="inputState"
            className="form-select"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option selected>Choose...</option>
            <option>Lagos</option>
            <option>Ogun</option>
            <option>Osun</option>
            <option>Imo</option>
            <option>Oyo</option>
          </select>
        </div>
        <div className="col-md-2">
          <label for="inputZip" className="form-label">
            Zip
          </label>
          <input
            type="text"
            className="form-control"
            id="inputZip"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
              value={check}
              onChange={() => setCheck(true)}
            />
            <label className="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
        
      </form>
    </div>
  );
};

export default Form;
