import Handlebars from 'handlebars'

export default {
    sum: (a, b) => a + b,
    softable: (field, soft) => {
        const softType = field === soft.column ? soft.type : "default";

        const icons = {
            default: "oi oi-elevator",
            asc: "oi oi-sort-ascending",
            desc: "oi oi-sort-descending",
        };

        const types = {
            default: "desc",
            asc: "desc",
            desc: "asc",
        };

        const icon = icons[softType];
        const type = types[softType];

        const href = Handlebars.escapeExpression(`?_soft&column=${field}&type=${type}`)

        const output = ` <a href='${href}' style="color: black;">
        <span class="${icon}"></span></a>`;

        return new Handlebars.SafeString(output);
    },
};