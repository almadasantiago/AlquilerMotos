import { Injectable } from '@angular/core';

export interface Product { 
   id : number; 
   nombre : string; 
   descripcion : string; 
   precio : number; 
   imagen : string;  
}

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private products : Product [] = [
    {
        id: 1,
        nombre: "Motocicleta de Montaña",
        descripcion: "Motocicleta de montaña de alto rendimiento para senderos.",
        precio: 850.5,
        imagen: "/img/bike-1836962_1920.jpg"
    },
    {
        id: 2,
        nombre: "Moto Deportiva",
        descripcion: "Una motocicleta deportivo elegante y rápida.",
        precio: 45000.0,
        imagen: "/img/cars-1851130_1920.jpg"
    },
    {
        id: 3,
        nombre: "Motocicleta Honda",
        descripcion: "Una motocicleta Honda clásica y confiable.",
        precio: 7200.75,
        imagen: "/img/honda-6241835_1920.jpg"
    },
    {
        id: 4,
        nombre: "Motocicleta Clásica",
        descripcion: "Una motocicleta de estilo clásico para paseos relajantes.",
        precio: 5100.25,
        imagen: "/img/motorbike-407186_1920.jpg"
    },
    {
        id: 5,
        nombre: "Motocicleta de Carretera",
        descripcion: "Motocicleta de carretera ideal para largos viajes.",
        precio: 9800.0,
        imagen: "/img/motorbike-7433291_1920.jpg"
    },
    {
        id: 6,
        nombre: "Motocicleta Yamaha",
        descripcion: "Una potente motocicleta Yamaha con un diseño moderno.",
        precio: 11500.5,
        imagen: "/img/yamaha-5894293_1920.jpg"
    }
  ]
  constructor() { }
  getProducts(): Product[] {
    return this.products; 
  }
}
