import { INavData } from '@coreui/angular';

export const navItemsOperario: INavData[] = [
  {
    name: 'Operario',
    url: 'home',
    icon: 'icon-speedometer',
  },
  {
    name: 'Obras',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Registrar Evidencia',
        url: 'registrarEvidencia',
        icon: 'icon-list'
      }
    ]
  },
];

export const navItemsJefeObra: INavData[] = [
  {
    name: 'Jefe de Obra',
    url: 'home',
    icon: 'icon-speedometer',
  },
  {
    name: 'Supervisar Obras',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Listar Evidencias',
        url: 'listarEvidencias',
        icon: 'icon-list'
      },{
        name: 'Asignar Trabajadores',
        url: 'listarTrabajadores',
        icon: 'icon-list'
      },
      {
        name: 'Solicitar material de obra',
        url: 'solicitarMaterial',
        icon: 'icon-user-follow'
      },
    ]
  },
];

export const navItemsJefeAlmacen: INavData[] = [
  {
    name: 'Jefe de almacen',
    url: 'home',
    icon: 'icon-speedometer',
  },
  {
    name: 'Obras',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Autorización de solicitudes de materiales',
        url: 'listarSolicitudesMateriales',
        icon: 'icon-list'
      },
      {
        name: 'Ver inventario',
        url: 'listarMateriales',
        icon: 'icon-user-follow'
      },
    ]
  },
];


