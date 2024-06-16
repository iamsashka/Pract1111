import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { AppContext } from '../App';

const Favourites = () => {
  const { favouritesItems, removeFromFavorites } = useContext(AppContext);

  return (
    <div className="overlay">
      <div className="korzina">
        <h2 className="korz">Избранное</h2>
      </div>

      {favouritesItems.length > 0 ? (
        <div className="cardkorz">
          {favouritesItems.map(item => (
            <Card key={item.id} className="kartochki">
              <Card.Img variant="top" className='img1' src={item.img} />
              <Card.Body className="text">
                <Card.Title className="title">{item.name}</Card.Title>
                <Card.Text className="description">
                  {item.description}
                </Card.Text>
                <Card.Text className="price">
                  {item.price}
                </Card.Text>
                <div className="icon-buttons">
                  <Fab
                    aria-label="like"
                    size="small"
                    style={{
                      marginLeft: '10px',
                      color: 'red',
                      backgroundColor: 'white'
                    }}
                    onClick={() => removeFromFavorites(item.id)}
                  >
                    <FavoriteIcon />
                  </Fab>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      ) : (
        <div className="pusto">
          <p className="izb">Нажмите на ♡, чтобы добавить продукт в избранное</p>
        </div>
      )}
    </div>
  );
};

export default Favourites;
