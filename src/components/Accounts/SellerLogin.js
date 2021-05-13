import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { loginUserThunk } from "../../redux/actions/loginAction";
import { useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";
import styles from "./Login.module.css";

const SellerLogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector((state) => state.login);
  const { isLoading, isAuthenticated } = auth;
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/seller");
    }
  }, [isAuthenticated, history]);

  const login = (e) => {
    e.preventDefault();
    dispatch(loginUserThunk(email, password));
  };
  return (
    <div>
      <h1 className={styles.text}>Welcome back, Seller</h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.currentTarget.value)}
            value={email}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.currentTarget.value);
            }}
            value={password}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={login}>
          Submit
        </Button>
        {isLoading && (
          <Loader type="ThreeDots" color="#ccc" height={60} width={60} />
        )}
      </Form>
    </div>
  );
};

export default SellerLogin;
