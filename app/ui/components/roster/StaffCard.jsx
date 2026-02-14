import "@/app/ui/styles/roster/StaffCard.css";

export default function StaffCard({ staff }) {
  return (
    <div className="staff-grid">
      {staff.map((member, index) => {
        const [name, role] = member.split(" – ");
        return (
          <div key={index} className="staff-card">
            <h3 className="staff-name">{name}</h3>
            <p className="staff-role">{role}</p>
          </div>
        );
      })}
    </div>
  );
}
