import { NavLink, Routes, Route } from 'react-router-dom'
import Product from '@/views/product/Product'
import Home from '@/views/home/Home'

function IndexRouter() {
    return (
        <nav>
            <NavLink to="">首页</NavLink>
            <NavLink to="product">产品</NavLink>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
            </Routes>
        </nav>
    )
}

export default IndexRouter
