import React from "react";
import { UserDtailsCon } from "./Common.styled";
import { faker } from "@faker-js/faker";

export const UserDetails = () => {
  let name = faker.name.findName();
  console.log(name);

  return (
    <UserDtailsCon>
      <h4>Account Details</h4>
      <p>Name : {faker.name.findName()}</p>
      <p>Mobile no. : {faker.phone.phoneNumberFormat()}</p>
      <p>Email : {faker.internet.email()}</p>
    </UserDtailsCon>
  );
};

export default UserDetails;
