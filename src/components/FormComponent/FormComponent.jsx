import React, { Fragment, useState } from "react";

function FormComponent() {
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [age, setAge] = useState();
	const [emailAddress, setEmailAddress] = useState();
	const [address, setAddress] = useState();
	const [password, setPassword] = useState();
	const [favouriteOS, setFavouriteOS] = useState("Windows");
	const [formSubmitStatus, setFormSubmitStatus] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
        console.log(firstName, lastName, age, emailAddress, address, password);
        alert("Form Submitted: "+formSubmitStatus+"\nName: " + firstName + " " + lastName + "\nAge: " + age + "\nEmail Address: " + emailAddress + "\nAddress: " + address + "\nPassword: " + password + "\nFavourite OS: " + favouriteOS)
        setFormSubmitStatus(true);
	};

	return (
		<Fragment>
			<div className="form-container">
				<form>
					<div className="form-group">
						<label htmlFor="firstName">First Name</label>
						<input
							type="text"
							className="form-control"
							id="firstName"
							placeholder="Enter First Name"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
						<label htmlFor="lastName">Last Name</label>
						<input
							type="text"
							className="form-control"
							id="lastName"
							placeholder="Enter Last Name"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
						<label htmlFor="age">Age</label>
						<input
							type="number"
							className="form-control"
							id="age"
							placeholder="Enter Age"
							value={age}
							onChange={(e) => setAge(e.target.value)}
						/>
						<label htmlFor="emailAddress">Email Address</label>
						<input
							type="email"
							className="form-control"
							id="emailAddress"
							placeholder="Enter Email Address"
							value={emailAddress}
							onChange={(e) => setEmailAddress(e.target.value)}
						/>
						<label htmlFor="address">Address</label>
						<input
							type="text"
							className="form-control"
							id="address"
							placeholder="Enter Address"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						/>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							className="form-control"
							id="password"
							placeholder="Enter Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<label htmlFor="favouriteOS">Favourite OS</label>
						<select
							className="form-control"
							id="favouriteOS"
							value={favouriteOS}
							onChange={(e) => setFavouriteOS(e.target.value)}
						>
							<option value="Windows">Windows</option>
							<option value="Mac">Mac</option>
							<option value="Linux">Linux</option>
						</select>
						<button
							type="submit"
							onClick={handleSubmit}
							className="btn btn-primary"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
			{/* {formSubmitStatus && (
				<Fragment>
					<Modal show={formSubmitStatus} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Form Data</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<p>First Name: {firstName}</p>
							<p>Last Name: {lastName}</p>
							<p>Age: {age}</p>
							<p>Email Address: {emailAddress}</p>
							<p>Address: {address}</p>
							<p>Password: {password}</p>
							<p>Favourite OS: {favouriteOS}</p>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>
								Close
							</Button>
						</Modal.Footer>
					</Modal>
				</Fragment>
			)} */}
		</Fragment>
	);
}

export default FormComponent;
