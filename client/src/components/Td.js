import React from 'react';
import { Link } from 'react-router-dom';
import "../pages/Home.css"
export default function Td({ children, to }) {
  // Conditionally wrapping content into a link
  const ContentTag = to ? Link : 'div';

  return (
      <td className="tablename" style={{ color: "inherit", textDecoration: "none" }}>
      <ContentTag to={to}>{children}</ContentTag>
    </td>
  );
}