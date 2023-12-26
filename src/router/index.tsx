import { NavLink, Routes, Route } from 'react-router-dom'
import Product from '@/views/product/Product'
import Home from '@/views/home/Home'
import ccc from '@/router/routerConfig'
console.log(ccc)
function IndexRouter() {
    console.log(ccc)
    return (
        <nav>
            <NavLink to="">首页</NavLink>
            <NavLink to="product">产品</NavLink>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                {ccc.map((item) => (
                    <Route path={item.path} element={item.ele} />
                ))}
            </Routes>
        </nav>
    )
}

export default IndexRouter
