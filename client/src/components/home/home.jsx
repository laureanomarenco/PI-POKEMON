import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cleanDetail, fetchTypes } from '../../store/actions';
import Pokemons from '../pokemons/pokemons';
import NavBar from '../navBar/navBar.jsx';
import c from './home.module.css';

export default function Home() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(cleanDetail());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTypes());
  }, [dispatch]);
  return (
    <>
    <div className={c.background}>
      <NavBar />
      <Pokemons />
    </div>
    </>
  )
}