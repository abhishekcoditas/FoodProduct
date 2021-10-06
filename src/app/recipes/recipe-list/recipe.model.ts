import { ingredients } from "src/app/shared/ingredients.model";

export class recipes{
    public name : string;
    public description : string;
    public imagePath : string;
    public ingredient : ingredients[];

    constructor (name:string,desc:string,imagePath:string,ingredient:ingredients[]){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredient = ingredient;
    }
}