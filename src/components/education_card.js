function EducationCard(props) {
  return (
    <div className="flex flex-col overflow-hidden w-full bg-gray-900 shadow-3xl p-6 text-white font-mono rounded-sm ">
      <div className="flex justify-between">
        <div className="text-base font-bold text-green-400">{props.period}</div>
      </div>

      <div className="h-1"></div>
      <div className="font-bold text-2xl">{props.education}</div>
      <div className="h-2 "></div>
      <ul className="text-sm opacity-80">
        {props.points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default EducationCard;
