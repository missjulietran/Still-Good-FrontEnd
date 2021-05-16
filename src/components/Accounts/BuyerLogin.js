import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { loginBuyerThunk } from "../../redux/actions/loginAction";
import { useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";
import styles from "./Login.module.css";

const BuyerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector((state) => state.login);
  const { isLoading, isAuthenticated } = auth;
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/buyers");
    }
  }, [isAuthenticated, history]);

  const login = (e) => {
    e.preventDefault();
    dispatch(loginBuyerThunk(email, password));
  };
  return (
    <div>
      <h3 className={styles.Buyer}>Logging in as a Buyer</h3>

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
          Please sign in with the e-mail you registered with.
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

        <Button variant="info" type="submit" onClick={login}>
          Submit
        </Button>
        {isLoading && (
          <Loader type="ThreeDots" color="#ccc" height={60} width={60} />
        )}
      </Form>
    </div>
  );
};

export default BuyerLogin;
