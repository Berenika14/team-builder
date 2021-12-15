import React, { useState } from "react";

const initialFormValue = {
  name: "",
  email: "",
  role: "",
};
const Form = ({ team, setTeam }) => {
  const [formData, setFormData] = useState(initialFormValue);
  const [error, setError] = useState("");

  //update state
  const updateForm = (inputName, inputValue) => {
    setFormData({ ...formData, [inputName]: inputValue });
  };

  const change = (e) => {
    const { name, value } = e.target;
    updateForm(name, value);
  };

  const submit = (e) => {
    e.preventDefault();
    const newMember = {
      name: formData.name,
      email: formData.email,
      role: formData.role,
    };

    if (!newMember.name || !newMember.email || !newMember.role) {
      setError("All field are required to fill");
    } else {
      setTeam(team.concat(newMember));
    }
  };
  return (
    <div>
      <h2>{error}</h2>
      <form onSubmit={submit}>
        <label>
          Name:
          <input
            name="name"
            placeholder="Enter your Name"
            type="text"
            value={formData.name}
            onChange={change}
          />
        </label>
        <label>
          Email:
          <input
            name="email"
            placeholder="Enter your Email"
            type="email"
            value={formData.email}
            onChange={change}
          />
        </label>
        <label>
          Role:
          <select value={formData.role} name="role" onChange={change}>
            <option value="">--Select a Role---</option>
            <option value="Junior Engineer">Junior Engineer</option>
            <option value="Senior Engineer">Senior Engineer</option>
            <option value="CEO">CEO</option>
            <option value="CEO & Founder">CEO & Founder</option>
            <option value="CTO">CTO</option>
            <option value="CTO & Founder">CTO & Founder</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default Form;
