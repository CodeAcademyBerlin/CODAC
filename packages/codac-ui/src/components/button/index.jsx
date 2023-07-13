export function Button({ color = "pink", ...props }) {
    return (<button style={{ border: "5px solid blue" }} name="button" className={`cursor-pointer rounded-lg border-2 border-codac-${color} px-3 py-2 hover:border-gray-100 hover:text-gray-100 text-codac-${color}`} {...props}/>);
}
