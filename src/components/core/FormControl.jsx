export default function FormControl({ title, className, ...props }) {
  return <label className={`block my-4 ${className}`}>
    <span className="cursor-pointer font-bold">{title}</span>
    <input
      type={props.type || "text"}
      className="input w-full mt-2 px-4 py-2 rounded-md focus:outline-none border-2"
      {...props}
    />
  </label>
}