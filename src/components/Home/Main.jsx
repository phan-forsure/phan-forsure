import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {

    return (
        <section className='comp about'>
            <div className='text'>
                <div>
                    <h1>اطلب ما تشتهى من <span>طعام بضغطه واحدة</span> </h1>
                    <p>هنا في موقع دلع كرشك نوفر لك تجربة لا مثيل لها</p>
                </div>
                <Link to={'/phan-forsure/Products'}>اطلب الان</Link>    
            </div>
            <div className='background'>
                <img className='img-1' src="https://img.freepik.com/premium-photo/koshari-egyptian-cuisine-white-plate_864588-11238.jpg" alt="طبق كشري" />
                <img className='img-2' src="https://img.freepik.com/premium-photo/koshari-egyptian-cuisine-white-plate_864588-11238.jpg" alt="طبق كشري" />
                <img className='img-3' src="https://img.freepik.com/premium-photo/koshari-egyptian-cuisine-white-plate_864588-11238.jpg" alt="طبق كشري" />
            </div>
        </section>
    )
}

export default Main