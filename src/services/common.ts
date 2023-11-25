export function newTab(url: string, active:boolean) {
    if (!active) {
        return;
    }
    if (!(url.length > 1)) {
        return;
    }
    
    window.open(url, "_blank")?.focus();
}