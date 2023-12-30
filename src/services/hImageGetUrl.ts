export function getImageUrl(name:string) {
    console.log("Getting image with url: " + name);
    return new URL(`../assets/images/${name}`, import.meta.url).href;
}
