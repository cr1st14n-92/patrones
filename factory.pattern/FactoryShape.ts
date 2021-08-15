import { Circle } from "./Cricle";
import { Rectangle } from "./Rectangle";
import { Square } from "./Square";

export class FactoryShape{

    static readonly CIRCLE:string="CIRCLE"
    static readonly SQUARE:string="CUADRADO"
    static readonly RECTANGLE:string="RECTANGLE"

    static create(entity:string){

        if(entity===FactoryShape.CIRCLE){
            return new Circle()
        }
        else if(entity === FactoryShape.SQUARE){
            return new Square()
        }
        else if(entity === FactoryShape.RECTANGLE){
            return new Rectangle()
        }

    }
}