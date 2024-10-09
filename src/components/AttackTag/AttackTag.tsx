type P = {
    name: string;
    power: number | null; // some moves don't have power (status moves)
}

function AttackTag({ name, power }: P) {
    return (
        <div className="attack-tag">
          {name} {power ?? '--'}
        </div>
    );
}

export default AttackTag;
