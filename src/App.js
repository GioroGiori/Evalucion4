import {useState} from 'react';
import './App.css';
import img1 from './images/unknown.png';
import img2 from './images/unknow2n.png';

//Giovanni Enrique Romero Brito


function App() {

    function añadir(event) {
        event.preventDefault();
        // Declaraciones del formulario
        const codigo = parseFloat(event.target.txt_Codigo.value);
        const producto = event.target.txt_Producto.value;
        const descripcion = event.target.txt_Descripcion.value;
        const precio = parseFloat(event.target.txt_Precio.value);
        // Declaracion sobre el 10% de descuento
        const descuento = 10; // 10% de descuento
        const cantidad = parseFloat(event.target.txt_Cantidad.value);
        const total = parseFloat(cantidad * precio); // cantidad * precio
        const totalDescuento = parseInt(total - (total * (descuento / 100))); // Se aplica el descuento
        // Verifiaciones
        if (!codigo) {
          alert("El codigo no puede quedar vacio.")
          return false;
        };
        if (!producto) {
          alert("El producto no puede quedar vacio.")
          return false;
        };
        if (!descripcion) {
          alert("La descripcion no puede quedar vacia.")
          return false;
        };
        if (!precio) {
          alert("El precio no puede quedar vacio.")
          return false;
        };
        if (!cantidad) {
          alert("La cantidad no puede quedar vacia.")
          return false;
        };
        // Envio
        const contenido = {
          codigo:codigo,
          producto:producto,
          descripcion:descripcion,
          precio:precio,
          descuento:descuento,
          cantidad:cantidad,
          total:total,
          totalDescuento:totalDescuento
        };
        // Renderizado
        setProducto([...productos, contenido]);
        // Limpieza
        event.target.txt_Codigo.value = '';
        event.target.txt_Producto.value = '';
        event.target.txt_Descripcion.value = '';
        event.target.txt_Precio.value = '';
        event.target.txt_Cantidad.value = '';
      }
    
      const [productos, setProducto] = useState([]);
    
      return (
        <div className="row">
          <div class="col-md-5">
            {/* formulario */}
            <form onSubmit={añadir}>
              Codigo 
              <input className="form-control" type="text" name="txt_Codigo" placeholder="Solo numeros" required/><br />
              Producto 
              <input className="form-control" type="text" name="txt_Producto" placeholder="Titulo" required/><br />
              Descripcion 
              <input className="form-control" type="text" name="txt_Descripcion" placeholder="Descripcion breve" /><br />
              Precio
              <input className="form-control" type="number" name="txt_Precio" placeholder="Sin simbolo $" required/><br />
              {/* Descuento
              <input className="form-control" type="text" name="txt_Descuento" /><br /> */}
              Cantidad
              <input className="form-control" type="number" name="txt_Cantidad" placeholder="Copias" required/><br />
              <br />
              <input className="btn btn-primary" type="submit" value="Aceptar"/>
            </form>
          </div>
          <div class="col-md-6">

            

            <img src={img1} alt="" width="500px"/>
            <img src={img2} alt="" width="500px"/>


            
              
          </div>
          <div className="container">
            <br />
            <hr />
            <br />
            <table class="table table-bordered text-center">
              <thead class="table-warning"><tr>
                <th>Código</th>
                <th>Producto</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Descuento</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th>Total con Descuento</th>
              </tr></thead>
              <tbody>
                {productos.map(art => {
                  return (
                    <tr key={art.codigo}>
                      <td>
                        {art.codigo}
                      </td>
                      <td>
                        {art.producto}
                      </td>
                      <td>
                        {art.descripcion}
                      </td>
                      <td>
                        {art.precio}
                      </td>
                      <td>
                        {art.descuento}%
                      </td>
                      <td>
                        {art.cantidad}
                      </td>
                      <td>
                        {art.total}
                      </td>
                      <td>
                        {art.totalDescuento}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
    
    export default App;