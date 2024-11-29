import { useState } from "react";
function ReactForm() {
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formdata);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={formdata.name}
          onChange={handleInputChange}
          type="text"
          placeholder="Enter your name"
          required
        />
        <input
          name="email"
          onChange={handleInputChange}
          value={formdata.email}
          type="email"
          placeholder="Enter your email"
          required
        />
        <input
          name="password"
          onChange={handleInputChange}
          value={formdata.password}
          type="password"
          placeholder="Enter your password"
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ReactForm;
