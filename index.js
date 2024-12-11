import { randomFactList } from "./list";

export default function getRandomFact() {
    const random = Math.floor(Math.random() * randomFactList.length);
    return randomFactList[random];
}