import "./App.css";
import { useState } from "react";
import Modal from "./Components/Modal";
import { formatMoney } from "./utils/formatMoney";

function App() {
  const array = [
    {
      id: 0,
      name: "Frango Assado com toque de Limão",
      price: 1.50,
      img: "https://www.extraplus.com.br/uploads/produtos/350x350/37222_20171106162523_thumb_37222_MacarraoInstantaneoLamenNissinMiojoFrangoAssadocomToquedeLimao85g.jpg",
    },
    {
      id: 1,
      name: "Miojo de carne",
      price: 2.5,
      img: "https://m.media-amazon.com/images/I/61dnOsy2nhL._AC_SX425_.jpg",
    },
    {
      id: 2,
      name: "Galinha Cai e Pira",
      price: 3.0,
      img: "https://static.clubeextra.com.br/img/uploads/1/313/590313.png",
    },
    {
      id: 3,
      name: "KIT - 5 SABORES",
      price: 8.0,
      img: "https://http2.mlstatic.com/D_NQ_NP_970947-MLB41470765911_042020-O.webp",
    },
    {
      id: 4,
      name: "SUPER PROMOÇÃO - 10 SABORES",
      price: 10.0,
      img: "https://cf.shopee.com.br/file/a83b4a2615d0ad45fdb78a5bd9447871",
    },
    {
      id: 5,
      name: "De Boas na Lagoa - KIT 3 Sabores",
      price: 1.0,
      img: "https://gkpb.com.br/wp-content/uploads/2020/10/nissin-de-boas-produtos.jpg",
    },
    {
      id: 6,
      name: "Chocãolate",
      price: 1.1,
      img: "https://gkpb.com.br/wp-content/uploads/2022/04/nissin-lamen-doce-sabor-chocolate.jpg.webp",
    },
    {
      id: 7,
      name: "Beijinho",
      price: 3.5,
      img: "https://gkpb.com.br/wp-content/uploads/2022/04/nissin-lamen-doce-sabor-beijinho.jpg.webp",
    },
    {
      id: 8,
      name: "Vai Malandra",
      price: 3.2,
      img: "https://scontent.fjdo10-1.fna.fbcdn.net/v/t31.18172-8/29351672_1320666994700022_8292793529942956395_o.jpg?stp=dst-jpg_s720x720&_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFi1JhvX0jIeurG4Byxr0rJFlX_yZWrARYWVf_JlasBFi7zi-uQK8pZCbNzOOSo_X4QKMku9iB8e6uPNR4QOLR-&_nc_ohc=5llv-MWsBIoAX98Erj1&_nc_ht=scontent.fjdo10-1.fna&oh=00_AT8bKQeP9U2GQXPbY7k_nZju5N2aiuSsxmEmx7P_fejgIQ&oe=62B4CA46",
    },
  ];

  const [cart, setCart] = useState({
    totalValue: 0.0,
    itemsNumber: 0,
    items: [],
  });

  const [modal, setModal] = useState(false);

  function addItem(item) {
    setCart({
      totalValue: cart.totalValue + item.value,
      itemsNumber: cart.itemsNumber+1,
      items: [...cart.items, item],
    })
    console.log(cart.totalValue)
  }

  return (
    <div className="App">
      <Modal data={cart} isOpen={modal} setIsOpen={setModal} />      <div>
        <div className="flex justify-between w-full p-5 font-bold bg-white drop-shadow-xl">
          <div>
            <p className="inline text-red-500">N&L</p> Store
          </div>
          <button
            id="open-modal"
            onClick={() => setModal(true)}
            className="px-2 py-1 text-white bg-red-600 rounded-md"
          >
            Carrinho de compras:{" "}
            <p id="shopping_cart" className="inline font-bold">
              {formatMoney(cart.totalValue)}
            </p>
          </button>
        </div>
        <div className="flex flex-col items-center w-screen h-full p-4 bg-red-600">
          <div className="w-3/4 p-4 bg-white rounded-md drop-shadow-xl">
            <h1 className="mb-4 text-xl font-bold text-center">Produtos</h1>
            <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2">
              {array.map((product, index) => (
                <div
                  id={"product-" + product.id}
                  key={index}
                  className="flex flex-col items-center p-3 bg-gray-100"
                >
                  <p className="mb-4 font-medium">{product.name}</p>
                  <img
                    className="max-h-40"
                    src={product.img}
                    alt="Miojo Premium"
                  />

                  <p className="mb-4 text-xl font-bold text-green-900">
                    {formatMoney(product.price)}
                  </p>
                  <button
                    onClick={() => addItem(product)}
                    className="px-2 py-1 text-sm bg-yellow-400 rounded-md add-to-kart"
                  >
                    Adicionar ao carrinho
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
