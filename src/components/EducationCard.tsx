export type EducationCardProps = {
  school: string;
  detailLines?: string[];
  logoSrc?: string;
};

export default function EducationCard({
  school,
  detailLines = [],
  logoSrc,
}: EducationCardProps) {
  return (
    <div className="bg-light rounded-3 shadow-sm p-3">
      <div className="d-flex align-items-center gap-3">
        <div
          style={{
            width: 56,
            height: 56,
            flex: "0 0 56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
          }}
        >
          {logoSrc && (
            <img
              src={logoSrc}
              alt={`${school} logo`}
              width={50}
              height={50}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                objectPosition: "center",
                display: "block",
              }}
            />
          )}
        </div>

        <div className="flex-grow-1">
          <div className="fw-semibold" style={{ marginBottom: 3 }}>
            {school}
          </div>
          {detailLines.map((line, i) => (
            <div
              key={i}
              className="text-secondary small"
              style={{ marginBottom: i === detailLines.length - 1 ? 0 : 3 }}
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}