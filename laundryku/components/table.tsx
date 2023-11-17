export default function Table(props: {
  data: any[];
  rud?: string[];
  footer?: string[];
}) {
  const { data, rud, footer } = props;
  const titles = Object.keys(data[0]);
  const currencyIndexes = titles
    .map((title, index) => (title.includes("harga") ? index : undefined))
    .filter((index) => index !== undefined);
  const padding = "px-8 py-4";

  const toCurrency = (num: number) => "Rp" + num.toLocaleString("id-ID");

  return (
    <table className="max-w-4/5 text-center my-4 bg-white">
      <thead className="text-lg uppercase bg-[#7689E7]">
        <tr>
          {titles.map((item, idx) => (
            <th key={idx} className={padding}>
              {item.replaceAll("_", " ")}
            </th>
          ))}
          {rud && <th className={padding}></th>}
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => (
          <tr key={idx} className="bg-white">
            {Object.values(item).map((val, idx) => (
              <td key={idx} className={padding}>
                {currencyIndexes.includes(idx)
                  ? toCurrency(val as number)
                  : (val as string)}
              </td>
            ))}
            {rud && <td className={padding}>{rud.toString()}</td>}
          </tr>
        ))}
        {footer &&
        <tr>
          {titles.map((_, idx) => (
            <td key={idx}>
              <div
                className={`h-1.5 bg-[#7689E7] ${idx === 0 && "ml-8"} ${
                  idx == titles.length - 1 && !rud && "mr-8"
                }`}
              ></div>
            </td>
          ))}
          {rud && <td >
              <div
                className="h-1.5 bg-[#7689E7] mr-8"
              ></div>
            </td>}
        </tr>
        }
      </tbody>
      <tfoot>
        <tr>
          {footer &&
            Array.from({ length: titles.length - footer.length + (rud ? 1 : 0) }, (_, idx) => (
              <td key={idx} className={padding}></td>
            ))}
          {footer &&
            footer.map((val, idx) => (
              <td key={idx} className={`${padding} uppercase font-semibold`}>
                {val}
              </td>
            ))}
        </tr>
      </tfoot>
    </table>
  );
}
