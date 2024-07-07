import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SearchBarComponent } from '../src/components/searchBar/page';
import { AppContext } from '../src/utils/AppContext';

describe('Funcionamiento correcto del SearchBarComponente', () => {
  it('Se debería buscar y encontrar la nota con el titulo indicado en el SearchBarComponente', () => {
    const setNotesSearched = jest.fn();
    const setValueSearched = jest.fn();
    const notes = [
      { id: '1', title: 'Note 1', content: 'Content 1' },
      { id: '2', title: 'Note 2', content: 'Content 2' }
    ];

    const wrapper = ({ children }) => (
      <AppContext.Provider value={{ notes, notesSearched: [], setNotesSearched, setValueSearched }}>
        {children}
      </AppContext.Provider>
    );
    
    const { getByPlaceholderText } = render(<SearchBarComponent />, { wrapper });

    const input = getByPlaceholderText('Busque sus notas...');
    fireEvent.change(input, { target: { value: 'Note 1' } });


    expect(setValueSearched).toHaveBeenCalledWith('note 1');
    expect(setNotesSearched).toHaveBeenCalledWith([notes[0]]);
  });
});