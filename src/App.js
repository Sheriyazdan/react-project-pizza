import './App.css';
import './scss/app.scss'
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import Pizza from './components/Pizza';
import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import { setcategoryActive } from './redux/slices/filterSlice'
import { setSortType } from './redux/slices/sortSlice'
import { setCartActive } from './redux/slices/cardSlice'
import Skeleton from './components/Pizza/Skeleton';
import { Routes, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import Cart from './components/Cart';
import AllPizzas from './components/AllPizzas';
import debounce from 'lodash.debounce'

function App() {
  const categoryActive = useSelector(state => state.filter.categoryActive)
  const sortType = useSelector(state => state.sort.sortType)
  const [cartPizzaItems, setCartPizzaItems] = useState([])
  const dispatch = useDispatch();

  const onCategoryActive = (i) => {
    dispatch(setcategoryActive(i));
  }
  const onSortActive = (obj) => {
    dispatch(setSortType(obj))
  }

  const [pizzas, setitems] = useState([])
  const [loading, setloading] = useState(true)
  const [search, setSearch] = useState('')
  const SearchDebounceValue = useCallback(
    debounce((str) => {
      setSearch(str)
      console.log(str);
    }, 1000),
    [],
  )

  useEffect(() => {
    axios.get('https://61e1476a63f8fc0017618b27.mockapi.io/cart_buy_to_pizzas').then(res => {
      const obj = {
        price: 0,
        items: res.data.length
      }
      setCartPizzaItems(res.data)
      dispatch(setCartActive(obj))
    })
  }, [])

  let activeItems = []
  const items = pizzas.filter(element => {
    if (element.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
      return true
    }
    return false
  }).map((obj, index) => {
    {
      cartPizzaItems.forEach(element => {
        if (obj.title === element.objPizza.name)
          activeItems.push(obj.title)

      })
    }
    return (
      <Pizza {...obj} key={index} activeItemArr={activeItems} />
    )
  })

  useEffect(() => {
    setloading(true)
    axios.get(`https://61e1476a63f8fc0017618b27.mockapi.io/card_pizzas?${categoryActive > 0 ? `category=${categoryActive}` : ''}&sortBy=${sortType.sort}&order=${sortType.order}`).then(response => {
      setitems(response.data)
      setloading(false)
    })
  }, [categoryActive, sortType]);

  return (
    <div className="wrapper">
      <Header SearchDebounceValue={SearchDebounceValue} search={search} setSearch={setSearch} />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories categoryActive={categoryActive} setcategoryActive={onCategoryActive} items={['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
            <Sort sortType={sortType} setSortType={onSortActive} />
          </div>
          <AllPizzas loading={loading} items={items} cartPizzaItems={cartPizzaItems} />
        </div>
      </div>
    </div>
  );
}

export default App;
