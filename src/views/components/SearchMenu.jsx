import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../UserContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const menu_url = "https://647a6c7ed2e5b6101db05858.mockapi.io/menu/";

const blankUser = {
  createdAt: "",
  nombre: "",
  precio: "",
  foto: "",
  id: ""
}

const UserSearch = () => {

  const { user } = useContext(UserContext)
  //la palabra de la busqueda que escribo en el input
  const [searchTerm, setSearchTerm] = useState('');
  //guardamos los usuarios
  const [menus, setMenus] = useState([]);
  //usuarios filtrados, que coinciden con el la palabra de busqueda

  const [sortedMenus, setSortedMenus] = useState([]);

  //Ordena de mayor a menor o viseversa, mediante un estado booleano
  const [ordAscDesc, setOrdAscDesc] = useState(true);

  const [currentUser, setCurrentUser] = useState(blankUser);

  const deleteOne = (menu) => {
    fetch(`${menu_url}${menu.id}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then(data => {
        setCurrentUser(data);
        window.location.reload()
      })
      .catch((err) => console.error(err));
  }

  const fetchMenus = (url) => {
    fetch(url)
      .then(res => res.json())
      .then(menus => {
        setMenus(menus);
      })
      .catch(err => console.error(err))
  }
  useEffect(() => {
    fetchMenus(menu_url);
  }, []);

  
  const handleSearch = () => {
    const filtered = menus.filter((usr) =>
      usr.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setMenus(filtered.slice(0, 10)); 
  };

  const SortPrice = () => {
    const sorted = menus.sort((a, b) => {
      if (ordAscDesc) {
        return a.precio - b.precio; 
      } else {
        return b.precio - a.precio; 
      }
    });
    setSortedMenus(sorted);
  }

  const handleSort = () =>{
    setOrdAscDesc(!ordAscDesc);
    SortPrice();
  }

  const handleReset = () => {
    //setMenus(menus);
    setSearchTerm('');
    fetchMenus(menu_url)
  };


  function handleAdvise() {
    Swal.fire('Proximamente.....')
  }

  return (
    <>
      <div>
        <h2 className='title2-description'>¿Qué vas a pedir hoy?</h2>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch} className='busqueda'>Buscar</button>
        <button onClick={handleSort} className='busqueda'>Ordenar por precio</button>
        <button onClick={handleReset} className='busqueda'>Limpiar Busqueda</button>
      </div>
      <div className='card-format'>
        {user ? (
          menus.map((menu, index) => (
            <div className="card" key={index}>
              <img src={menu.foto} className="card-img-top" alt="photo-menu" />
              <div className="card-body">
                <h5 className="card-title">{menu.nombre}</h5>
                <p className="card-text">${menu.precio} </p>
                <a onClick={handleAdvise} className="btn btn-outline-success margin-btn">Agregar al carrito</a>
                <Link onClick={() => deleteOne(menu)}><button className='btn btn-danger'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                </svg></button></Link>
              </div>
            </div>
          ))
        ) : (
          menus.map((menu, index) => (
            <div className="card" key={index}>
              <img src={menu.foto} className="card-img-top" alt="photo-menu" />
              <div className="card-body">
                <h5 className="card-title">{menu.nombre}</h5>
                <p className="card-text">${menu.precio} </p>
                <Link to={"/login.jsx"} className="btn btn-outline-success">Agregar al carrito</Link>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default UserSearch;

