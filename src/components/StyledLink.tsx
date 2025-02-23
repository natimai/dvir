import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledLink = styled(Link)`
  background: linear-gradient(45deg, #d4af37, #f4c430);
  color: white;
  padding: 12px 36px;
  font-size: 1.2rem;
  border-radius: 50px;
  text-decoration: none;
  text-transform: none;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(212, 175, 55, 0.3);
    color: white;
  }
`;

export default StyledLink;
