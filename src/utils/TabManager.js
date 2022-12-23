export default class TabManager{
    constructor(rootElement, componentMapping){
        this.rootElement = rootElement;
        this.componentMapping = componentMapping;
    }

    async openTabsById(id, props = []){
        if(id in this.componentMapping){
            const {component, params} = this.componentMapping[id];
            this.rootElement.innerHTML = ''
            console.log(props.length, props, params)
            const Component = await component(...(props.length ? props : params));
            this.rootElement.appendChild(Component);
            console.log(id, props[0])
            window.history.replaceState({}, '', `/${id}/${props[0]?props[0]:''}`);

        }else{
            throw new Error("No tab with id: "+id);
        }
    }
}