import React from 'react'
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductCard = (props) => {
    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate('/product/' + id)
    }
    return (
        <>
            {
                props.data?.map((item) => (
                    <Card onClick={() => handleClick(item.id)} key={item.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.img} />
                        <Card.Body>
                            <Card.Title>{item.productName}</Card.Title>
                            <Card.Text>
                                {item.productDescription}
                            </Card.Text>
                            <Card.Text>
                                Rs. {item.price}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))
            }
        </>

    )
}

export default ProductCard
