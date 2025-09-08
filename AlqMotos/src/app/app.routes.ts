import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
    {path:'', component : HomeComponent},
    {path : 'Nosotros', component: AboutComponent},
    {path : 'Productos', component : ProductsComponent},
    {path : 'Contacto', component : ContactComponent},
    {path :'**', redirectTo : ''}     //aca estoy diciendo que si el usuario se va a una ruta que no existe ('**') lo redirijo al home ('')
];
