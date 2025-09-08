import { jsx as _jsx } from "react/jsx-runtime";
import { Combobox } from "../components/Search/combobox";
var frameworks = [
    { value: "next.js", label: "Next.js" },
    { value: "sveltekit", label: "SvelteKit" },
    { value: "nuxt.js", label: "Nuxt.js" },
];
var Home = function () {
    return (_jsx("div", { className: "w-[600px] mx-auto mt-2", children: _jsx(Combobox, { options: frameworks }) }));
};
export default Home;
