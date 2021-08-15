import { FactoryShape } from "./FactoryShape";
import { IShape } from "./IShape";


const circle:IShape = FactoryShape.create(FactoryShape.CIRCLE)
circle.draw()
/*
const cuadrado:IShape = FactoryShape.create(FactoryShape.SQUARE)
cuadrado.draw()*/