export default function Input({ label, invalid, ...props }) {
  let lebalclass = 'block mb-2 text-xs font-bold tracking-wide uppercase';
  let inputClass = 'w-full px-3 py-2 leading-tight  border rounded shadow ';
  if(invalid){
   lebalclass += ' text-red-400';
   inputClass += ' text-red-500 bg-red-100 border-red-300'
  }else{
    lebalclass += ' text-stone-300';
    inputClass += ' text-gray-700 bg-stone-300'
     
  }
  return (
    <p>
      <label className={lebalclass}>{label}</label>
      <input className={inputClass} {...props} />
    </p>
  );
}