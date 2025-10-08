export type SkillLogo = { label: string; logoSrc: string };

export type SkillLogoGridProps = {
  items?: SkillLogo[];
};

export default function SkillLogoGrid({ items = [] }: SkillLogoGridProps) {
  return (
    <div className="d-flex flex-wrap gap-3">
      {items.map(({ label, logoSrc }) => (
        <div key={label} className="skill-chip rounded-2">
          <img src={logoSrc} alt={`${label} logo`} />
          <span className="label">{label}</span>
        </div>
      ))}
    </div>
  );
}