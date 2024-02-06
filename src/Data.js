
import React from 'react';
import ImageCard from './components/products'; 
import Interfaces from './components/cart1';

const Data = () => {
  const imagesData = [
    { 
    id:'1',
    src:"https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/495776/1.jpg?3633", 
    description:"tissue double layer roll", 
    alt:"phone illusion isn't available ", 
    price:"Ksh 300", 
    previous:" ksh 320"
  },
    { 
    id:'2',
    src:'https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/6737701/1.jpg?2184',
    description:"tecno spark 8",
    alt:"phone illusion isn't available ",
    price:"Ksh 10 900", 
    previous:" ksh 11 320"
      },
    { 
    id:'3',
    src:'https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/11/319946/1.jpg?0341', 
    description:"tecno K56J", 
    alt:"phone illusion isn't available ", 
    price:"Ksh 12 200", 
    previous:" ksh 13 330"
  },
    {
     id:'4',     
     src:'https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/51/964676/1.jpg?9554',
     description:"oppo a1s", 
     alt:"phone illusion isn't available ", 
     price:"Ksh 10 400", 
     previous:" ksh 11 920"
    },
    { 
    id:'5',
    src:'https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/9635051/1.jpg?8629', 
    description:"oppo reno 7T", 
    alt:"phone illusion isn't available ",
     price:"Ksh 34 000", 
     previous:" ksh 32 000"
    },
    { id:'6',
    src:'https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/8399421/1.jpg?3631', 
    description:"oppo reno 8T", 
    alt:"phone illusion isn't available ", 
    price:"Ksh 10 900", 
    previous:" ksh 11 320"
  },
    { 
    id:'7',
    src:'https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/49/2421021/1.jpg?4684', 
    description:"oppo a15k ", 
    alt:"phone illusion isn't available ", 
    price:"Ksh 31 000", 
    previous:" ksh 32 000"
  },
    
   {
    id:'8',
    src:'https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/62/6675131/1.jpg?7710', 
    description:"oppo a16k", 
    alt:"phone illusion isn't available ", 
    price:"Ksh 10 900", 
    previous:" ksh 17 200"
  },
    { 
      id:'9',
    src:'https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/9174321/1.jpg?1634', 
    description:"samsung a14", 
    alt:"phone illusion isn't available ", 
    price:"Ksh 30 000", 
    previous:" kshh 32 000"
  },
    { 
      id:'10',
    src:'https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/86/9635051/1.jpg?9860', 
    description:"samsung galaxy 16y", 
    alt:"phone illusion isn't available ", 
    price:"Ksh 9 900", 
    previous:" ksh 11 320"
  },
    { 
      id:'11',
    src:'https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/13/8044131/1.jpg?1971', 
    description:"samsung galaxy 16y", 
    alt:"phone illusion isn't available ", 
    price:"Ksh 13 300", 
    previous:" ksh 13 720"
  },
    { 
      id:'12',
    src:'https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/64/2124031/1.jpg?8480', 
    description:"xiaomi 78t 6GB RAM 128GB ROM", 
    alt:"phone illusion isn't available ", 
    price:"Ksh 11 000", 
    previous:" ksh 11 420"
  },
    { 
      id:'13',
    src:'https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/53/1775221/1.jpg?6934', 
    description:"feyond f7 4gb RAM 54GB ROM", 
    alt:"phone illusion isn't available ", 
    price:"Ksh 31 000", 
    previous:" ksh 33 120"
  },
     {
      id:'14',
      src:'https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/3775221/1.jpg?7410', 
    description:"Oppo A16k", 
    alt:"phone illusion isn't available ", 
    price:"Ksh 10 900", 
    previous:" ksh 11 320"
  },
    { 
    id:'15',
    src:'https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/40/2139061/1.jpg?0005', 
    description:"Techno spark 8c", 
    alt:"phone illusion isn't available ", 
    price:"Ksh 16 000", 
    previous:" ksh 320"
  }
  
  
  ];

  return (
    <div>
      <Interfaces />
        <div className="product-compo">
      {imagesData.map((image, index) => (
        
        <ImageCard
          key={index}
          src={image.src}
          description={image.description}
          price={image.price}
          previous={image.previous}
        />
        
      ))}
      </div>
    </div>
  );
};

export default Data;