import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'conversor'
})

export class ConversorPipe implements PipeTransform{
    transform(one, two){
        let value_one = parseInt(one);
        let value_two = parseInt(two);
        let result = "El resultado de la multiplicacion de "+value_one+" + "+value_two +" = "+(value_one*value_two);
        return result;
    }
}