import React from 'react';
import { Person } from '../types';
import { Link } from 'react-router-dom';

interface Props {
  person: Person;
  isSelected: boolean;
  onSelect: (event: React.MouseEvent<HTMLTableRowElement>) => void;
}

export const PersonRow: React.FC<Props> = ({
  person,
  isSelected,
  onSelect,
}) => (
  <tr
    data-cy="person"
    onClick={event => {
      event.preventDefault();
      onSelect(event);
    }}
    className={isSelected ? 'has-background-warning-light' : ''}
  >
    <td>
      <Link
        to={`/people/${person.slug}`}
        className={person.sex === 'f' ? 'has-text-danger' : ''}
        onClick={event => event.stopPropagation()}
      >
        {person.name}
      </Link>
    </td>
    <td>{person.sex}</td>
    <td>{person.born}</td>
    <td>{person.died}</td>
    <td>{person.motherName || '-'}</td>
    <td>{person.fatherName || '-'}</td>
  </tr>
);
