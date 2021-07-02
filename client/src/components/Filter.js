import React, { useState } from 'react';
import { filterProducts } from '../actions/productActions';
import { useDispatch } from 'react-redux';

const Filter = () => {
    const [searchkey, setSearchkey] = useState('');
    const [sort, setSort] = useState('popular');
    const [category, setCategory] = useState('all');
    const dispatch = useDispatch();
    return (
        <div>
            <div className="row justify-content-center text-start shadow p-3 mb-5 bg-white rounded">
                <div className="col-md-3" style={{marginTop: '-2px'}}>
                    <input type="search" value={searchkey} onChange={(e) => { setSearchkey(e.target.value) }} placeholder="search products" className="form-control" />
                </div>
                <div className="col-md-3 mt-2" >
                    <select className="form-control" value={sort} onChange={(e) => setSort(e.target.value)}>
                        <option value="popular">Popular</option>
                        <option value="htl">High To Low</option>
                        <option value="lth">Low To High</option>
                    </select>
                </div>
                <div className="col-md-3 mt-2">
                    <select className="form-control" value={category} onChange={(e) => { setCategory(e.target.value) }}>
                        <option value="all">All Categories</option>
                        <option value="electronics">Electronics</option>
                        <option value="fashion">Fashion</option>
                        <option value="mobiles">Mobiles</option>
                        <option value="games">Games</option>
                    </select>
                </div>
                <div className="col-md-2 mt-2">
                    <button className="btn" onClick={() => { dispatch(filterProducts(searchkey, sort, category)) }}>FILTER</button>
                </div>
            </div>
        </div>
    )
}

export default Filter
