import React from 'react';
import Item from './Item';
import axios from 'axios';

const FlowersItem=(props)=>{

    const onAddOverlay = (obj)=>{
        try{
            if(props.overlayItems.find(item=> Number(item.id)=== Number(obj.id))){
                axios.delete(`http://localhost:3001/overlays/${obj.id}`);
                props.setoverlayItems((over)=>over.filter(item=> Number(item.id) !== Number(obj.id)));
            }
            else{
                axios.post('http://localhost:3001/overlays', obj);
                props.setoverlayItems([...props.overlayItems, obj]);
            }
        }
        catch{
            alert('Ошибка');
        }
    }

    return(
        <div className='balery'>
            {
                props.item.map(obj=>{
                    return(
                        <Item 
                        key={obj.id}
                        myId={obj.myId}
                        id={obj.id}
                        name={obj.name}
                        description={obj.description}
                        price={obj.price}
                        img={obj.img}

                        onPlus={(flowerObj) => onAddOverlay(flowerObj)}
                        />
                    )
                })
            }
        </div>
    )
}

export default FlowersItem
