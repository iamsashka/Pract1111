import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
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
            <Card className="kartochki" key={obj.id}>
              <Card.Img variant="top" className='img1' src={obj.img} />
              <Card.Body className="text">
                <Card.Title className="title">{obj.name}</Card.Title>
                <Card.Text className="description">
                  {obj.description}
                </Card.Text>
                <Card.Text className="price">
                  {obj.price}
                </Card.Text>
                <div className="icon-buttons" style={{ display: 'flex', alignItems: 'center' }}>
                  <div aria-label="Удалить из корзины" onClick={() => props.deleteItem(obj.id)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                    <DeleteIcon style={{ width: '20px', height: '25px' }} />
                    <span style={{ marginLeft: '5px' }}>Удалить</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      ) : (
        <div className="puscto">
          <p className="lala">Нажмите на 🛒, чтобы добавить продукт в корзину</p>
          <img src="img/pusto.jpeg" className="esli_pusto"/>
        </div>
      )}

      <div className="price">
        <p className="res">Ваш чек: </p>
        <p className="res">{props.total_price}</p>
      </div>
    </div>
  );
};

export default Overlay;
