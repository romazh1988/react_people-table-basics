import React from 'react';
import { Person } from '../types';
import { Link } from 'react-router-dom';

interface Props {
  person: Person;
  isSelected: boolean;
  onSelect: (slug: string) => void;
  people: Person[];
}

export const PersonRow: React.FC<Props> = ({
  person,
  isSelected,
  onSelect,
  people,
}) => {
  const mother = people.find(p => p.name === person.motherName);
  const father = people.find(p => p.name === person.fatherName);

  return (
    <tr
      data-cy="person"
      className={isSelected ? 'has-background-warning-light' : ''}
    >
      <td>
        <Link
          to={`/people/${person.slug}`}
          onClick={e => {
            e.preventDefault();
            onSelect(person.slug);
          }}
          className={person.sex === 'f' ? 'has-text-danger' : ''}
        >
          {person.name}
        </Link>
      </td>
      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>
      <td>
        {mother ? (
          <Link
            to={`/people/${mother.slug}`}
            onClick={e => {
              e.preventDefault();
              onSelect(mother.slug);
            }}
          >
            {mother.name}
          </Link>
        ) : (
          person.motherName || '-'
        )}
      </td>
      <td>
        {father ? (
          <Link
            to={`/people/${father.slug}`}
            onClick={e => {
              e.preventDefault();
              onSelect(father.slug);
            }}
          >
            {father.name}
          </Link>
        ) : (
          person.fatherName || '-'
        )}
      </td>
    </tr>
  );
};
