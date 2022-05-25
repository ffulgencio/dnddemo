import { DragDropContext } from "react-beautiful-dnd";
import DroppableTable from "./components/DroppableTable";
import { useState } from "react";
import ProductTable from "./components/ProductTable";
import DraggableRow from "./components/DraggableRow";
import Row from "./components/Row";
import OldProductTable from "./components/OldProductTable";

const routesMock = [
  {
    id: "Ruta1",
    shipments: [
      {
        id: "1",
        nombre: "Guillermo",
        descripcion: "descripcion",
        precio: 20.88,
      },
      { id: "2", nombre: "Maria", descripcion: "descripcion", precio: 20.88 },
      { id: "3", nombre: "Antonio", descripcion: "descripcion", precio: 20.88 },
      { id: "4", nombre: "José", descripcion: "descripcion", precio: 20.88 },
      { id: "5", nombre: "Manuel", descripcion: "descripcion", precio: 20.88 },
    ],
  },
  {
    id: "Ruta2",
    shipments: [],
  },
];

function reOrder(items, initialPos, endPos) {
  const result = [...items];
  const [removed] = result.splice(initialPos, 1);
  result.splice(endPos, 0, removed);
  return result;
}

function App() {
  const [routes, setRoutes] = useState([...routesMock]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceRoute = routes.filter((x) => x.id == source.droppableId)[0];
      const destinationRoute = routes.filter(
        (x) => x.id == destination.droppableId
      )[0];
      const sourceShipments = [...sourceRoute.shipments];
      const destinationShipments = [...destinationRoute.shipments];
      const [removed] = sourceShipments.splice(source.index, 1);
      destinationShipments.splice(destination.index, 0, removed);
      setRoutes((prev) => [
        ...prev.map((route, i) => {
          if (route.id == sourceRoute.id)
          return {
            id: sourceRoute.id,
            shipments: [...sourceShipments],
          }
          if (route.id == destinationRoute.id)
        return {
          id: destinationRoute.id,
          shipments: [...destinationShipments],
        }
        return route
      })
      ]);
    } else {
      const sourceRoute = routes.filter((x) => x.id == source.droppableId)[0];
      const copiedShipments = [...sourceRoute.shipments];
      const [removed] = copiedShipments.splice(source.index, 1);
      copiedShipments.splice(destination.index, 0, removed);

      setRoutes((prev) =>
        [
          ...prev.map((route, i) => {
            if (route.id == sourceRoute.id) {
              return {id: sourceRoute.id, shipments: [...copiedShipments]};
            }
            return route
          }),
        ]
        
      );
    }
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      {routes.map((route, i) => (
        <DroppableTable key={i} droppableId={route.id}>
          <h2>{route.id}</h2>
          <ProductTable>
            {route.shipments.map((item, i) => (
              <DraggableRow key={i} id={item.id} index={i}>
                <Row item={item} />
              </DraggableRow>
            ))}
          </ProductTable>
          <br />
        </DroppableTable>
      ))}
    </DragDropContext>
  );
}

export default App;
