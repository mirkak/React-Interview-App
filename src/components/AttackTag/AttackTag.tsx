type P = {
    name: string;
    power: number | null;
}

function AttackTag({ name, power }: P) {
    return (
        <div className="attack-tag">
          {name} {power ?? '--'}
        </div>
    );
}

export default AttackTag;
