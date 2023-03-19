export default function BeforeColumn({ data }: { data: string[] }) {
  return (
    <div className="al">
      <div className="al-inside">
        {data.map((item, key) => (
          <div className="al-item word small" key={key}>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
