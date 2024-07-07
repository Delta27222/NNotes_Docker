// SearchBarComponent.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SearchBarComponent } from '../src/components/searchBar/page';
import { AppContext } from '../src/utils/AppContext';

describe('SearchBarComponent', () => {
  it('renders correctly', () => {
    const wrapper = ({ children }) => (
      <AppContext.Provider value={{ notes: [], notesSearched: [], setNotesSearched: jest.fn(), setValueSearched: jest.fn() }}>
        {children}
      </AppContext.Provider>
    );
    render(<SearchBarComponent />, { wrapper });
    expect(screen.getByPlaceholderText('Busque sus notas...')).toBeInTheDocument();
  });

  it('updates search term on change', () => {
    const setValueSearched = jest.fn();
    // Modificar el wrapper para usar el mock de setValueSearched
    const customWrapper = ({ children }) => (
      <AppContext.Provider value={{ notes: [], notesSearched: [], setNotesSearched: jest.fn(), setValueSearched }}>
        {children}
      </AppContext.Provider>
    );

    render(<SearchBarComponent />, { wrapper: customWrapper });

    fireEvent.change(screen.getByPlaceholderText('Busque sus notas...'), {
      target: { value: 'test' },
    });

    expect(setValueSearched).toHaveBeenCalledWith('test');
  });

  it('updates and finds the search term on change.', () => {
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