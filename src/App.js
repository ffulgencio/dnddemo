import { DragDropContext } from "react-beautiful-dnd";
import DroppableTable from "./components/DroppableTable";
import { useState } from "react";
import ProductTable from "./components/ProductTable";
import DraggableRow from "./components/DraggableRow";
import Row from "./components/Row";
import OldProductTable from "./components/OldProductTable";

const datos = [
  { id: "1", nombre: "Guillermo", descripcion: "descripcion", precio: 20.88 },
  { id: "2", nombre: "Maria", descripcion: "descripcion", precio: 20.88 },
  { id: "3", nombre: "Antonio", descripcion: "descripcion", precio: 20.88 },
  { id: "4", nombre: "José", descripcion: "descripcion", precio: 20.88 },
  { id: "5", nombre: "Manuel", descripcion: "descripcion", precio: 20.88 },
];

function reOrder(items, initialPos, endPos) {
  const result = [...items];
  const [removed] = result.splice(initialPos, 1);
  result.splice(endPos, 0, removed);
  return result;
}

function App() {
  const [aspirantes, setAspirantes] = useState(datos);
  const [noAspirantes, setNoAspirantes] = useState([]);
  return (
    <DragDropContext
      onDragEnd={(result) => {
        const { source, destination } = result
        console.log(result);
        if (source.droppableId == destination.droppableId) {
          setAspirantes((prev) => {
            const valor = reOrder(prev, source.index, destination.index);
            //console.log(valor);
            return valor;
          });
          // setNoAspirantes((prev) => {
          //   const valor = reOrder(prev, source.index, destination.index);
          //   //console.log(valor);
          //   return valor;
          // });
        }else{
          
          setNoAspirantes(prev=>{
            return [...prev,aspirantes[source.index]]
          })
          setAspirantes(prev => prev.filter(x =>x.id !== aspirantes[source.index].id));
        }
      }}
    >
      <DroppableTable droppableId={"productTable"}>
        <ProductTable>
          {aspirantes.map((item, i) => (
            <DraggableRow key={i} id={"productTable"+item.id} index={i}>
              <Row item={item} />
            </DraggableRow>
          ))}
        </ProductTable>
      </DroppableTable>
      <br />
      <DroppableTable droppableId={"OldproductTable"}>
        <OldProductTable>
          {noAspirantes.map((item, i) => (
            <DraggableRow key={i} id={"OldproductTable"+item.id} index={i}>
              <Row item={item} />
            </DraggableRow>
          ))}
        </OldProductTable>
      </DroppableTable>
    </DragDropContext>
  );
}

export default App;
