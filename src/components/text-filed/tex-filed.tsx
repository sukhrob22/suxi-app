import { ErrorMessage, FieldHookConfig, useField } from "formik"
import { TextFiledProps } from "./text-filed.props"


const Textfiled = ({ ...props }: TextFiledProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props)

  console.log('Meta=>', meta);
  console.log("IFles=>", field);



  return (
    <div className="inline-block w-full">
      <label className={`inline-block w-full ${meta.touched && meta.error && "border-red-500 border-2"} `}>
        <input className='input' {...props} {...field} />
      </label>
      <p className="text-red-500">
        <ErrorMessage name={field.name} />
      </p>
    </div>
  )
}
export default Textfiled