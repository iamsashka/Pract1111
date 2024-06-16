import React, { useState, useContext, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../Item.css';
import { AppContext } from '../App';

const Item = (props) => {
  const context = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(context.isFab(props.id));

  useEffect(() => {
    setIsFavorite(context.isFab(props.id));
  }, [context, props.id]);  // Добавьте 'context' в зависимости

  const onClickAdd = () => {
    const { myId, id, name, description, price, img } = props;
    props.onPlus({ myId, id, name, description, price, img });
  };

  const onFabClick = () => {
    const { myId, id, name, description, price, img } = props;
    if (isFavorite) {
      context.removeFromFavorites(id);
    } else {
      context.addToFavorites({ myId, id, name, description, price, img });
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <Card className="kartochki">
      <Card.Img variant="top" className='img1' src={props.img} />
      <Card.Body className="text">
        <Card.Title className="title">{props.name}</Card.Title>
        <Card.Text className="description">
          {props.description}
        </Card.Text>
        <Card.Text className="price">
          {props.price}
        </Card.Text>
        <div className="icon-buttons">
          <div aria-label="добавить в корзину" onClick={onClickAdd} style={{ cursor: 'pointer' }}>
            {context.isAdded(props.myId) ? 
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <ShoppingCartIcon style={{ color: 'white' }} />
                <span style={{ marginLeft: '5px' }}>Товар был добавлен в корзину</span>
              </div>
              :
              <AddShoppingCartIcon style={{ color: 'white' }} />
            }
          </div>
          <Fab
            aria-label="like"
            size="small"
            style={{
              marginLeft: '10px',
              color: isFavorite ? 'red' : 'purple',
              backgroundColor: 'white'
            }}
            onClick={onFabClick}
          >
            <FavoriteIcon />
          </Fab>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Item;
