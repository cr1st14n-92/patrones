import { IShape } from "./IShape";

export class Square implements IShape{
    draw(): void {
       console.log("el Cuadrado se ha dibujado")
    }
    
}