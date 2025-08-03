import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-family: Arial, sans-serif;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.thead`
  background-color: #00bcd5;
  color: white;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f8f8;
  }
  &:hover {
    background-color: #f1f1f1;
  }
`;

const TableHeaderCell = styled.th`
  padding: 12px 15px;
  text-align: left;
  font-weight: 600;
`;

const TableCell = styled.td`
  padding: 10px 15px;
  border-bottom: 1px solid #e0e0e0;
`;

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Currency</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TableCell>{capitalizeFirstLetter(type)}</TableCell>
            <TableCell>{amount}</TableCell>
            <TableCell>{currency}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
