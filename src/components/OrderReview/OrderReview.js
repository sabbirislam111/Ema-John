import React from 'react';
import './OrderReview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const OrderReview = ({product, hendelReMoveData}) => {
    const {_id, name, price, quantity, img } = product;
   
    return (
        <div className='porduct_review_container'>

            <div className='detail_delete'>

                <div className='images'>
                    <img src={img} alt="" />
                </div>

                <div>
                    <h3>{name}</h3>
                    <p>Price :${price}</p>
                    <p>Quantity: {quantity}</p>
                </div>



            </div>

            <div>
                <button onClick={()=>hendelReMoveData(_id)} className='btn'>
                    <FontAwesomeIcon className='icon' icon={faTrash} />
                </button>
            </div>

        </div>
    );
};

export default OrderReview;