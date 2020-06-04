import React, {useState, useEffect, Fragment } from 'react';
import MoviesServices from '../../services/movies/MoviesServices';
import './Genres.scss';
import Movies from '../Movies/Movies';


const Genres = () =>{
    const [data, setData] = useState({ results: [] as any });
    const [cargado, setCargado] = useState(false);

    interface State {
        name: string;
        genre: string;
      }
    const initialState = {
      name: "",
      genre: ""
    }
    const [search, setSearch] = useState<State>(initialState);
    useEffect(() => {
        obtener_generos();
    }, []);
  
    const obtener_generos = () => {
        MoviesServices.getGenres()
        .then(response => {
          setData(response.data);
          setCargado(true);
        })
        .catch(e => {
          console.log(e);
        });
    };
  
    return (
        <Fragment>
            <div className="card mt-4 tarjeta">

                <h3 className="text-center">Buscadores</h3>
                <div className="card-body">
                        <div className="form-grup row ">
                        <label className="ml-3 mt-2">Generos</label>   
                        <select className="form-control col-sm-3 ml-2 float-left" onChange={evt=> setSearch({...search,genre: evt.target.value})}>
                            <option value="">---seleccione --</option>
                            {!cargado? <option>cargando generos</option>: 
                            <Fragment>
                                {data.results.map((genre:any) =>(
                                    <option value={genre.code} key={genre.code}>{genre.label}</option>
                                ))}
                            </Fragment>
                            }
                        </select>
                        <label className=" ml-3 mt-2">Nombre</label>   
                        <input type="text" className="form-control col-sm-3 ml-2 float-left" id="name" onChange={evt=> setSearch({...search,name: evt.target.value})} />
                    </div>
                </div>
            </div>
            <Movies.Movies search={search}  />
            </Fragment>
      

    )
}

export default Genres;