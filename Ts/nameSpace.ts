namespace Geometry{

    export const PI = 3.14;

    export class Calc {
        area(width: number, height: number):number{
            return width * height;
        }
    }    

    export function calc_areg(radius: number): number{
        return Math.PI + radius + radius;
    }

}

console.log(Geometry.PI);

namespace Shape12 {
    export namespace Circle {
        export const PI = 3.14;
    }
}