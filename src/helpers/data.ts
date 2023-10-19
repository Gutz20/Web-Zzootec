import { GridColDef } from "@mui/x-data-grid";

export const linksDrawerCat1 = ["Inbox", "Starred", "Send Email", "Drafts"];
export const linksDrawerCat2 = ["All mail", "Trash", "Span"];

export const rowsCustomers = [
  {
    id: 1,
    firstName: "Michael",
    secondName: "Lawson",
    phoneNumber: "932 546 856",
    numberRandom: "31232133",
    address: "Avenida Siempre Viva",
  },
  {
    id: 2,
    firstName: "David",
    secondName: "Laid",
    phoneNumber: "954 785 985",
    numberRandom: "4565765",
    address: "Nueva Direccion 😏",
  },
  {
    id: 3,
    firstName: "Michael",
    secondName: "Lawson",
    phoneNumber: "932 546 856",
    numberRandom: "31232133",
    address: "Avenida Siempre Viva",
  },
  {
    id: 4,
    firstName: "Michael",
    secondName: "Lawson",
    phoneNumber: "932 546 856",
    numberRandom: "31232133",
    address: "Avenida Siempre Viva",
  },
  {
    id: 5,
    firstName: "Michael",
    secondName: "Lawson",
    phoneNumber: "932 546 856",
    numberRandom: "31232133",
    address: "Avenida Siempre Viva",
  },
  {
    id: 6,
    firstName: "Michael",
    secondName: "Lawson",
    phoneNumber: "932 546 856",
    numberRandom: "31232133",
    address: "Avenida Siempre Viva",
  },
];

export const columnsCustomers: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "Primer Nombre",
    width: 200,
    editable: true,
  },
  {
    field: "secondName",
    headerName: "Seg. Nombre",
    width: 200,
    editable: true,
  },
  {
    field: "phoneNumber",
    headerName: "Telefono",
    width: 200,
    editable: true,
  },
  {
    field: "numberRandom",
    headerName: "Numero",
    width: 200,
    editable: true,
  },
  {
    field: "address",
    headerName: "Dirección",
    width: 200,
    editable: true,
  },
];

export const rowsDelivery = [
  {
    id: 1,
    firstName: "Michael",
    secondName: "Lawson",
    phoneNumber: "932 546 856",
    numberRandom: "31232133",
    address: "Avenida Siempre Viva",
    description: "Descripcion",
  },
  {
    id: 2,
    firstName: "David",
    secondName: "Laid",
    phoneNumber: "954 785 985",
    numberRandom: "4565765",
    address: "Nueva Direccion 😏",
    description: "Descripcion",
  },
  {
    id: 3,
    firstName: "Michael",
    secondName: "Lawson",
    phoneNumber: "932 546 856",
    numberRandom: "31232133",
    address: "Avenida Siempre Viva",
    description: "Descripcion",
  },
  {
    id: 4,
    firstName: "Michael",
    secondName: "Lawson",
    phoneNumber: "932 546 856",
    numberRandom: "31232133",
    address: "Avenida Siempre Viva",
    description: "Descripcion",
  },
  {
    id: 5,
    firstName: "Michael",
    secondName: "Lawson",
    phoneNumber: "932 546 856",
    numberRandom: "31232133",
    address: "Avenida Siempre Viva",
    description: "Descripcion",
  },
  {
    id: 6,
    firstName: "Michael",
    secondName: "Lawson",
    phoneNumber: "932 546 856",
    numberRandom: "31232133",
    address: "Avenida Siempre Viva",
    description: "Descripcion",
  },
];

export const columnsDelivery: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "Primer Nombre",
    width: 200,
    editable: true,
  },
  {
    field: "secondName",
    headerName: "Seg. Nombre",
    width: 200,
    editable: true,
  },
  {
    field: "phoneNumber",
    headerName: "Telefono",
    width: 200,
    editable: true,
  },
  {
    field: "numberRandom",
    headerName: "Numero",
    width: 200,
    editable: true,
  },
  {
    field: "address",
    headerName: "Dirección",
    width: 200,
    editable: true,
  },
  {
    field: "description",
    headerName: "Descripción",
    width: 200,
    editable: true,
  },
];

export const rowsProducts = [
  {
    id: 1,
    name: "Test",
    price: 500,
    stock: 5,
    type: "Mobiles",
    provider: "Juan",
  },
  {
    id: 2,
    name: "Test",
    price: 500,
    stock: 5,
    type: "Mobiles",
    provider: "Juan",
  },
  {
    id: 3,
    name: "Test",
    price: 500,
    stock: 5,
    type: "Mobiles",
    provider: "Juan",
  },
  {
    id: 4,
    name: "Test",
    price: 500,
    stock: 5,
    type: "Mobiles",
    provider: "Juan",
  },
  {
    id: 5,
    name: "Test",
    price: 500,
    stock: 5,
    type: "Mobiles",
    provider: "Juan",
  },
];

export const columnsProducts: GridColDef[] = [
  { field: "id", headerName: "Codigo", width: 90 },
  {
    field: "name",
    headerName: "Nom. Producto",
    width: 200,
    editable: true,
  },
  {
    field: "price",
    headerName: "Precio",
    width: 200,
    editable: true,
  },
  {
    field: "stock",
    headerName: "Stock",
    width: 200,
    editable: true,
  },
  {
    field: "type",
    headerName: "Tipo",
    width: 200,
    editable: true,
  },
  {
    field: "provider",
    headerName: "Proveedor",
    width: 200,
    editable: true,
  },
];

export const rowsEmployees = [
  {
    id: 1,
    name: "Ricardo  Suarez",
    gender: "Hombre",
    contract: "20/06/2022",
    formEntry: "TheAlpaka",
    formOut: "TheAlpaka",
  },
  {
    id: 2,
    name: "Ricardo  Suarez",
    gender: "Hombre",
    contract: "20/06/2022",
    formEntry: "TheAlpaka",
    formOut: "TheAlpaka",
  },
  {
    id: 3,
    name: "Ricardo  Suarez",
    gender: "Hombre",
    contract: "20/06/2022",
    formEntry: "TheAlpaka",
    formOut: "TheAlpaka",
  },
  {
    id: 4,
    name: "Ricardo  Suarez",
    gender: "Hombre",
    contract: "20/06/2022",
    formEntry: "TheAlpaka",
    formOut: "TheAlpaka",
  },
  {
    id: 5,
    name: "Ricardo  Suarez",
    gender: "Hombre",
    contract: "20/06/2022",
    formEntry: "TheAlpaka",
    formOut: "TheAlpaka",
  },
];

export const columnsEmployees: GridColDef[] = [
  { field: "id", headerName: "Id", width: 90 },
  {
    field: "name",
    headerName: "Empleado",
    width: 200,
    editable: true,
  },
  {
    field: "gender",
    headerName: "Sexo",
    width: 200,
    editable: true,
  },
  {
    field: "contract",
    headerName: "Contrato",
    width: 200,
    editable: true,
  },
  {
    field: "formEntry",
    headerName: "F.Ingreso",
    width: 200,
    editable: true,
  },
  {
    field: "formOut",
    headerName: "F.Salida",
    width: 200,
    editable: true,
  },
];

export const rowsMarketing = [
  {
    id: 1,
    title: "Test",
    sector: "Test",
    formEntry: "20/06/2022",
    formOut: "20/08/2022",
    description: "test description",
  },
  {
    id: 2,
    title: "Test",
    sector: "Test",
    formEntry: "20/06/2022",
    formOut: "20/08/2022",
    description: "test description",
  },
  {
    id: 3,
    title: "Test",
    sector: "Test",
    formEntry: "20/06/2022",
    formOut: "20/08/2022",
    description: "test description",
  },
  {
    id: 4,
    title: "Test",
    sector: "Test",
    formEntry: "20/06/2022",
    formOut: "20/08/2022",
    description: "test description",
  },
  {
    id: 5,
    title: "Test",
    sector: "Test",
    formEntry: "20/06/2022",
    formOut: "20/08/2022",
    description: "test description",
  },
  {
    id: 6,
    title: "Test",
    sector: "Test",
    formEntry: "20/06/2022",
    formOut: "20/08/2022",
    description: "test description",
  },
];

export const columnsMarketing: GridColDef[] = [
  { field: "id", headerName: "Id", width: 90 },
  {
    field: "title",
    headerName: "Titulo",
    width: 200,
    editable: true,
  },
  {
    field: "sector",
    headerName: "Sector",
    width: 200,
    editable: true,
  },
  {
    field: "formEntry",
    headerName: "F.Public",
    width: 200,
    editable: true,
  },
  {
    field: "formOut",
    headerName: "F.Fin",
    width: 200,
    editable: true,
  },
  {
    field: "description",
    headerName: "Descripcion",
    width: 200,
    editable: true,
  },
];

export const rowsReports = [
  {
    id: 1,
    form: "Marketing",
    user: "Juan",
    date: "20/06/2022",
  },
  {
    id: 2,
    form: "Marketing",
    user: "Juan",
    date: "20/06/2022",
  },
  {
    id: 3,
    form: "Marketing",
    user: "Juan",
    date: "20/06/2022",
  },
  {
    id: 4,
    form: "Marketing",
    user: "Juan",
    date: "20/06/2022",
  },
  {
    id: 5,
    form: "Marketing",
    user: "Juan",
    date: "20/06/2022",
  },
  {
    id: 6,
    form: "Marketing",
    user: "Juan",
    date: "20/06/2022",
  },
];

export const columnsReports: GridColDef[] = [
  {
    field: "form",
    headerName: "Formulario",
    width: 400,
    editable: true,
  },
  {
    field: "user",
    headerName: "Usuario",
    width: 400,
    editable: true,
  },
  {
    field: "date",
    headerName: "Fecha",
    width: 400,
    editable: true,
  },
];
