import { IShape } from "./IShape";

export class Circle implements IShape{
    draw(): void {
       console.log("el circulo se ha dibujado")
    }
    
}