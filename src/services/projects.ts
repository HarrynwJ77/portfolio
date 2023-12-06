interface Projects {
    title: string;
    image: string;
    example: string;
    src: string;
    exampleActive: boolean;
    srcActive: boolean;
}

export function getProjects(jsonData: Projects[]): {[key: string]: Projects} {
    

    const all_projects: { [key: string]: Projects } = {};

    jsonData.forEach((jsonObject: Projects, index: number) => {
        console.log(jsonObject);
        const key = "object&{index + 1}";
        all_projects[key] = jsonObject;
    });

    return all_projects;
}