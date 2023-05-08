import React, {useState, useEffect, useReducer, useMemo} from 'react'
import css from './CardsRick.module.css'

const initialState = {
  favorites: []
}

const favoriteReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_FAVORITE':
        return {
          ...state,
          favorites: [...state.favorites, action.payload]
        };
      default:
        return state;
    }
}

export const CardsRick = () => {

    const [characters, setCharacters] = useState([]);
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => setCharacters(data.results));
    }, []);

    const handleClick = favorite => {
        dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
    }

    const handleSearch = (event) => {
      setSearch(event.target.value)
    }

    const filteredUsers = characters.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase())
    })

  return (
    <div className={css.Characters}>

      <div className={css.Search}>
        <input type="text" value={search} onChange={handleSearch} />
      </div>

      {favorites.favorites.map(favorite => (
        <li className={css.ListCharacter} key={favorite.id}>
          {favorite.name}
        </li>
      ))}

      {characters.map(character => (
            <div className={css.Character_card} key={character.id}>
              <img className={css.Character_img} src={character.image} />
              <div className={css.Character_info}>
                  <h2>{character.name}</h2>
                  {character.status === 'Alive' 
                    ? <h2 id={css.Alive} >{character.status}</h2> 
                    : <h2 id={css.Dead} >{character.status}</h2>}
                  {character.species === 'Human' 
                    ? <h2 id={css.Humans} >{character.species}</h2> 
                    : <h2 id={css.Aliens} >{character.species}</h2>}
              </div>
            </div>   
      ))}
    </div>
  );
}