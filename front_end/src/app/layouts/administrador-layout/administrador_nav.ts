import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Administrador',
    url: 'home',
    icon: 'icon-speedometer',
  },
  {
    name: 'Trabajadores',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Listar Trabajadores',
        url: 'listarTrabajadores',
        icon: 'icon-list'
      },
      {
        name: 'Registrar Trabajador',
        url: 'registrarTrabajador',
        icon: 'icon-user-follow'
      },
    ]
  },
  {
    name: 'Clientes',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Listar Clientes',
        url: 'listarClientes',
        icon: 'icon-list'
      },
      {
        name: 'Registrar Cliente',
        url: 'registrarCliente',
        icon: 'icon-user-follow'
      },
    ]
  },
];
