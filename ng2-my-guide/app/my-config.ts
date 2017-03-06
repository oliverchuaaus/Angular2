import { OpaqueToken } from '@angular/core';

export let MY_TOKEN = new OpaqueToken('my.config');

export interface MyConfig {
    name: string;
    age: number;
}

export const BUGS: MyConfig = {
    name: "Bugs Bunny",
    age: 110
};