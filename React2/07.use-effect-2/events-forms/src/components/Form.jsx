import { useEffect } from "react";
import { useState } from "react";

function Form() {
  const [form, setForm] = useState({
    // username: "",
    // email: "",
    // password: "",
    // age: 0,
    // isIndian: false,
    // file: "",
    // city: "bengalore",
  });

  const handleChange = (e) => {
    let { type, name, value, checked, files } = e.target;
    // console.log(type, name, value, checked);
    if (type === "checkbox") {
      setForm({
        ...form,
        [name]: checked,
      });
    } else if (type === "file") {
      setForm({
        ...form,
        [name]: files,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleOnSubmit = () =>{
    
  }
  //   useEffect(() => {
  //     console.log(form);
  //   }, [form]);
  return (
    <div>
      Form
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>Name : </label>
          <input
            type="text"
            name="username"
            placeholder="Enter name..."
            //we can remove value maping , if default value is not passed
            // value={form.value}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Age : </label>
          <input
            type="text"
            name="age"
            placeholder="Enter age..."
            // value={form.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email : </label>
          <input
            type="text"
            name="email"
            placeholder="Enter email..."
            // value={form.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>City :</label>
          <select name="city" defaultValue={form.city} onChange={handleChange}>
            <option value="Delhi">Delhi</option>
            <option value="Bengalore">Bengalore</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Patna">Patna</option>
          </select>
        </div>
        <div>
          <label>Password : </label>
          <input
            type="text"
            name="password"
            placeholder="Enter password..."
            // value={form.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="checkbox"
            name="isIndian"
            checked={form.isIndian}
            onChange={handleChange}
          />
          <label>: Is Indian </label>
        </div>
        <div>
          <div>
            <input
              type="radio"
              name="gender"
              //   value="Male"
              onChange={handleChange}
            />
            <label>Male</label>
          </div>
        </div>
        <div>
          <div>
            <input
              type="radio"
              name="gender"
              //   value="Female"
              onChange={handleChange}
            />
            <label>Female</label>
          </div>
          <div>
            <label>User Resume </label>
            <input
              type="file"
              accept="image/png, image/jpeg, application/pdf"
              name="resume"
              checked={form.resume}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Form;
