import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite'
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from 'react-router-dom'; // импортируем NavLink
import '../Overlay.css';

const Overlay = (props) => {
  return (
    <div className="overlay">
      <div className="korzina">
        <h2 className="korzina_name">Корзина</h2>
      </div>

      {props.overlayItems.length > 0 ? (
        <div className="cardkorz">
          {props.overlayItems.map((obj) => (
            <Card className="tovar" key={obj.id}>
              <NavLink to="/flowers"> 
                <Card.Img variant="top" className="img1" src={obj.img} />
              </NavLink>
              <Card.Body className="text">
                <Card.Title className="title">{obj.name}</Card.Title>
                <Card.Text className="description">{obj.description}</Card.Text>
                <Card.Text className="price">{obj.price}</Card.Text>
                <div className="icon-buttons" style={{ display: 'flex', alignItems: 'center' }}>
                  <div
                    aria-label="Удалить из корзины"
                    onClick={() => props.deleteItem(obj.id)}
                    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                    <DeleteIcon style={{ width: '20px', height: '25px' }} />
                    <span style={{ marginLeft: '5px' }}>Удалить</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      ) : (
        <div className="puscto_netnichego">
          <p className="lala">Товары не были добавлены</p>
          <NavLink to="/flowers"> 
            <img src="img/pusto.jpeg" className="nichegonet" />
          </NavLink>
        </div>
      )}

      <div className="price">
        <p className="result">Ваш чек: </p>
        <p className="result">{props.total_price}</p>
      </div>
    </div>
  );
};

export default Overlay;