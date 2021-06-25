import TextInput from "../../components/TextInput";

const fields = [
    {
        name: "email",
        component: TextInput,
        placeholder: "Email",
        label: "Email",
        value: "",
    },
    {
        name: "password",
        component= TextInput,
        placeholder: "Password",
        label: "Password",
        value: "",
    },
];

export const initialValues = fields.reduce((p, c) => {
    return { ...p, [p.name]: p.value };
   }, {});
