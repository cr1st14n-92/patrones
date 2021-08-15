import { IShape } from "./IShape";

export class Rectangle implements IShape{
    draw(): void {
       console.log("el Rectangulo se ha dibujado")
    }
    
}