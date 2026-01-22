import React from 'react'


const Product = () => {
  const products = [
    { name: "Redmi", RAM: '8GB', Price: '12,999', Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpSY6GkFseX_mQhDtjbwcS9zbsHFthT96BQg&s'},
    { name: "Samsung", RAM: '4GB', Price: '12,999' ,Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpSY6GkFseX_mQhDtjbwcS9zbsHFthT96BQg&s'},
    { name: "Vivo", RAM: '6GB', Price: '12,999' ,Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpSY6GkFseX_mQhDtjbwcS9zbsHFthT96BQg&s' },

    { name: "Nothing", RAM: '8GB', Price: '12,999' ,Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpSY6GkFseX_mQhDtjbwcS9zbsHFthT96BQg&s' },

    { name: "Apple", RAM: '8GB', Price: '12,999' ,Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpSY6GkFseX_mQhDtjbwcS9zbsHFthT96BQg&s' },

  ]


  return (
    <div className='min-h-screen bg-gray-100 p-10'>
      <h1 className='text-3xl font-bold text-center mb-10'>Mobile Products</h1>
      <div className='grid grid-cols-3 gap-6'>
        {products.map((Product, index) => (
          <div key={index} className='bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition transform duration-300'>
            <img src={Product.Image} alt="product image" />
            <h2 className='text-xl font-bold text-gray-800 mb-2'>{Product.name}</h2>
            <p className='text-gray-600 mb-1'>
              <span className='font-semibold'>RAM:</span>{Product.RAM}
            </p>
            <p className='text-gray-400 mb-1'>
              <span className='font-semibold'>Price :</span> {Product.Price}
            </p>

            <button className='w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition'>Buy Now</button>
          </div>


        ))}
      </div>

    </div>
  );
};

export default Product

