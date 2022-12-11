import React from "react";

const TabelTr = ({
  name,
  Account,
  Category,
  fromdate,
  todate,
  fromFax,
  tofax,
  Fax,
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{Account}</td>
      <td>{Category}</td>
      <td>{fromdate}</td>
      <td>{todate}</td>
      <td>{fromFax}</td>
      <td>{tofax}</td>
      <td>{Fax}</td>
    </tr>
  );
};

export default TabelTr;
